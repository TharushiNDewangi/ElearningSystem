//const router = express.Router();
const Studentforinstitute = require('../models/Studentforinstitute');

const nodemailer = require("nodemailer");


exports.createStudentIninstitute = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        name, email, studentId, Studentclass,subject,year,month
    } = req.body;
    const studentforinstitute = new Studentforinstitute({
        name, 
        email, 
        studentId,
        Studentclass,  
        subject,
        year,
        month
      
        // createBy: req.user._id
    });

    studentforinstitute.save(((error, Studentforinstitute) => {
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
                subject: "Welcome to Sipni higher education.You have successfully registerd to the system", // Subject line
                text: "", // plain text body
                html: ` 
                      <h3>This is an automatically generated email, please do not reply </h3>
                      <li>You successfully registerd to system </li>
                      <li>status: Successuly  </li>
                      <li>StudentId: ${studentId}</li>
                      <li>class: ${Studentclass}</li>
                      <li>year: ${year}</li>
                      
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
        if (Studentforinstitute) {
            res.status(201).json({ Studentforinstitute });
        }
    }));
    //hhh
};


exports.getall=async(req,res)=>{
    await Studentforinstitute.find({})
    .then(data=>{
       res.status(200).send({data:data});
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log(err);
   });
  
           
   }

   exports.getstudentininstitute = (req, res) => {
    Studentforinstitute.find({}).exec((error, students) => {
        if (error) return res.status(400).json({ error });
        if (students) {
            const studentlist = createstudent(students)
            return res.status(201).json({ studentlist });
        }
    });
}
exports.updatestudentininstitute = (req, res) => {

    const {
        name, email,  Studentclass, subject ,year,month
    } = req.body;
  
    console.log(" id", req.params._id)

    Studentforinstitute.findByIdAndUpdate(req.params._id, { $set: { name: name, email: email, Studentclass: Studentclass, subject:subject,year:year,month:month } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { studentId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Studentforinstitute.deleteOne({ _id: req.params._id }).exec((error, result) => {
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
    if(req.params && req.params.studentId){
        console.log(req.params.studentId)
        //console.log(req.params);
        await  Studentforinstitute.findById(req.params.studentId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }
  exports.getstudentbystudentid=async(req,res)=>{
    const studentId= req.body.studentId;
    //const feesId=
    
        console.log("xxx"+studentId)
        //console.log(req.params);
        await  Studentforinstitute.findOne({studentId:studentId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }

