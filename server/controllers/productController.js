const Product = require("../models/Product");

const createNewProduct = async (req, res) => {
    const {title, image} = req.body
    // Confirm data
    if (!title ) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // Create and store the new product 
    const product = await Product.create({title, image})

    if (product) { // Created 
        return res.status(201).json({ message: 'New product created' })
    } else {
        return res.status(400).json({ message: 'Invalid product data received' })
    }

}
const getAllProducts = async (req, res) => {
    // Get all products from MongoDB
    const products = await Product.find().lean()

    // If no products 
    if (!products?.length) {
        return res.status(400).json({ message: 'No products found' })
    }
    res.json(products)
}

const getProductById = async (req, res) => {
    const {id} = req.params
    // Get single product from MongoDB
    const product = await Product.findById(id).lean()

    // If no products 
    if (!product) {
        return res.status(400).json({ message: 'No product found' })
    }
    res.json(product)
}


const updateProduct = async (req, res) => {
    const {_id, title, image} = req.body

    // Confirm data
    if (!_id || !title ) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // Confirm note exists to update
    const product = await Product.findById(_id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    product.title = title
    product.image = image
   
    const updatedProduct = await product.save()

    res.json(`'${updatedProduct.name}' updated`)
}


const deleteProduct = async (req, res) => {
    const { id } = req.body

    // Confirm product exists to delete 
    const product = await Product.findById(id).exec()

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    const result = await product.deleteOne()

    const reply = `Product '${result.name}' with ID ${result._id} deleted`

    res.json(reply)
}

module.exports = {
    getAllProducts,
    createNewProduct,
    getProductById,
    updateProduct,
    deleteProduct
}