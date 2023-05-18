
const productController = require('../controller/productControoler');

const express = require('express');
const router = express.Router()


//getOneProducts,editProduct,searchProduct,deletProduct

router.post("/add-product", productController.addproduct)
router.get("/", productController.getProducts)
router.get("/:id", productController.getOneProduct)
router.delete("/delete/:id", productController.deleteProduct)
router.get("/search", productController.searchProduct)
router.put("/edit-product/:id", productController.editProduct)


module.exports = router