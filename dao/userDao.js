/*
    author:xueliwei
    Date:2020-06-19
*/
const user = require('../models/user');

var userModel = user.userModel;

//1.add
async function addUser(user){
    try {
        var user = await userModel.create(user);
        if(user=={}||user==undefined){
            return {success:false,msg:'用户保存失败'};
        }else{
            return {success:true,user:user};
        }
    }catch(e){
        console.log('add user is error--error reason:'+e);
        return {success:false,msg:e};
    }
}

//2.findByName
async function findByName(name){
    try{
        var user = await userModel.findOne({name:name});
        if(user==undefined||user=={}){
            return {success:false,msg:'not found'};
        }else{
            return {success:true,user:user};
        }
    }catch(e){
        return {success:false,msg:e};
    }
}

exports.addUser = addUser;
exports.findByName = findByName;