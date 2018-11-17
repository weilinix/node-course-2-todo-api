const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
    console.log("We are connected!");

    // 定义Schema。在Mongoose中，一切都是来自Schema。
    var kittySchema = new mongoose.Schema({
        name: String
    });

    // model是我们创建document的类
    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({name: 'Silence'});
    console.log(silence.name);

    // 为document添加speak功能（函数）。
    // 注意methods在被用mongoose.model()编译进schema中之前，必须先被添加到schema中。
    kittySchema.methods.speak = () => {
        var greeting = this.name ? "Meow name is " + this.name : "I don't have a name";
        console.log(greeting);
    };
    //Kitten = mongoose.model('Kitten', kittySchema);

    // // 现在新创建的document就可以使用speak功能了
    var fluffy = new Kitten({name: 'fluffy'});
    try {
        console.log(fluffy);
        //fluffy.speak();
    } catch (err) {
        console.log(err);
    }

    // // 保存document fluffy到 MongoDB 数据库中
    // fluffy.save((err, fluffy) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     fluffy.speak();    
    // });

    // // 通过Kitten model查找所有的kitten document
    // Kitten.find((err, kittens) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(kittens);
    // });

    // // 查找特定名字的记录
    // Kitten.find({ name: /^fluff/ }, (err, result) => {
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log(result);
    // });

    // db.close();
});