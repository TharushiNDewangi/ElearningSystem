const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
// const {addcategory,getcategory}=require('../controller/Studentforinstitute') 
const {createStudentIninstitute,getall, updatestudentininstitute, deleteById, getstudentbyid, getstudentbystudentid } = require('../controller/Studentforinstitute');
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
//const Product = require('../models/product');


 

router.post('/studentInstitute/create',createStudentIninstitute);
router.get('/studentInstitute/viewall',getall);
router.put('/studentInstitute/edit/:_id',updatestudentininstitute);
router.delete('/studentInstitute/del/:_id',deleteById);
router.get('/studentInstitute/:studentId',getstudentbyid);
router.post('/studentInstitute/sech',getstudentbystudentid);


 module.exports = router;  