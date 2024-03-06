const express = require("express")
const router = express.Router()

const basketController = require("../controllers/basketController")

router.get("/", basketController.getAllBaskets)
router.get("/:id",  basketController.getBasketById)
router.post("/",  basketController.createNewBasket)
router.delete("/", basketController.deleteBasket)
router.put("/", basketController.updateBasket)



module.exports = router