let blog    = require('../models/blogs'),
    comment = require('../models/comments.js'),
    Admin   = require('../models/admin')

exports.displayAllBlogs = async (req, res)=>{
    const blogs = await blog.find({})
        .then((blogs)=>{
            res.status(200).json(blogs)
        }).catch((err)=>{
            res.json({message: 'blogs cannot be retrived at this moment', error: err})
        })
}    


exports.createNewBlog = async (req, res)=>{
   let body = req.body 

   const Blog =  new blog(body)
        Blog.createdBy = req.params.id
        Blog.save().then((newBlog)=>{
            Admin.findById(req.params.id)
                .then((foundAdmin)=>{
                    foundAdmin.blogPosts.push(newBlog._id)
                    foundAdmin.save().then((updatedAdmin)=>{
                        // res.json({updatedAdmin})
                    })
                })
            res.status(201).json({newBlog})
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
    let updatedBlog = await blog.findByIdAndUpdate(req.params.id, req.body.blog)
            .then((updatedBlog)=>{
                res.status(201).json(updatedBlog)
            })
            .catch((err)=>{
                res.status(400).json({message: 'An error occurred while updating blog'})
            })
}

exports.deleteBlog = async (req, res)=>{
    let deletedBlog =  await blog.findByIdAndRemove(req.params.id)
            .then((deletedBlog)=>{
                res.status(200).json({mesage: `the Blog with id: ${deletedBlog.id} was successfully deleted`})
            })
            .catch((err)=>{
                res.json({message: 'an error occured while delting this file'})
            })
}


module.exports = exports