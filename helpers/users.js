require('dotenv').config()
let User    = require('../models/user'),
    bcrypt  = require('bcrypt'),
    jwt     = require('jsonwebtoken')

exports.showRegisterUserPage = (req, res)=>{
    res.render('user/register')
}

exports.registerUser = async (req, res)=>{

    body = req.body
    if(!body.email && body.password){
        res.json({message: 'required fields cannot be empty'})
    }

    const user = new User(body)

    const salt = await bcrypt.gensalt(10)
    
    user.password = await bcrypt.hash(body.password, salt)

    user.ipAddress = req.socket.remoteAddress

    user.save().then((newUser)=>{
        let token = jwt.sign({newUserId: newUser.id}, process.env.SECRET_KEY)
        res.status(201).json({newUser, token})
    })
}


exports.loginUser = async (req, res)=>{

    const body = req.body
    let foundUser = await User.findOne({email: body.email})
            if(foundUser){
                let validPassword = await bcrypt.compare(body.password ,foundUser.password)
                    if(validPassword){
                        res.status(200).json({message: `hey, ${foundUser.email} you have successfully loggedIn`})
                    }else{
                        res.status(400).json({message: 'it seems you provided a wrong password'})
                    }
            }else{
                res.status(400).json({message: 'the email you provided is not in our database'})
            }
}

exports.profileUpdate = (req, res)=>{
    res.render('user/update')
}

module.exports = exports