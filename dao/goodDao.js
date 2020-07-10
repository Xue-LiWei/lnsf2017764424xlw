const good = require('../models/good');

var goodModel = good.model;
//根据name查询购物车物品
async function findAllGoods(name){
    var data = await goodModel.find({name:name});
    return data;
}

//加入购物车


exports.findAllGoods = findAllGoods;