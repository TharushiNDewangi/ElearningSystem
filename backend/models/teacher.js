const mongoose = require('mongoose');
const schema =mongoose.Schema;

const teacherSchema=new schema(
    {
        teacherId: {
            type:String,
            required:true,
            trim:true
        },
        name: {
            type:String,
            required:true,
            trim:true
        },
        email: {
            type:String,
            required:true,
            trim:true,
            unique:true,
            index:true
        },
        subject: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
        },
        grade: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
            
        },
        contactnumber:{
            type:String
        },
        classid:{type:mongoose.Schema.Types.ObjectId,ref :'ClassSchedule' },
     
    },{timestamps:true}
);

const teacher =mongoose.model("teachers",teacherSchema);
module.exports=teacher;