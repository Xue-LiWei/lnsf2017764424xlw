const express=require('express');
const slideImgService=require('../services/slideImgService');

var router=express.Router();

router.use('/img',async function(req,res,next){
    var data = await slideImgService.findAllSlideImgs();
    res.send(data);
});

exports.router=router;