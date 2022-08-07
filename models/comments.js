let mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    userId:     {type: mongoose.Schema.Types.ObjectId, ref: "user", required: [true]},
    blogId:     {type: mongoose.Schema.Types.ObjectId, ref: "blog", required: [true]},
    comment:    {type: String, required: [true]},
    likes:      {type:Number, default: 0},
    createdAt:  {type: Date, default: Date.now()}
})

let Comment = mongoose.model("comment", commentSchema);

module.exports = Comment