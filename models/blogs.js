let mongoose = require('mongoose')

// creating schema for and making a model for the blogs created in the database
let blogSchema = new mongoose.Schema({
    title: String,
    summary: String,
    body : String,
    image: Object,
    postCategory:String,
    likes: Number,
    city: String,
    clicks: {type: Number, default: 0},
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref : 'comment'
        }
    ],
    created_by: String,
    created_at: {type: Date, default: Date.now}
})

 module.exports = mongoose.model('blog', blogSchema)
