let mongoose = require('mongoose')

adminSchema = new mongoose.Schema({
    userName:   {type:String},
    email:      {type:String, required: [true, 'this field cannot be empty']},
    password:   {type:String, required: [true, 'this field cannot be empty']},
    comments:   [{type: mongoose.Schema.Types.ObjectId, ref : 'comment'}],
    blogPosts:  [{type: mongoose.Schema.Types.ObjectId, ref : 'blog'}],
    group:      {type: Number, default: 1},
    active:     {type: Boolean, default: true},
    created_at: {type: Date, default: Date.now()},
    browser:    {type: String},
    ipAddress:  {type: String}
})

let Admin = mongoose.model('admin', adminSchema)

module.exports = Admin


