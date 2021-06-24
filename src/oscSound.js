const { Client }  = require('node-osc');











class OscSound {
    constructor() {

        this.address = '192.168.0.111'
        this.port = 12345
        this.client = new Client(this.address, this.port);

    }

    send(address, message) {
        this.client.send(address, message, () => {
            //client.close();
        });
    }

    close() {
        this.client.close();
    }


    sendSim() {
        let sendl = ["/winogradsky/0", "/winogradsky/1", "/plant/0", "/plant/1", "/plant/2", "/humidity/0"];
        // /gamepress/0!!!
        //let r = Math.random();

        for (var i = 0; i < sendl.length; i++) {
            let r = Math.random();
            this.send(sendl[i], r);
        }

    }


}

exports.default = OscSound;






