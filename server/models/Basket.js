const mongoose = require('mongoose')
const basketSchema = new mongoose.Schema({
    sessionId:{
        type: String,
        required: true
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity:{
        type: Number,
        default: 1
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Basket', basketSchema)
