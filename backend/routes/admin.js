const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {createadmin,getall,updateadmin,deleteadminById,getadminbyid, getadminbyadminId} = require('../controller/admin');
const multer = require('multer');
const shortid = require('shortid')
const path = require('path');

router.post('/admin/create',createadmin);
router.get('/admin/viewall',getall);
router.put('/admin/edit/:_id',updateadmin);
router.delete('/admin/delete/:_id',deleteadminById);
router.get('/admin/:adminId',getadminbyid);
router.post('/admin/search',getadminbyadminId);
module.exports = router; 