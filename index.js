// /**
//  * GLOBALS
//  */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const config = require('./package.json');
const settings = require('./settings.json');
const logo = require('./src/logo').default(config, settings);
const database = require('./src/database').default(settings);
const cleanup = require('./src/cleanup').default();
const testData = require('./testData.json');
const { query } = require('express');

// create application/json parser
const jsonParser = bodyParser.json()

const setupGameWorld = ()=>{
    const world = [];
    for (let x = 0; x < settings.game.resolution; x++){
        world[x] = [];
        for (let y = 0; y < settings.game.resolution; y++){
            world[x][y] = Math.random()*255;
        }
    }
    return world;
}

const gameWorld = setupGameWorld();

database.connect()
.then(({client, list, add, getData, close})=>{
    cleanup.init(close);
    list();

    var latestdata = {};
    /**
     * SOOCKET SETUP
     */
    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });
    
        socket.on("/data", (query)=>{
            getData(query)
            .then((result)=>{
                socket.emit("/push", result);
            })
        })

        socket.on("/push", (data)=>{
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
            } else {
                //error
            }
        })

        socket.on("/gamesettings", ()=>{
            socket.emit("/gamesettings", {world:gameWorld, ...settings.game});
        })

        socket.on("/gameMove", (positions)=>{
            const [pos1, pos2] = positions;

            const val = gameWorld[pos1[0]][pos1[1]];
            gameWorld[pos1[0]][pos1[1]] = gameWorld[pos2[0]][pos2[1]];
            gameWorld[pos2[0]][pos2[1]] = val;

            io.emit("/gameUpdateWorld", gameWorld);
        })

      });
    
    
    /**
     * SERVER SETUP
     */
    app
    .use(express.static(path.join(__dirname, 'public/frontx/build/')))
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
    .get('*', (req, res) => res.sendFile(path.join(__dirname+'/public/frontx/build/index.html')))

    server
    .listen(process.env.PORT || settings.port, () => {
        logo();
    })
}).catch(console.error)

// const express = require('express');
// const path = require('path');
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);
// const port = process.env.PORT || 2000;

// app.use(express.static(path.join(__dirname, 'public/frontx/build/')))

// io.on('connection', (socket) => {
//   console.log("allo")
// });

// http.listen(port, () => {
//   console.log(`Socket.IO server running at http://localhost:${port}/`);
// });