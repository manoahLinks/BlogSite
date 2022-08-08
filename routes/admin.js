let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/admin')

// router.route('/')
//     .get(helpers.displayAllAdmins)

router.route('/register')
    .post(helpers.registerAdmin)

router.route('/login')
    .post(helpers.loginAdmin)    

// router.route('/admin/blogs')
//     .get(helpers.showAdminBlogs)

module.exports = router    