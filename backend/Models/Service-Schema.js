// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const ServiceSchema = new Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     },
//     images: [
//         { type: String }
//     ],
//     feature: {
//         type: Boolean,
//         default: false,
//     },
//     description: [
//         { type: String, required: true, }
//     ],
//     rating: {
//         type: Number,
//         default: 4.5,
//     },
//     company: {
//         type: String,
//         enum: {
//             values: ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'Amazon'],
//             message: '{VALUE} is not Available',
//         },
//     },
//     createAt: {
//         type: Date,
//         default: Date.now(),
//     },
// })

// const serviceSchema = mongoose.model('Service', ServiceSchema);
// module.exports = serviceSchema;
