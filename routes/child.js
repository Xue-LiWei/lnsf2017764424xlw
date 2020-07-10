const express = require('express');
const wearService = require('../services/wearService');

var router = express.Router();

router.use('/cloths/details',async (req,res,next)=>{
    //找出所有的kid wear
    var GET = req.query;
    var kind = GET.kind;
    if(kind==undefined||kind==null||kind=={}||kind==[]){
        kind = 'kid';
    }
    var data = await wearService.findByKind(kind);
    res.send(data);
});

exports.router=router;