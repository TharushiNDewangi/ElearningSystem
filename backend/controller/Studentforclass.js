//const router = express.Router();
const Studentforclass = require('../models/Studentforclass');

const nodemailer = require("nodemailer");


exports.createStudentInclass = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        StudentGroupId,name, email,  Studentclass,studentid,classid
    } = req.body;
    const studentforclass = new Studentforclass({
        StudentGroupId,
        name, 
        email, 
        Studentclass,  
        studentid,
        classid
      
        // createBy: req.user._id
    });

    studentforclass.save(((error, Studentforclass) => {
        if (error)
        {
            console.log(email);
        const receiverEmail = email; // get the reciver email address from body of the  request
        const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
        const password = "asdqwe@123"; // set password of sender

        try {
            /*
           create reusable transporter object using the default SMTP transport
          */
            let transporter = nodemailer.createTransport({
                service: "gmail", // use gmail as the email service
                port: 25, // port number
                secure: false, // true for 465, false for other ports
                auth: {
                    // autnetication details
                    user: senderMail,
                    pass: password,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });
    
            let HelperOptions = {
                from: senderMail, // sender address
                to: receiverEmail, // list of receivers
                subject: "Welcome to Sipni higher education.You have successfully registerd to the class Group ", // Subject line
                text: "", // plain text body
                html: ` 
                      <h3>This is an automatically generated email, please do not reply </h3>
                      <li>You successfully registerd to system </li>
                      <li>status: Successuly  </li>
                      <li>StudentId: ${StudentGroupId}</li>
                      <li>class: ${Studentclass}</li>
                     
                      
                      <h3>Best regards,</h3>
                      <p>Sipni Higher Education center</p>`,
            };
    
            // HTML version of the message
    
            transporter.sendMail(HelperOptions, (error, info) => {
                // send mail with defined transport object
                if (error) {
                    return console.log(error);
                }
    
                console.log("The message was sent!");
    
                console.log(info);
    
                res.json(info); // send the json response
            });
        } catch (e) {
            console.log(e);
        }
        }
        if (Studentforclass) {
            res.status(201).json({ Studentforclass });
        }
    }));
    //hhh
};


exports.getall=async(req,res)=>{
    await Studentforclass.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

   exports.getstudentinclass = (req, res) => {
    Studentforclass.find({}).exec((error, students) => {
        if (error) return res.status(400).json({ error });
        if (students) {
            const studentlist = createstudent(students)
            return res.status(201).json({ studentlist });
        }
    });
}
exports.updatestudentinclass = (req, res) => {

    const {
         name,email,Studentclass
    } = req.body;
  
    console.log(" id", req.params._id)

    Studentforclass.findByIdAndUpdate(req.params._id, { $set: {  name:name ,email: email, Studentclass: Studentclass} },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { StudentGroupId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Studentforclass.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getstudentbyid=async(req,res)=>{
    if(req.params && req.params.StudentGroupId){
        console.log(req.params.StudentGroupId)
        //console.log(req.params);
        await  Studentforclass.findById(req.params.StudentGroupId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  };
  exports.getstudentbygroupid=async(req,res)=>{
    const StudentGroupId= req.body.StudentGroupId;
    //const feesId=
    
        console.log("xxx"+StudentGroupId)
        //console.log(req.params);
        await  Studentforclass.findOne({StudentGroupId:StudentGroupId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }

