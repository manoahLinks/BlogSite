let express = require('express'),
    router = express.Router({mergeParams: true}),
    helpers = require('../helpers/blog')


router.route('/')
    .get(helpers.displayAllBlogs)
    .post(helpers.createNewBlog)

// = DISPLAY MORE INFO ABOUT POST======
router.route('/:id')
    .get(helpers.displayBlogMoreInfo)
    .put(helpers.updateBlog)
    .delete(helpers.deleteBlog)
    
module.exports = router    