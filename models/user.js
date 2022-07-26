let mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose')

userSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
    group: String,
    active: Boolean,
    created_at: {type: Date, default: Date.now},
    browser: String,
    ip_address: String
})


module.exports = mongoose.model('user', userSchema)


