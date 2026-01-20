const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    address: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
});

const UserSchema = mongoose.model('user', userSchema);
module.exports = UserSchema;