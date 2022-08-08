let mongoose = require('mongoose')

userSchema = new mongoose.Schema({
    userName:   {type:String},
    email:      {type:String, required: [true, 'this field cannot be empty']},
    password:   {type:String, required: [true, 'this field cannot be empty']},
    comments:   [{type: mongoose.Schema.Types.ObjectId, ref : 'comment'}],
    group:      {type: Number, default: 1},
    active:     {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now()},
    browser:    {type: String},
    ipAddress:  {type: String}
})

let User = mongoose.model('user', userSchema)

module.exports = User


