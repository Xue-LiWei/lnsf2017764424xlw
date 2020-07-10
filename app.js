const express=require('express');
const expressStatic=require('express-static');
const  dbConnect=require('./utils/db/mongodbConnect');
const slideRouter=require('./routes/slide');
const userRouter=require('./routes/user');
const viewRouter=require('./routes/views');
const kidRouter=require('./routes/child');
const menRouter=require('./routes/men');
const womenRouter=require('./routes/women');
const mobileRouter=require('./routes/mobile');
const buycarRouter=require('./routes/buyCar');
const bodyParer=require('body-parser');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');

var app=express();

app.listen(8081,function(err){
    if(err){
        console.log('服务未启动......');
    }else {
        console.log('服务已启动......');
    }
});

//开启数据库连接
dbConnect.dbConnect();
//启用body-parser
app.use(bodyParer.urlencoded({extend:true}));
//启用cookie
var keys=[];
for(var i=0;i<10000;i++){
    var str = 'abcde'+Math.random(1000000);
    keys.push(str);
}
app.use(cookieParser());
app.use(cookieSession({
    name:'storeOnline',
    keys:keys,
    maxAge:20*60*1000
}));
//使用路由
app.use('/slide',slideRouter.router);
app.use('/user',userRouter.router);
app.use('/views',viewRouter.router);
app.use('/child',kidRouter.router);
app.use('/men',menRouter.router);
app.use('/women',womenRouter.router);
app.use('/mobile',mobileRouter.router);
app.use('/BuyCar',buycarRouter.router);

app.use('/',function(req,res,next){
    var options = {
        root:__dirname + '/www/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var url = req.url;
    if(url.indexOf('/')==0 && url.length>1){
        next();
    }else{
        res.sendFile('index.html',options,function(err){
           if(err){
               console.log('index.html is error');
           }
        });
    }
});

app.use(expressStatic('./www'));