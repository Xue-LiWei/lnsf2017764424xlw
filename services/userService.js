/*
    author:xueliwei
    Data:2020-06-19
    content:user operator
 */
const userDao = require('../dao/userDao');
const md5 = require('../utils/crypto/md5');

//注册：查询用户的存在性，否则增加
async function addUser(user){
    var ret = await userDao.findByName(user.name);
    if(ret.success){
        return {success:false,msg:'用户名已存在！'};
    }else{
        user.password = md5.toMd5(user.password);
        user.cpassword = md5.toMd5(user.cpassword);
        var data = await userDao.addUser(user);
        //在dao层已经做数据处理，直接返回
        return data;
    }
}

//登录：查出用户，然后进行密码比对
async function login(user){
    var ret = await userDao.findByName(user.name);
    if(ret.success){
        var password = md5.toMd5(user.password);
        if(password==ret.user.password){
            return ret;
        }else{
            return {success:false,msg:'用户密码不正确'};
        }
    }else{
        return {success:false,msg:'用户名不存在'};
    }
}

async function loginCookie(user){
    var ret = await userDao.findByName(user.name);
    //console.log(ret);
    if(ret.success){
        if(user.password==ret.user.password){
            return {success:true,user:ret};
        }else{
            return {success:false,msg:'用户密码不正确'};
        }
    }else{
        return {success:false,msg:'用户名不存在'};
    }
}

exports.addUser = addUser;
exports.login = login;
exports.loginCookie=loginCookie;