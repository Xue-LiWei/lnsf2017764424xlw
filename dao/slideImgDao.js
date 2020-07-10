const slideImg=require('../models/slideImg');

var slideImgModel=slideImg.slideImgModel;

async function findAllSlideImgs(){
    try{
        var data = await slideImgModel.find({});
        return data;
    }catch(e){
        console.log('findAllslideImgs error in database!');
    }
}

exports.findAllSlideImgs=findAllSlideImgs;