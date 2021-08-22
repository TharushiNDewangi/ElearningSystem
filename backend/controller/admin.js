//const router = express.Router();
const Admin = require('../models/admin');
const shortid = require('shortid')
const slugify = require('slugify')



exports.createadmin = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        name, email, adminId, role,month,year,contactnumber
    } = req.body;
    const admin = new Admin({
        name, 
        email,
        role, 
        adminId,
        month,  
        year,
        contactnumber
      
    });

    admin.save(((error, Admin) => {
        if (error) return res.status(400).json({ error });
        if (Admin) {
            res.status(201).json({ Admin });
        }
    }));
  
};

exports.getall=async(req,res)=>{
    await Admin.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

   exports.getadmins = (req, res) => {
    Admin.find({}).exec((error, admins) => {
        if (error) return res.status(400).json({ error });
        if (admins) {
            const adminlist = createstudent(admins)
            return res.status(201).json({ adminlist });
        }
    });
}

exports.updateadmin = (req,res) => {
    const{
        name,email,role,month,year,contactnumber
    } = req.body;

    console.log(" id", req.params._id)

    Admin.findByIdAndUpdate(req.params._id, {$set: {name,name, email:email, role:role, month:month, year:year, contactnumber:contactnumber}},
        { new: true })
        .catch((err) => {
            console.log(err);
        } )
}

exports.deleteadminById =(req,res) => {
    const {adminId} =req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Admin.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
};

exports.getadminbyid=async(req,res)=>{
    if(req.params && req.params.adminId){
        console.log(req.params.adminId)
        //console.log(req.params);
        await  Admin.findById(req.params.adminId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }

  exports.getadminbyadminId=async(req,res)=>{
    const adminId= req.body.adminId;
    //const feesId=
    
        console.log("xxx"+adminId)
        //console.log(req.params);
        await  Admin.findOne({adminId:adminId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }
