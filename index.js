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
let clusterController = null;

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

// database.connect()
// .then(({client, list, add, getData, close})=>{
    // cleanup.init(close);
    // list();

    const onUpdate = (plantclusters)=>{
        //io.emit("/updateSensors", plantclusters);
    }
    clusterController = new (require('./src/ClusterController').default)(settings.sensorTypes, settings.plantClusters, onUpdate);

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
            console.log("sendywendy")
        }

        socket.on("/startgame", (player)=>{
            players[player] = true;
            console.log("starting new game");
            io.emit("/players", players);

            if (phase == PHASES.END){
                
                updatePhase(PHASES.LOAD);

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

        socket.on("/givePlayers", ()=>{
            socket.emit("players", players);
        });

        
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

