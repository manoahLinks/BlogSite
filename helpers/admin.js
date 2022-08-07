let Blog = require('../models/blogs'),
    User = require('../models/user')

exports.displayAllBlogs = (req, res)=>{
    Blog.find({}, (err, blogs)=>{
        if(err){
            console.log('couldnt display blogs')
        }else{
            res.render('admins/admin', {blogs: blogs})
        }
    })
}

module.exports = exports 