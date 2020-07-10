const wear = require('../models/wear');

var wearModel = wear.model;
//查询一个类型的衣服
async function findByKind(kind){
    var data = await wearModel.find({kind:kind});
    return data;
}

exports.findByKind = findByKind;