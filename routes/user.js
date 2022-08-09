let express = require('express'),
    router = express.Router(),
    helpers = require('../helpers/users')

//  authentication
    

router.route('/register')
    .get(helpers.showRegisterUserPage)
    .post(helpers.registerUser)    
    
router.route('/:id')
    .get(helpers.profileUpdate)

module.exports = router    