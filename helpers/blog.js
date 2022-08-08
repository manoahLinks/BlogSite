let blog    = require('../models/blogs'),
    comment = require('../models/comments.js')

exports.displayAllBlogs = async (req, res)=>{
    let blogs = await blog.find({})
        .then((blogs)=>{
            res.status(200).json(blogs)
        }).catch((err)=>{
            res.json({message: 'blogs cannot be retrived at this moment'})
        })
}    


exports.createNewBlog = async (req, res)=>{
   let body = req.body 

   const Blog =  new blog(body)
        Blog.createdBy = req.params.id
        Blog.save().then((newBlog)=>{
            res.json({newBlog})
        })
        .catch((err)=>{
            res.status(400).json({message: 'Oops error while creating a Blog', error: err})
        })
}


exports.displayBlogMoreInfo =  async (req, res)=>{

   let foundBlog = await blog.findById(req.params.id)
        .then((foundBlog)=>{
            res.status(200).json(foundblog)
        })
        .catch((err)=>{
            res.status(400).json({message: 'blog info cannot be displayed at this time', error: err})
        })
}

exports.updateBlog = async (req, res)=>{
    let response = await blog.findByIdAndUpdate(req.params.id, req.body.blog)
    res.redirect('/blogs')
}

exports.deleteBlog = async (req, res)=>{
    let response =  await blog.findByIdAndRemove(req.params.id)
    console.log(response, 'deleted')
    res.redirect('/blogs')
}


module.exports = exports