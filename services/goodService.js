const goodDao = require('../dao/goodDao');

async function findAllGoods(name){
    try{
        //查找购物车
        var data = await goodDao.findAllGoods(name);
        return {success:true,goods:data};
    }catch (e){
        return {success:false,msg:'database is error!'};
    }
}

exports.findAllGoods = findAllGoods;