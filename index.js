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
            console.log(query)

            getData(query)
            .then((result)=>{
                socket.emit("/push", result);
            })
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