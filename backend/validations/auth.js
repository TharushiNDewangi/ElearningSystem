const { check, validationResult } = require('express-validator');
//const { rootCertificates } = require('node:tls');
 exports.validateSigninRequest=
[
    check('name')
    .notEmpty()
    .withMessage(' name is required'),
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('password must be at least 6 chracter long')
];
exports.validateSignupRequest = [
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    // check('password')
    // .isLength({ min: 6 })
    // .withMessage('Password must be at least 6 character long')
];

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            error: errors.array()[0].msg
        })

    }
    next();
   
}