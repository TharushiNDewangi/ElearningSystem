const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {createsalary,getSalary,getall,updateSalary,deleteById ,getSalarybysalaryid} = require('../controller/salary');
//const Product = require('../models/product');
const multer = require('multer');
//const upload=multer({dest:'uploads/'})

const shortid = require('shortid')
const path = require('path');
//const Product = require('../models/product');




router.post('/salary/create',createsalary);
router.get('/salary/viewall',getall);
router.put('/salary/edit/:_id',updateSalary);
router.delete('/salary/del/:_id',deleteById);
//router.get('/salary/:feesId',getfeesbyid);
router.post('/salary/sech',getSalarybysalaryid);
//router.get('/salary/getclass/:id',getclass);
 module.exports = router;  