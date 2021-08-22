const router=require("express").Router();
const {signup, signin}=require('../controller/user-auth')
const { validateSigninRequest,validateSignupRequest, isRequestValidated } = require('../validations/auth')
const {validationResult,check}=require('express-validator');




router.post('/signup',validateSigninRequest, isRequestValidated,signup)
router.post("/signin",validateSignupRequest,isRequestValidated,signin);

// router.post('/profile',requireSignin,(req,res)=>
// {
//     res.status(200).json({user:'profile '})
// });

module.exports=router;