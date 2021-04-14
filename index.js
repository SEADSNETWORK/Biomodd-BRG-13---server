/**
 * GLOBALS
 */
const express = require('express')
var bodyParser = require('body-parser')
const path = require('path');
const config = require('./package.json');
const settings = require('./settings.json');
const logo = require('./src/logo').default(config, settings);
const database = require('./src/database').default(settings);
const cleanup = require('./src/cleanup').default();
const testData = require('./testData.json');

// create application/json parser
const jsonParser = bodyParser.json()


database.connect()
.then(({client, list, add, getData, close})=>{
    cleanup.init(close);
    list();

    var latestdata = {};
    
    /**
     * SERVER SETUP
     */
    express()
    .use(express.static(path.join(__dirname, 'public/frontx/build/')))
    .get('/register', (req, res)=>{
        add();
        console.log('registering')
        console.log(req.query.key1)
        res.send(req.query.key1)
    })
    .get('/cols', (req, res)=>{
        res.send(getCols());
    })
    .get('/data', (req, res)=>{
        getData(req.query.selector)
        .then((result)=>{
            res.send( result);
        })
    })
    .get('/test', (req, res)=>{
        res.send(latestdata);
    })
    .post('/trigger', jsonParser, function (req, res) {
        let body = req.body;

        if (body && body.object && body.object.service){

            let name, firstName, studentNumber;

            body.object.fields.forEach(({field, value})=>{
                switch (field.slug) {
                    case "last-name":   
                        name = value;       
                        break;
                    case "first-name":   
                        firstName = value;       
                        break;
                    case "student-number":   
                        studentNumber = value;       
                        break;
                }
            })

            let values = {
                _id:            body.object.id,
                action:         body.action,
                organization:   body.object.organization.name,
                service:        body.object.service.name,
                location:       body.object.service.location,
                name, 
                firstName, 
                studentNumber, 
                email:          body.object.email,
                timezone:       body.object.timezone,
                start:          new Date(body.object.start),
                end:            new Date(body.object.end),
                created:        new Date(body.object.date_created)
            }
            add(values);
            latestdata = values;
        }        

        res.send('POST request to the homepage')
    })
    .get('*', (req, res) => res.sendFile(path.join(__dirname+'/public/frontx/build/index.html')))
    .listen(process.env.PORT || settings.port, () => {
        logo();
    })
}).catch(console.error)


