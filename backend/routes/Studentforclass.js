const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
// const {addcategory,getcategory}=require('../controller/Studentforinstitute') 

//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
const { createStudentInclass, getall, updatestudentinclass, deleteById, getstudentbyid, getstudentbygroupid } = require("../controller/Studentforclass");
//const Product = require('../models/product');


 

router.post('/studentforclass/create',createStudentInclass);
router.get('/studentforclass/viewall',getall);
router.put('/studentforclass/edit/:_id',updatestudentinclass);
router.delete('/studentforclass/del/:_id',deleteById);
router.get('/studentforclass/:studentgroupId',getstudentbyid);
router.post('/studentforclass/sech',getstudentbygroupid);


 module.exports = router;  