const mongoose=require('mongoose');

//schema
var schema=mongoose.Schema({
    _id: Object,
    imgsrc: String
});

//model
var slideImgModel=mongoose.model('slide',schema);

exports.slideImgModel=slideImgModel;