require('dotenv').config()
let Blog    = require('../models/blogs'),
    Admin   = require('../models/admin'),
    db      = require('../models'),
    bcrypt  = require('bcrypt'),
    jwt     = require('jsonwebtoken')


exports.registerAdmin = async (req, res)=>{

    body = req.body
    if(!body.email && body.password){
        res.json({message: 'required fields cannot be empty'})
    }

    const admin = new Admin(body)

    const salt = await bcrypt.genSalt(10)
    
    admin.password = await bcrypt.hash(body.password, salt)

    admin.ipAddress = req.socket.remoteAddress

    admin.save().then((newAdmin)=>{
        let token = jwt.sign({newAdminId: newAdmin.id}, process.env.SECRET_KEY)
        res.status(201).json({newAdmin, token})
    })
}

exports.loginAdmin = async (req, res)=>{

    const body = req.body
    let foundAdmin = await User.findOne({email: body.email})
            if(foundAdmin){
                let validPassword = await bcrypt.compare(body.password ,foundAdmin.password)
                    if(validPassword){
                        res.status(200).json({message: `hey, ${foundAdmin.email} you have successfully loggedIn`})
                    }else{
                        res.status(400).json({message: 'it seems you provided a wrong password'})
                    }
            }else{
                res.status(400).json({message: 'the email you provided is not in our database'})
            }
}
    

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