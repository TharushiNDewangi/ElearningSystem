const router=require("express").Router();
const { requireSignin,sellermiddleware } = require('../middleware/index')
const {createteacher,getall,updateteacher, getteacherbyid, getteacherbyteacherid, techerdeleteById} = require('../controller/teacher');
const multer = require('multer');
const shortid = require('shortid')
const path = require('path');


router.post('/teacher/create',createteacher);
router.put('/teacher/edit/:_id',updateteacher);
router.get('/teacher/:teacherId', getteacherbyid);
router.delete('/teacher/delete/:_id',techerdeleteById);
router.post('/teacher/search',getteacherbyteacherid);
router.get('/teachers/view',getall);


module.exports = router; 