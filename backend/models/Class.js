const express = require('express');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const ClassSchedule=new schema(
    {
        ClassId: {
            type:String,
            required:true,
            trim:true
        },
        
        hall:{
            type: String,
            required:true,
           
        },
        teachername:{
            type:String,
            required: true,
           
    
        },
        
        Studentbatch:{
            type:String,
            required:true,
           
        },
        day: {
            type: String,
            required:true,
            trim:true
        },
        starttime: {
            type:String,
            required:true,
            trim:true
        },
        endtime: {
            type: String,
            required:true,
            trim:true
        },
        // offer:{ type:Number},
        
        // productPictures:[
        //     { img: {type: String}}
        // ],
        // name:[
        //     {
        //         userId:{type :mongoose.Schema.Types.ObjectId, ref: 'User'},
        //         review: String
        //     }
        // ],
       // classid:{type:mongoose.Schema.Types.ObjectId,ref :'Catogory' },
       // name:{type:mongoose.Schema.Types.ObjectId,ref :'User' },
        // createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        // updatedAt:Date,
        
        },{ timestamps: true})


const classshedule =mongoose.model("ClassSchedule",ClassSchedule);
module.exports=classshedule;
//module.exports=
// exports.getclassfees=(req,res)=>
// {
//     classfees.find({}).exec((error,classfees)=>
//     {
//         if(error) return res.status(400).json({error});
//         if(classfees){
//             const fees=createCatogories(classfees)
//             return res.status(201).json({fees});
//         }
//     });
// }