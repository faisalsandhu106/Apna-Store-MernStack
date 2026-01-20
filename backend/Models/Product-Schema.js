const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        require: false,
    },
    longDescription: {
        type: String,
        require: false,
    },
    shortDescription: {
        type: String,
        require: false,
    },
    category: {
        type: String,
        require: false,
    },
    price: {
        type: Number,
        require: false,
    },
    discountPercentage: {
        type: Number,
        require: false,
    },
    rating: {
        type: Number,
        require: false,
    },
    stock: {
        type: Number,
        require: false,
    },
    tags: [
        { type: String, require: false }
    ],
    brand: {
        type: String,
        require: false,
    },
    sku: {
        type: String,
        require: false,
    },
    warrantyInformation: {
        type: String,
        require: false,
    },
    shippingInformation: {
        type: String,
        require: false,
    },
    availabilityStatus: {
        type: String,
        require: false,
    },
    returnPolicy: {
        type: String,
        require: false,
    },
    deliveryFree: {
        type: String,
        require: false,
    },
    securePayment: {
        type: String,
        require: false,
    },
    minimumOrderQuantity: {
        type: Number,
        require: false,
    },
    images: [
        { type: String, require: false }
    ],
    feature: {
        type: Boolean,
        default: false,
        require: false,
    },
    status: {
        type: Boolean,
        default: false,
        require: false,
    },

})

const productSchema = mongoose.model('Product', ProductSchema);
module.exports = productSchema;
