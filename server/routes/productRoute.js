const express = require("express")
const router = express.Router()

const productController = require("../controllers/productController")

router.get("/", productController.getAllProducts)
router.get("/:id",  productController.getProductById)
router.post("/",  productController.createNewProduct)
router.delete("/", productController.deleteProduct)
router.put("/", productController.updateProduct)



module.exports = router