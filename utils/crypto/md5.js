const crypto = require('crypto');

//生成md5的值
function toMd5(content){
    var result = crypto.createHash('md5').update(content).digest("hex");
    return result;
}

exports.toMd5=toMd5;