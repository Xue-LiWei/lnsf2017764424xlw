const mongoose = require('mongoose');

var schema = mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    mem:String,
    GoodsCount:Number,
    GoodsMoney:Number,
    kind:{
        type:String,
        default:'kid'
    },
    name:String,
});

var model = mongoose.model('good',schema);

exports.model=model;