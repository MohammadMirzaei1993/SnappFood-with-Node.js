const express = require('express');
const userRoute = require('./userRout');
const router = express.Router()
const { notFound, userError } = require('../modules/errorHnadler');

const productRouter = require('./product');
const orderRouter = require('./order');

router.get('/', (req, res) => {
    res.send("server is running")
})
//user route--------------------------------------------
router.use("/user", userRoute)
//404--------------------------------------------------

router.use("/product", productRouter)

router.use("/order", orderRouter)
router.use(userError)
router.use(notFound)



// router.use("/order",orderRouter)



module.exports = router

