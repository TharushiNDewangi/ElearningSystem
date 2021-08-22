//const router = express.Router();
const Salary = require('../models/salary');
const Student = require('../models/Studentforinstitute');
const Class = require('../models/Class');
const shortid = require('shortid')
const slugify = require('slugify')
const nodemailer = require("nodemailer");


exports.createsalary = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        salaryId, email, amount, year, month, studentid
    } = req.body;
    //const feesId=
    //const ClassId= {Class.findOne({ClassId:classid}).select(ClassId)}
   console.log(salaryId);
    const salary = new Salary({
        salaryId,
        email,
        amount,
        year,
        month,
        studentid,
        // createBy: req.user._id
    });

    salary.save(((error,Salary) => {
        if (error){
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
                subject: "Your salary pass your account", // Subject line
                text: "", // plain text body
                html: ` 
                      <h3>This is an automatically generated email, please do not reply </h3>
                      <li>Your salary pass your account check </li>
                      <li>status: Successuly  </li>
                      <li>amount: ${amount}</li>
                      <li>amount: ${month}</li>
                      <li>amount: ${year}</li>
                      
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
        if (Salary) {
            res.status(201).json({ Salary });
            
        }
    }))
//     .then(data => {
//         console.log(email);
//         const receiverEmail = email; // get the reciver email address from body of the  request
//         const senderMail = "edexonlineconferencemanagement@gmail.com"; // set emailmaddress of sender
//         const password = "asdqwe@123"; // set password of sender

//         try {
//             /*
//            create reusable transporter object using the default SMTP transport
//           */
//             let transporter = nodemailer.createTransport({
//                 service: "gmail", // use gmail as the email service
//                 port: 25, // port number
//                 secure: false, // true for 465, false for other ports
//                 auth: {
//                     // autnetication details
//                     user: senderMail,
//                     pass: password,
//                 },
//                 tls: {
//                     rejectUnauthorized: false,
//                 },
//             });
    
//             let HelperOptions = {
//                 from: senderMail, // sender address
//                 to: receiverEmail, // list of receivers
//                 subject: "Your reseachpaper rejected", // Subject line
//                 text: "", // plain text body
//                 html: ` 
//                       <h3>This is an automatically generated email, please do not reply </h3>
//                       <li>Title ${data.title}</li>
//                       <li>status: ${data.status}</li>
//                       <li>date: ${data.date}</li>
                      
//                       <h3>Message</h3>
//                       <p>${req.body.message}</p>`,
//             };
    
//             // HTML version of the message
    
//             transporter.sendMail(HelperOptions, (error, info) => {
//                 // send mail with defined transport object
//                 if (error) {
//                     return console.log(error);
//                 }
    
//                 console.log("The message was sent!");
    
//                 console.log(info);
    
//                 res.json(info); // send the json response
//             });
//         } catch (e) {
//             console.log(e);
//         }
//    }).catch(err=>{
//        res.status(400).send({error:err.massage})
//    });
    //hhh
};
exports.getSalary = (req, res) => {
    Salary.find({}).exec((error, Salary) => {
        if (error) return res.status(400).json({ error });
        if (Salary) {
            const Salarylist = createfees(Salary)
            return res.status(201).json({ Salarylist });
        }
    });
}

// exports.getall = async (req, res) => {
//     await Classfees.find({}).then(
//         Class.findOne({classid:lassid}).select(ClassId).then(Student.findOne({studentid:studentid}).select(studentId))
//     )
//         .then(data => {
//             console.log(data);
//             console.log(data.classId);
//             res.status(200).send({ data: data });
//         }).catch(err => {
//             res.status(500).send({ error: err.massage })
//             console.log(err);
//         });


// }
exports.getall = async (req, res) => {
    await Salary.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(500).send({ error: err.massage })
            console.log(err);
        });


}
// exports.getclass=async(req,res)=>{
//     if(req.params && req.params.id){
//         console.log(req.params.id)
//         //console.log(req.params);
//         await Class.findById(req.params.id)
//         .populate('Class', 'ClassId')
//         .then(data => {
//             console.log(data.ClassId);
//            res.status(200).send({ data: data.ClassId });
//            //console.log(subjects);
//        }).catch(err=>{
//            res.status(400).send({error:err.massage})
//        });
//     }
    
//   }

exports.updateSalary = (req, res) => {

    const {
        salaryId, email, amount, year, month, classid
    } = req.body;
    console.log(year);
    console.log(month);
    console.log(email);
    console.log(" id", req.params._id)

    Salary.findByIdAndUpdate(req.params._id, { $set: { email: email, amount: amount, month: month} },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { salaryId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Salary.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getfeesbyid=async(req,res)=>{
    if(req.params && req.params.salaryId){
        console.log(req.params.salaryId)
        //console.log(req.params);
        await  Classfees.findById(req.params.salaryId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }
  //seach
  exports.getSalarybysalaryid=async(req,res)=>{
    const salaryId= req.body.salaryId;
    //const feesId=
    
        console.log("dew"+salaryId)
        //console.log(req.params);
        await  Salary.findOne({salaryId:salaryId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
      
    
    
  }