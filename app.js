// ====== querying and requiring packages ===========================

let express                 = require('express'),
    methodOverride          = require('method-override'),
    app                     = express(),
    mongoose                = require('mongoose'),
    bodyParser              = require('body-parser'),
    passport                = require('passport'),
    localStrategy           = require('passport-local'),
    passportLocalMongoose   = require('passport-local-mongoose'),
    blog                    = require('./models/blogs'),
    comment                 = require('./models/comments'),
    user                    = require('./models/user.js'),
    blogRoute               = require('./routes/blog.js'),
    userRoute               = require('./routes/user.js')   
   
mongoose.connect('mongodb://localhost/blogSite')

app.set('views', './views')

app.set("view engine", "ejs")

app.use(passport.initialize())

app.use(express.static( __dirname + '/views'))

app.use(express.static( __dirname + '/public'))

app.use(bodyParser.urlencoded({extended: true}))

app.use(methodOverride("_method"))

//  authentication

app.route('/user')
    .get(userRoute.showRegisterUserPage)
    .post(userRoute.registerUser)

app.route('/user/:id')
    .get(userRoute.profileUpdate)    
       
//=========================================== 
//           BLOG  ROUTES

// ======== INDEX ROUTE =====================
app.route('/')
    .get(blogRoute.indexPage)

// === DISPLAY GENERAL POST ===========
app.route('/blogs')
    .get(blogRoute.allBlogs)
    .post(blogRoute.createNewBlog)

// ======= CREATE NEW BLOG POST =========
app.route('/blogs/new')
    .get(blogRoute.showCreateBlogPage)

// = DISPLAY MORE INFO ABOUT POST======
app.route('/blogs/:id')
    .get(blogRoute.displayBlogMoreInfo)
    .put(blogRoute.updateBlog)
    .delete(blogRoute.deleteBlog)

// ====EDIT INFO OF A POST=========
app.route('/blogs/:id/edit')
    .get(blogRoute.editBlog)


// ========================================
//          COMMENT ROUTES 
// ========================================
app.route('/blogs/:id/comment')
    .post(blogRoute.comment)

// ============================================
//           ADMIN ROUTES
// ============================================

// ======= SHOW ADMIN DASHBOARD ===============

app.get('/admin', (req, res)=>{
    res.render('admins/dashboard')
})

// ======== SHOW AND MANIPULATE BLOGS===========

app.get('/admin/blogs', (req, res)=>{
    blog.find({}, (err, blogs)=>{
        if(err){
            console.log('couldnt display blogs')
        }else{
            res.render('admins/admin', {blogs: blogs})
        }
    })
})

// ============================================
//            SERVER AND PORT
// ============================================
app.listen(5555, ()=>{
    console.log('server is listening')
})