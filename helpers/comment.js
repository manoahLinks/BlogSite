let Blog = require('../models/blogs'),
    Comment = require('../models/comments')

exports.comment = async (req, res)=>{
    const body = req.body
    let newComment = await Comment.create({comment: body.comment, userId: req.params.id})
            .then((newComment)=>{
                Blog.comments.push(newComment)
                Blog.save();
                res.status(200).json(newComment)
            })
}