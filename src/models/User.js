const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const tables = require('./index').collectionNames;
let letter = /[a-zA-Z]/;
let number = /[0-9]/;

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                let valid = number.test(v) && letter.test(v);
                return v.length >= 8 && (number.test(v) && letter.test(v))
            },
            message: props => `Password must have 8 letters and should be alphanumeric`
        },
    },
    bio: {
        type: String,
        default: null
    }
});

module.exports = mongoose.model(tables.User, UserSchema, tables.User);

module.exports.comparePassword = function(candidatePassword, hash) {
    return bcrypt.compare(candidatePassword, hash)
}

module.exports.hashPassword = function(password) {
    return bcrypt.hash(password, 10);
}