let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/blog')

// ======== INDEX ROUTE ===============
router.route('/')
    .get(helpers.indexPage)

// === DISPLAY GENERAL POST ===========
router.route('/blogs')
    .get(helpers.allBlogs)
    .post(helpers.createNewBlog)

// ======= CREATE NEW BLOG POST =========
router.route('/blogs/new')
    .get(helpers.showCreateBlogPage)

// = DISPLAY MORE INFO ABOUT POST======
router.route('/blogs/:id')
    .get(helpers.displayBlogMoreInfo)
    .put(helpers.updateBlog)
    .delete(helpers.deleteBlog)

// ====EDIT INFO OF A POST=========
router.route('/blogs/:id/edit')
    .get(helpers.editBlog)

    
module.exports = router    