const Teacher = require('../models/teacher');

exports.createteacher = (req, res) => {

    // res.status(200).json({file: req.files , body:req.body});
    const {
        teacherId,name, email, subject, grade, contactnumber, classid
    } = req.body;
    //const feesId=
    const teacher = new Teacher({
       teacherId,
       name,
       email,
       subject,
       grade,
       contactnumber,
       classid
        // createBy: req.user._id
    });

    teacher.save(((error, Teacher) => {
        if (error) return res.status(400).json({ error });
        if (Teacher) {
            res.status(201).json({ Teacher });
        }
    }));

  
};

exports.getteachers = (req, res) => {
    Teacher.find({}).exec((error, teachers) => {
        if (error) return res.status(400).json({ error });
        if (teachers) {
            const teacherlist = createteacher(teachers)
            return res.status(201).json({ teacherlist });
        }
    });
}

exports.getall = async (req, res) => {
    await Teacher.find({})

        .then(data => {
            
            res.status(200).send({ data: data });
        }).catch(err => {
            res.status(500).send({ error: err.massage })
            console.log(err);
        }); 
    }

exports.updateteacher = (req, res) => {

    const {
        email, name, subject, grade, contactnumber
    } = req.body;
    console.log(name);
    console.log(subject);
    console.log(email);
    console.log(grade);
    console.log(contactnumber);
    console.log(" id", req.params._id)

    Teacher.findByIdAndUpdate(req.params._id, { $set: { email: email, name: name, subject: subject, grade: grade, contactnumber:contactnumber } },
        { new: true })
        .catch((err) => {
            console.log(err);
        })
}

exports.getteacherbyid=async(req,res)=>{
    if(req.params && req.params.teacherId){
        console.log(req.params.teacherId)
        //console.log(req.params);
        await  Teacher.findById(req.params.teacherId)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  }

  exports.getteacherbyteacherid=async(req,res)=>{
    const teacherId= req.body.teacherId;
  
        console.log("xxx"+teacherId)
        //console.log(req.params);
        await  Teacher.findOne({teacherId:teacherId})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           //console.log(subjects);
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    
    
  }

  exports.techerdeleteById = (req, res) => {
    const { teacherId } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Teacher.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };