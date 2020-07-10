const slideImgeDao=require('../dao/slideImgDao');

async function finAllSlideImgs(){
    var data = await slideImgeDao.findAllSlideImgs();
    return data;
}

exports.findAllSlideImgs=finAllSlideImgs;