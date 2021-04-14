const MongoClient = require('mongodb').MongoClient;

exports.default = (settings)=>{
    const uri = `mongodb://${settings.mongoUser}:${settings.mongoPass}@${settings.mongoIP}:${settings.mongoPORT}`;
    // const uri = "mongodb://subtiv:Vklcw0APQZBZ1r0O@128.199.61.147:27017"

    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    async function list() {
     
        async function listDatabases(client) {
            databasesList = await client.db().admin().listDatabases();
            console.log("Databases:");
            databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        };
    
        try {
            await listDatabases(client);
        } catch (e) {
            console.error(e);
        } 
    }

    function add(data){
        client.db("schedulers").collection('reservation').findOne({_id : data._id}, (err, result)=>{
            if (result){
                const myquery = { _id: data._id };
                const newvalues = { $set: data };
                client.db("schedulers").collection('reservation').updateOne(myquery, newvalues);
            } else {
                console.log('fresh');
                client.db("schedulers").collection('reservation').insertOne(data);
            }
        })
    }

    function getData(selector){
        return new Promise((resolve, reject)=>{
            var start = new Date();
            start.setHours(0,0,0,0);

            var end = new Date();
            end.setHours(23,59,59,999);

            const getData = (finder)=>{
                client.db("schedulers").collection('reservation').find(finder).toArray((err, data)=>{
                    resolve(data);
                });
            }

            switch (selector) {
                case "all":
                    getData({});
                    break;
                case "today":
                    getData({start: {$gte: start, $lt: end}})
                    break;
                case "todayAndLater":
                    getData({start: {$gte: start}})
                    break;
                default:
                    resolve([])
                    break;
            }
        })
    }

    const connect = ()=>{
        return new Promise((resolve, reject)=>{
            client.connect().then(()=>{
                resolve({
                    client,
                    list,
                    add,
                    getData,
                    close: ()=>{
                        console.log("closing database")
                        client.close()
                    }
                })
            })
        })
    }
    return { 
        connect
    }
}