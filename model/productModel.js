const {Schema,model} = require('mongoose');

const productSchema = new Schema(
    {
        name:{type :String , require :true},
        description:{type :String , require :true},
        category:{type :String , require :true},
        store:{type :String , require :true},
        rating:{type :Number , require :true},
        // image:{type :String , require :true},
        countAvalibale:{type :Number , require :true},
        price:{type :Number , require :true},
        comment:{type :String , require :true}
    },{timestamps :true}
)

const productModel = model("product",productSchema)
module.exports = {productModel}