let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/admin')

router.route('/admin')
    .get(helpers.displayAllBlogs)


router.route('/admin/blogs')
    .get(helpers.showAdminBlogs)

module.exports = router    