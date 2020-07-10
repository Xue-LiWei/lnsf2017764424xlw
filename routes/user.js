const express = require('express');
const userService = require('../services/userService');

var router = express.Router();

router.post('/register',async (req,res,next)=>{
    var user = req.body;
    //console.log(user);
    if(user==undefined||user=={}||user==[]){
        res.send({success:false,msg:'用户名与密码不能为空'});
    }else{
        var data = await userService.addUser(user);
        if(data.success){
            res.send({success:true,user:data.user});
        }else{
           res.send(data);
        }
    }
});

router.post('/login',async (req,res,next)=>{
    var user = req.body;
    //console.log(user);
    if(user==undefined||user=={}||user==[]){
        res.send({success:false,msg:'用户名与密码不能为空'})
    }else{
        var data = await userService.login(user);
        //登录成功要进行session与cookie
        if(data.success){
            //登录成功，对cookie操作，也对session操作
            if(user.remember=='true'){
                res.cookie("user",data.user,{maxAge:7*24*60*60*1000});
                //console.log(data.user);
            }
            //登录之后立即保存session
            req.session['user'] = data.user;
        }
        res.send(data);
    }
});

router.use('/logout',(req,res)=>{
    var user = req.session['user'];
    if(user==null||user=={}||user==undefined){
        res.send('Havn\'t login in!');
    }else{
        req.session['user']='';
        //req.session.destroy();
        res.redirect('../../index.html');
        //res.send('log out seccuss');
    }
})

exports.router = router;