const SimplexNoise = require('simplex-noise');

const MODE = Object.freeze({
    "SIMULATION": 1,
    "HYBRID": 2,
    "FORCED": 3
})

const mode = MODE.FORCED;//SIMULATION;
const updateSpeed = 3000;
const maxAmountOfFailed = 10;

class Sensor {
    constructor(_type, _name) {
        this.type = _type;
        this.name = _name;
        this.value = 0;
        this.seed = Math.random() * 123;
        this.simplex = new SimplexNoise(Math.random);
        this.counter = 0;
        this.updated = true;
        this.failedRequest = 0;
    }

    simulateValue() {
        this.setValue(Math.abs(this.simplex.noise2D(this.seed, this.counter)), true)
    }

    setValue(_newvalue, untouchFailed) {
        this.counter++;
        this.value = _newvalue;
        this.updated = true;
        if (!untouchFailed) {
            this.failedRequest = 0;
        }
    }

    wasUpdated() {
        switch (mode) {
            case MODE.SIMULATION:
                this.simulateValue();
                break;
            case MODE.HYBRID:
                if (this.failedRequest > maxAmountOfFailed) {
                    this.simulateValue();
                }
                break;
            case MODE.FORCED:
                break;
        }

        let rval = this.updated;
        if (!rval) {
            this.failedRequest++;
        } else {
            this.failedRequest = 0;
        }
        this.updated = false;
        return rval;
    }
}

class PlantCluster {
    constructor(_name, _sensors) {
        this.name = _name;
        this.sensors = [];
        this.connected = false;
        _sensors.forEach(s => {
            this.sensors.push(new Sensor(s.type, s.name))
        })
    }

    wasUpdated(){
        let rv = false;
        let counter = 0;
        this.sensors.forEach(s=>{
            const uval = s.wasUpdated();
            rv = rv || uval;
        })
        return rv;
    }
}


class ClusterController {
    constructor(_sensorTypes, _plantClusters, _onUpdate) {
        this.plantclusters = [];
        this.sensorTypes = [];
        this.onUpdate = _onUpdate;
        this.socket = null;

        _sensorTypes.forEach(st => {
            this.sensorTypes.push(st);
        })

        _plantClusters.forEach(pc => {
            this.plantclusters.push(new PlantCluster(pc.name, pc.sensors))
        });

        const parent = this;

        setInterval(() => {
            parent.update();
        }, updateSpeed);
        parent.update();
    }


    connectESP(socket){
        console.log(socket.id, 'new client connected, getting client information.');
        socket.emit("event", "get_name");
        socket.on('identifier', (data) => {
            if (data !== "web_client") {
                console.log(data);

                let espid = data.espId;
                for (var i = 0; i< this.plantclusters.length; i++ ){
                    if (this.plantclusters[i].name === espid){
                        this.plantclusters[i].connected = true;
                        this.plantclusters[i].socket = socket;
                        this.plantclusters[i].socket.on('sensor_data', (data) => {

                            for (var i = 0; i< this.plantclusters.length; i++ ){
                                if (this.plantclusters[i].name === espid){
                                    this.plantclusters[i].sensors[0].setValue(data);
                                    console.log(data);
                                    console.log(this.plantclusters[i].sensors[0]);}}

                        });

                    }
                }
            }
        });
    }

    update(){
        let newvalues = false;

        this.plantclusters.forEach(pc=>{
            pc.sensors.forEach(sensor=>{
                const nval = pc.wasUpdated();
                newvalues = newvalues || nval;
            })

        })
/*
        if (newvalues){
            let pc = JSON.stringify(this.plantclusters)
            pc = JSON.parse(pc);

            pc.forEach(plant=>{
                plant.sensors.forEach((sensor, index)=>{
                    plant.sensors[index] = {
                        name: sensor.name,
                        value: sensor.value,
                        type: sensor.type
                    }
                    
                })
            })

            this.onUpdate(this.plantclusters);

        }
*/
    }
};



exports.default = ClusterController;