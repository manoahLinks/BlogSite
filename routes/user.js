let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/users')

//  authentication

router.route('/user')
    .get(helpers.showRegisterUserPage)
    .post(helpers.registerUser)

router.route('/user/:id')
    .get(helpers.profileUpdate)

module.exports = router    