/*
    用户
    author:xueliwei
    content:login user
*/
const mongoose = require('mongoose');

var schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user'
    }
});

var userModel = mongoose.model('user',schema);

exports.userModel=userModel;