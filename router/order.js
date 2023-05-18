const express = require('express');
const { chekTokn } = require('../validation/chekLoging');
const {orderValdiation} = require('../validation/orderValidiation');
const {getOneOrder,submitOrder,getOrders} = require('../controller/orderContrroller');
const router = express.Router()




router.post("/submit-order",chekTokn,orderValdiation,submitOrder)
router.get("/:id",chekTokn,getOneOrder)
router.get("/",chekTokn,getOrders)





module.exports = router