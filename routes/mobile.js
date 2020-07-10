const express = require('express');
const wearService = require('../services/wearService');

var router = express.Router();

router.use('/shop/data',async (req,res,next)=>{
    //找出所有的mobile
    var GET = req.query;
var kind = GET.kind;
if(kind==undefined||kind==null||kind=={}||kind==[]){
    kind = 'mobile';
}
var data = await wearService.findByKind(kind);
res.send(data);
});

exports.router=router;