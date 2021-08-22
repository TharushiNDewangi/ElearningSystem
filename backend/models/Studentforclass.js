const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const StudentClassSchema=new schema(
    {
        StudentGroupId: {
            type:String,
            required:true,
            trim:true
        },
        name:{
            type: String,
            required:true,
           
        },
        
        email:{
            type: String,
            required:true,
           
        },
       
        Studentclass:{
            type:Number,
            required:true,
           
        },
       
        classid:{type:mongoose.Schema.Types.ObjectId,ref :'ClassSchedule' },
        studentid:{type:mongoose.Schema.Types.ObjectId,ref :'Studentforinstitute' },
      
        
        },{ timestamps: true})


const studentforclass =mongoose.model("Studentforclass",StudentClassSchema);
module.exports=studentforclass;
