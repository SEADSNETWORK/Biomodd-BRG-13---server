// /**
//  * GLOBALS
//  */
const express               = require('express');
const app                   = express();
const path                  = require('path');
const http                  = require('http');
const server                = http.createServer(app);
const io                    = require('socket.io')(server);
const config                = require('./package.json');
const settings              = require('./settings.json');
const logo                  = require('./src/logo').default(config, settings);
const database              = require('./src/database').default(settings);
const cleanup               = require('./src/cleanup').default();
const gameWorld             = require('./src/setupGameWorld').default(settings.game.resolution);
const OSCSound              = new (require('./src/oscSound.js').default);

let clusterController = null;
const { nanoid } = require('nanoid')


const PHASES = Object.freeze({
    LOAD: "load",
    RUNNING: "running",
    END: "ended"
  });

let phase = PHASES.END;

const players = {
    red: false,
    green: false,
    blue: false,
    reds: false,
    greens: false,
    blues: false
}

const state = {
    score : {},
    mirrors: [],
    plants: [],
    red: 0,
    green: 0,
    blue: 0
}

const scoreHistory = []

// database.connect()
// .then(({client, list, add, getData, close})=>{
    // cleanup.init(close);
    // list();
    //const osc = new OSCSound();

    const onUpdate = (plantclusters)=>{


    io.emit("/updateSensors", plantclusters);
    console.log(plantclusters);

    }
    clusterController = new (require('./src/ClusterController').default)(settings.sensorTypes, settings.plantClusters, onUpdate);


/**
 *
 *
 *
 * OSC Setup
 */





    /**
     * SOOCKET SETUP
     */
    io.on('connection', (socket) => {
        console.log('a user connected');
        clusterController.connectESP(socket);
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });

        // kick it
        socket.emit("/sensortypes", clusterController.sensorTypes);
        socket.emit("/gamesettings", {...settings.game});
        socket.emit("/players", players);

        const updatePhase = (np)=>{
            phase = np;
            io.emit("/phase", np);
        }

        socket.on("/startgame", (player)=>{
            players[player] = true;
            console.log("starting new game");


            // HUE OFF, lights change, soundscape gamemode on

            io.emit("/players", players);

            if (phase == PHASES.END){
                
                updatePhase(PHASES.LOAD);

                scoreHistory.push(state.score);
                state.score = {};
                state.red = 0;
                state.green = 0;
                state.blue = 0;
                state.mirrors = [];
                state.plants = [];

                for (let index = 0; index < settings.game.mirrorsPerPlayer; index++) {
                    for (let c = 0; c < 3; c++) {
                        state.mirrors.push({
                            player: ["red", "green", "blue"][c],
                            x: Math.random(),
                            y: Math.random(),
                            ID: nanoid()
                        })   
                    }
                }

                for (let index = 0; index < settings.game.plantsAmount; index++) {
                    state.plants.push({
                        x: Math.random(),
                        y: Math.random(),
                        red: false,
                        green: false,
                        blue: false,
                        ID: nanoid()
                    })
                }

                setTimeout(()=>{
                    updatePhase(PHASES.RUNNING);
                }, settings.game.beginningTime * 1000);

                
                setTimeout(()=>{
                    for (const key in players) {
                        players[key] = false;
                    }
                    updatePhase(PHASES.END);
                    io.emit("/players", players);
                }, (settings.game.duration + settings.game.beginningTime) * 1000)
            }
        })

        socket.on("/updatePlant", (np)=>{
            state.plants.forEach((p, i, arr)=>{
                if (p.ID == np.ID){
                    arr[i] = np;
                }
            })
        })

        socket.on("/updateMirror", (nm)=>{
            state.mirrors.forEach((m, i, arr)=>{
                if (m.ID == nm.ID){
                    arr[i] = nm;
                }
            })
        })

        socket.on("/updateLight", (color, rotation)=>{
            state[color] = rotation;
        })

        socket.on("/givePlayers", ()=>{
            socket.emit("players", players);
        });

        socket.on("/giveGameUpdate", ()=>{
            socket.emit("/gameUpdate", state);
        })

        socket.on("/score", ({player, score})=>{
            state.score[player] = score;
        })

        
      });

    /**
     * SERVER SETUP
     */
    app
    .use(express.static(path.join(__dirname, 'public/build/')))
    .get('/push', (req, res)=>{
        const err = [];
        const values = {};
        settings.requiredFields.forEach((fieldname)=>{
            if (! req.query[fieldname]){
                err.push(`Field ${fieldname} is required`);
            } else {
                values[fieldname] = req.query[fieldname];
            }
        })

        values.createdAt = new Date();

        if (err.length == 0){
            add(values)
            res.send(`New data has been added added: ${JSON.stringify(values)} `)
        } else {
            res.send(err);
        }
    })
    .get('/data', (req, res)=>{
        getData(req.query)
        .then((result)=>{
            res.send( result);
        })
    })
    .get('/gameStat', (req, res)=>{
        res.send({players, phase});
    })
    .get('*', (req, res) => res.sendFile(path.join(__dirname+'/public/frontx/build/index.html')))

    server
    .listen(process.env.PORT || settings.port, () => {
        logo();
    })
// }).catch(console.error)

