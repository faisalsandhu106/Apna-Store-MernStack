const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: false,
        require: true
    },
    address: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true
    },
});

const contactSchema = mongoose.model("Contact", ContactSchema);
module.exports = contactSchema;