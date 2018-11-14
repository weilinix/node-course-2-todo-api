//const MongoClient = require('mongodb').MongoClient;

// 使用Destructuring
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // 在Todos中插入一条记录（Document）
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo: ', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // 在Users中插入一条记录（Document）
    db.collection('Users').insertOne({
        name: 'Michael',
        age: 37,
        location: '武汉'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user: ', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });

    client.close();
});