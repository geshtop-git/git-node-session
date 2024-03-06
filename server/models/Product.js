const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:String,
   
},{
    timestamps:true
})

module.exports = mongoose.model('Product', productSchema)
