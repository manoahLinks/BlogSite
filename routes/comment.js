let express = require('express'),
    router =  express.Router(),
    helpers = require('../helpers/comment.js')

// create new comment
router.route('/blogs/:id/comment')
    .post(helpers.comment)


module.exports = router    