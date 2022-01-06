const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const ProductSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    pproductName: {
        type: String,
        required: true,
        trim: true,
        maxlength: 60
    },
    productDesc: {
        type: String,
        trim:true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productCategory : {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    producrQty : {
        type:Number,
        required: true
    }
}, {timestamps : true}
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product