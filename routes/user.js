let user = require('../models/user.js')

exports.showRegisterUserPage = (req, res)=>{
    res.render('user/register')
}

exports.registerUser = (req, res)=>{

    user.find({}, (err, userProfiles)=>{
        if(err){
            console.log('couldnt find users')
        }else{

            if(userProfiles.length == 0){
                user.create(req.body.user, (err, newUser)=>{
                    if(err){
                            console.log('error in creating user')
                            console.log(err)
                        }else{
                            console.log('created when array is empty')
                            console.log(newUser)
                        }
                    })
            }else{
                userProfiles.forEach((userProfile)=>{
                    console.log('users looped about to compare emails')
                    if(userProfiles.length == 0 || userProfile.email == req.body.user.email){
                        console.log('user already exist')
                    }else{
                        console.log('about to create user')
                        user.create(req.body.user, (err, newUser)=>{
                            if(err){
                                    console.log('error in creating user')
                                    console.log(err)
                                }else{
                                    console.log('this is the new user')
                                    console.log(newUser)
                                }
                            })
                    }
                })
            }
        }
    })

    
    }
exports.profileUpdate = (req, res)=>{
    res.render('user/update')
}

module.exports = exports