const mongoose = require('mongoose');
const tables = require('./index').collectionNames;



const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        hide: true
    },
    imageUrl: {
        type: String
    }
});

module.exports = mongoose.model(tables.User, UserSchema, tables.User);

module.exports.comparePassword = function(candidatePassword, hash) {
    return bcrypt.compare(candidatePassword, hash)
}

module.exports.hashPassword = function(password) {
    if (validatePassword(password)) {
        return bcrypt.hash(password, 10);
    }
    return Promise.reject('Password invalid')
}