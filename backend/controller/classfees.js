//const router = express.Router();
const Classfees = require('../models/classfees');
const Student = require('../models/Studentforinstitute');
const Class = require('../models/Class');
const nodemailer = require("nodemailer");




exports.createclassfees = (req, res) => {

    
    const {
        feesId, email, amount, year, month, classid, studentid
    } = req.body;
  
    const classfees = new Classfees({
        feesId,
        email,
        amount,
        year,
        month,
        classid,
        studentid,
        // createBy: req.user._id
    });

    classfees.save(((error, Classfees) => {
        if (error) {
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
        if (Classfees) {
            res.status(201).json({ Classfees });
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
    }));
    //hhh
};
exports.getclassfees = (req, res) => {
    Classfees.find({}).exec((error, fees) => {
        if (error) return res.status(400).json({ error });
        if (fees) {
            const feeslist = createfees(fees)
            return res.status(201).json({ feeslist });
        }
    });
}

exports.getall = async (req, res) => {
    await Classfees.find({})
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(500).send({ error: err.massage })
            console.log(err);
        });


}
exports.getclass=async(req,res)=>{
    if(req.params && req.params.id){
        console.log(req.params.id)
        //console.log(req.params);
        await Class.findById(req.params.id)
        .populate('Class', 'ClassId')
        .then(data => {
            console.log(data.ClassId);
           res.status(200).send({ data: data.ClassId });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }

exports.updateclassfees = (req, res) => {

    const {
        feesId, email, amount, year, month, classid
    } = req.body;
    console.log(year);
    console.log(month);
    console.log(email);
    console.log(" id", req.params._id)

    Classfees.findByIdAndUpdate(req.params._id, { $set: { email: email, amount: amount, month: month, classid: classid } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}
exports.deleteById = (req, res) => {
    const { feesId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Classfees.deleteOne({ _id: req.params._id }).exec((error, result) => {
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
    if(req.params && req.params.feesId){
        console.log(req.params.feesId)
        //console.log(req.params);
        await  Classfees.findById(req.params.feesId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }
//get month details
  exports.getfeesbymonth=(req,res)=>{
    console.log('hey')
    const { month } = req.params;
    console.log("pro id", month)
    console.log(req.params);
        Classfees.find({month: month}).populate('fees', 'amount email ')
        .exec((error, fees) => 
        {
            console.log("gf"+fees._id);
            if (error) {
                return res.status(400).json({ error });
            }
            if (fees) {
                
                console.log(fees);
                res.status(200).send({ data: fees });
            }
        });
        
    }
    
  
  exports.getfeesbyfeesid=async(req,res)=>{
    const feesId= req.body.feesId;
    
    
        console.log("dew"+feesId)
        
        await  Classfees.findOne({feesId:feesId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }
  exports.getmothby=async(req,res)=>{
    const month= req.body.month;
    
    
        console.log("dew"+month)
        
        await  Classfees.find({month:month})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }