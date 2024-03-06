const Basket = require("../models/Basket");

const createNewBasket = async (req, res) => {
    const { product, quantity} = req.body
    const sessionId = req.sessionID
    //console.log(req.sessionID)
    // Confirm data
    if ( !product ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    //exists
    const existsBasketItem = await Basket.findOne({sessionId, product}).exec()
    if(existsBasketItem){
        if(quantity){
            existsBasketItem.quantity = quantity
        }else{
            existsBasketItem.quantity =  existsBasketItem.quantity +1
        }
        const newBasket = await existsBasketItem.save()
        return res.status(201).json({ message: 'Updated quantity' })
    }
    // Create and store the new basket 
    const basket = await Basket.create({sessionId, product, quantity})

    if (basket) { // Created 
        return res.status(201).json({ message: 'New basket created' })
    } else {
        return res.status(400).json({ message: 'Invalid basket data received' })
    }

}
const getAllBaskets = async (req, res) => {
    // Get all baskets from MongoDB
    const sessionId = req.sessionID
    const baskets = await Basket.find({sessionId:sessionId}).populate("product").lean()
    res.json(baskets)
}

const getBasketById = async (req, res) => {
    const {id} = req.params
    // Get single basket from MongoDB
    const basket = await Basket.findById(id).lean()

    // If no baskets 
    if (!basket) {
        return res.status(400).json({ message: 'No basket found' })
    }
    res.json(basket)
}


const updateBasket = async (req, res) => {
    const {_id,   quantity} = req.body

    // Confirm data
    if (!_id ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm note exists to update
    const basket = await Basket.findById(_id).exec()

    if (!basket) {
        return res.status(400).json({ message: 'Basket not found' })
    }

    basket.quantity = quantity

    const updatedBasket = await basket.save()

    res.json(`'${updatedBasket.name}' updated`)
}


const deleteBasket = async (req, res) => {
    const { id } = req.body
    const sessionId = req.sessionID
    // Confirm basket exists to delete 
    const basket = await Basket.findById(id).exec()

    if (!basket || basket.sessionId !== sessionId) {
        return res.status(400).json({ message: 'Basket not found' })
    }

    const result = await basket.deleteOne()

    const reply = `Basket '${result.name}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllBaskets,
    createNewBasket,
    getBasketById,
    updateBasket,
    deleteBasket
}