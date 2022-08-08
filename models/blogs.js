let mongoose = require('mongoose')

// creating schema for and making a model for the blogs created in the database
let blogSchema = new mongoose.Schema({

    title:          {type:String},
    summary:        {type:String},
    body :          {type:String},
    image:          [{type:Object}],
    postCategory:   {type:String},
    likes:          {type:Number},
    city:           {type:String},
    clicks:         {type: Number, default: 0},
    comments:       [{type: mongoose.Schema.Types.ObjectId, ref : 'comment'}],
    createdBy:      {type: mongoose.Schema.Types.ObjectId, ref: 'admin'},
    created_at:     {type: Date, default: Date.now()}

})

let Blog = mongoose.model('blog', blogSchema) 

 module.exports = Blog
