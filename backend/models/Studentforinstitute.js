const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const Studentinstituteschema=new schema(
    {
        name: {
            type:String,
            required:true,
            trim:true
        },
        
        email:{
            type: String,
            required:true,
           
        },
        studentId:{
            type:String,
            required: true,
           
    
        },
        
        Studentclass:{
            type:Number,
            required:true,
           
        },
        subject: {
            type: String,
            required:true,
            trim:true
        },
        year:{
            type:String,
            required:true,
            trim:true
        },
        month: {
            type: String,
            required:true,
            trim:true 
        },
     
        
        },{ timestamps: true})


const studentforinstitute =mongoose.model("Studentforinstitute",Studentinstituteschema);
module.exports=studentforinstitute;
