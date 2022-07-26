const { response } = require('express')
const { set } = require('mongoose')
let blog = require('../models/blogs.js')

let comment = require('../models/comments.js')

exports.indexPage = async (req, res)=>{
    res.send('welcome to the home page of this blog')
}

exports.allBlogs = async (req, res)=>{
    let response = await blog.find({})
    
    // .then(()=>{
    //     console.log('this is an attached promise')
    // })
    // const data = JSON.stringify(response)
    res.render('blogs/index', {post: response})
}    


exports.showCreateBlogPage = async (req, res)=>{
    console.log(req.socket.remoteAddress)
    res.render('blogs/newblog')
}

exports.createNewBlog = async (req, res)=>{
    
   let response =  await blog.create(req.body.blog)

    console.log(response)
    res.redirect('blogs/blogs')
}




exports.displayBlogMoreInfo =  async (req, res)=>{

    blog.findById(req.params.id).populate("comments").exec((err, foundblog)=>{
        if(err){
            console.log(err)
            res.redirect('/blogs')
        }else{
            res.render('blogs/posts', {blog: foundblog})         
        }
    })
}

exports.updateBlog = async (req, res)=>{
    let response = await blog.findByIdAndUpdate(req.params.id, req.body.blog)
    res.redirect('/blogs')
}

exports.editBlog = async (req, res)=>{
    let response = await blog.findById(req.params.id)
    res.render('blogs/editblog', {blog:response})
}


exports.deleteBlog = async (req, res)=>{
    let response =  await blog.findByIdAndRemove(req.params.id)
    console.log(response, 'deleted')
    res.redirect('/blogs')
}

exports.comment = (req, res)=>{

    blog.findById(req.params.id, (err, blog)=>{
        if(err){
            console.log('error locating id')
        }else{
            comment.create(req.body.comment, (err, newComment)=>{
                if(err){
                    console.log(err)
                }else{
                    blog.comments.push(newComment)
                    blog.save();
                    res.redirect(`/blogs/${req.params.id}`)
                }
            })
        }
    })   
}

module.exports = exports