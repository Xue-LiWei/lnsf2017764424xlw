const express=require('express');
const goodService=require('../services/goodService');

var router=express.Router();

router.use('/showGoods',async function(req,res,next){
    var name = await req.session['user'].name;
    var data = await goodService.findAllGoods(name);
    res.send(data);
});

exports.router=router;