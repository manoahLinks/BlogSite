let Blog = require('../models/blogs'),
    Comment = require('../models/comments'),
    User    = require('../models/user')

exports.createNewComment = async (req, res)=>{
    const body = req.body
    const newComment = new Comment(body)
    newComment.blogId   = req.params.id
        newComment.save().then((newComment)=>{
            Blog.findById(req.params.id).then((foundBlog)=>{
                foundBlog.comments.push(newComment._id)
                foundBlog.save().then((updatedBlog)=>{

                })
            })
                res.status(200).json(newComment)
            })
            .catch((err)=>{
                res.status(400).json({message: "error occured while creating comment", error: err})
            })
}