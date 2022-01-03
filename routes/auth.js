const express = require('express')
const router = express.Router();
const {signupValidator} = require('../middleware/validator')


router.post('/signup', signupValidator )


module.exports = router;