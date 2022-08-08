let express = require('express'),
    router =  express.Router({mergeParams: true}),
    helpers = require('../helpers/comment.js')

// create new comment
router.route('/')
    .post(helpers.createNewComment)


module.exports = router    