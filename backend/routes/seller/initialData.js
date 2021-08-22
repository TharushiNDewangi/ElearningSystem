const router=require("express").Router();
const {initialData}=require('../../controller/seller/initialData')


router.post("/initialdata",initialData);

module.exports=router; 