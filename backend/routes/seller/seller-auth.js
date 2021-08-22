 const router=require("express").Router();
const {signup, signin,signout}=require('../../controller/seller/seller-auth')
const { validateSigninRequest,validateSignupRequest, isRequestValidated } = require('../../validations/auth')
const {validationResult,check}=require('express-validator');
const {requireSignin}=require('../../middleware/index')
router.post("/seller/signin",validateSignupRequest,isRequestValidated,signin);

router.post("/seller/signup",validateSigninRequest, isRequestValidated,signup);
router.post("/seller/signout", signout);
// router.post('/admin/profile',requireSignin,(req,res)=>
// {
//     res.status(200).json({user:'profile '})
// });

module.exports=router;