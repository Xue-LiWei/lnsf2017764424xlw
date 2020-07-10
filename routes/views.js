const express = require('express');
const userServer = require('../services/userService');

var router = express.Router();

router.use('/loginPage.html',async function(req,res,next){
    var user = req.cookies['user'];
    //console.log(user);
    if(user==undefined||user=={}){
        next();
    }else{
        var data = await userServer.loginCookie(user);
        //console.log(data);
        if(data.success){
            req.session['user'] = data.user;
            res.redirect('/views/pages/user1.html');
        }else{
            next();
        }
    }
});

//views路由上做的登录控制
//要进入pages下面的页面，必须是登录状态，否则进入/views/loginPage.html
router.use('/pases',(req,res,next)=>{
    var user = req.session['user'];
    if(user==null||user=={}||user==undefined){
        res.redirect('/views/loginPage.html');
    }else{
        next();
    }
})

exports.router=router;