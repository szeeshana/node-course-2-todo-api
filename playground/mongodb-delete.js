const { MongoClient, ObjectID } = require('mongodb'); // Using Object Destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to Mongo Server : ${err}`);
    }
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat luch'}).then((res)=>{
    //   console.log(res)  
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'do shit'}).then((res)=>{
    //     console.log(res)  
    // });
    
    //findOne and Del
    db.collection('Todos').findOneAndDelete({completed: true}).then((res)=>{
        console.log(res)  
    });
    
    // db.close();
});