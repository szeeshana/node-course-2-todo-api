const { MongoClient, ObjectID } = require('mongodb'); // Using Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to Mongo Server : ${err}`);
    }
    console.log('Connected To MongoDB');
    // db.collection('Todos').find({_id: new ObjectID('5b09c953f5f74239645f90da')}).toArray().then((resDocs) => {
    //     console.log('TODOS');
    //     console.log(JSON.stringify(resDocs, undefined, 2));
    //     console.log('TODOS');
    // }, (err) => {
    //     console.log(err);
    // });
    db.collection('Todos').find().count().then((count) => {
        console.log(`TODOS count : ${count}`);
    }, (err) => {
        console.log(err);
    });
    // db.close();
});