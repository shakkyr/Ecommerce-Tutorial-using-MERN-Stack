const { check } = require('express-validator')

exports.signupValidator = [
    check('username')
        .not().isEmpty()
        .trim()
        .withMessage('All fields required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('invalid Email'),
    check('password')
        .isLength({min:6})
        .withMessage('password must be at least 6 charactars')
]