const { isValidObjectId } = require('mongoose');
const {shipingAdrressValidation} = require('./submitOrderValidiation');
const {productModel} = require('../model/productModel');




const orderValdiation = async(req, res, next) => {
    try {
        const {orderItems,shipmentAddress,paymentMethod } = JSON.parse(JSON.stringify(req.body))
        await shipingAdrressValidation.validate(shipmentAddress)
        if(!["cash","onlinePayment"].includes(paymentMethod)){
            throw {message:"خطا در شیوه پرداخت"}
        }
         let totalprice = 0
         for (const item of  orderItems) {

            if(!isValidObjectId(item.product)) throw{message:"محصول  یافت نشد"}
            const prod = await productModel.findOne({_id :item.product})
            if(!prod) throw {message:"محصولی یافت نشد"}
            item.product = prod
            if(item.qty >prod.countAvalibale) throw {message:"موجودی کالا کافی نیست"}
            totalprice += item.qty *prod.price
            console.log(orderItems)
        }

    } catch (error) {
        next({status:400,message:error.errors || error.message})

    }
}


module.exports = {orderValdiation}