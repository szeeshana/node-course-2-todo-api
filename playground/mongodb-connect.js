// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); // Using Object Destructuring

//////////////////Own Ids//////////////////////////
// var obj = new ObjectID();
// console.log(obj);
////////////////////////////////////////////

////////////////////////////////////////////
// var user = {name: 'zeeshana', age: 24};
// /* Object destructuring */
// var {name} = user;
// console.log(name);
////////////////////////////////////////////


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to Mongo Server : ${err}`);
    }
    console.log('Connected To MongoDB');
    // db.collection('Todos').insertOne({
    //     text: 'Dahi Lay Aaaaao',
    //     completed: false
    // }, (errAdd, result) => {
    //     if(errAdd){
    //         return console.log(`Unable to add Todos ${errAdd}`)
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Altaf',
    //     age: 24,
    //     location: 'Lahore, Pakistan'
    // }, (errAdd, result) => {
    //     if(errAdd){
    //         return console.log(`Unable to add User ${errAdd}`)
    //     }
    //     // console.log(JSON.stringify(result.ops,undefined,2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});

/* 
_id in Mongo
12 byte value
First 4 are time stamp
Next 3 are machine identifiers
Next 2 are process Id
Next 3 are random value
*/