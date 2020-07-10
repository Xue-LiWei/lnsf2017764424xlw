const wearDao = require('../dao/wearDao');

async function findByKind(kind){
    try{
        //查找衣服
        var data = await wearDao.findByKind(kind);
        return {success:true,wears:data};
    }catch (e){
        return {success:false,msg:'database is error!'};
    }
}

exports.findByKind = findByKind;
