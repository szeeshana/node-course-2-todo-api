const { MongoClient, ObjectId } = require('mongodb'); // Using Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to Mongo Server : ${err}`);
    }
    console.log('Connected To MongoDB');

    /* https://docs.mongodb.com/manual/reference/operator/update/ */
    /* http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html#findOneAndUpdate */
    //  db.collection('Todos').findOneAndUpdate(
    //      {  
    //          _id: new ObjectId('5b0b11840d636c4e772c3494')
    //     }, {
    //         $set: {
    //             text: 'Yes boyses'
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((res)=>{
    //         console.log(res);
    //     });
     db.collection('Users').findOneAndUpdate(
         {  
             _id: new ObjectId('5b09ca7ce71bc92f2800e64c')
        }, {
            $set: {
                name: 'Zeeshan Altaf Syed'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((res)=>{
            console.log(res);
        });
    
    // db.close();
});