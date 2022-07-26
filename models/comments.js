let mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author  : String,
    content : String
})

module.exports = mongoose.model("comment", commentSchema);