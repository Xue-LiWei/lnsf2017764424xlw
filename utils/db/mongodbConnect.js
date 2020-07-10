const mongoose = require('mongoose');

//数据库开启连接
function dbConnect(){
    mongoose.connect('mongodb://192.168.1.110:27017/shoponline');
    mongoose.connection.once('open',function(err){
        if(err){
            console.log('MongoDb is not opening......');
        }else{
            console.log('MongoDb is opening......');
        }
    });
}

exports.dbConnect=dbConnect;