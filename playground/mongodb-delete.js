// 使用Destructuring
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // delteMany()删除多条记录
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delteOne()删除一条记录
    // db.collection('Todos').deleteOne({text:'Eat me'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete()找到记录并删除
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Michael'});
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5bebdacca9b82808980994a6")
    }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });
});