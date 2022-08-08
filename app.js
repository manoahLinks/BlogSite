// ====== querying and requiring packages ===========================

let express                 = require('express'),
    methodOverride          = require('method-override'),
    app                     = express(),
    mongoose                = require('mongoose'),
    bodyParser              = require('body-parser'),
    blogRoute               = require('./routes/blog'),
    userRoute               = require('./routes/user'),
    adminRoute              = require('./routes/admin'),
    db                      = require('./models'),
    commentRoute            = require('./routes/comment')   


app.set("view engine", "ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// app.use(methodOverride("_method"))
           
app.use('/api/user', userRoute)
app.use('/api/admin', adminRoute)
app.use('/api/admin/:id/blogs', blogRoute)


app.listen(5555, ()=>{
    console.log('server is listening')
})