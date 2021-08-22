const express = require('express');
const Sequelize = require('sequelize');
const mongoose = require('mongoose');
const schema =mongoose.Schema;
const classfeeschema=new schema(
    {
        feesId: {
            type:Number,
            autoIncrement:true,
            required:true,
            unique:true,
            trim:true
        },
        
        email:{
            type: String,
            required:true,
            
        },
        amount:{
            type:Number,
            required: true 
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
        classid:{type:mongoose.Schema.Types.ObjectId,ref :'ClassSchedule' },
        studentid:{type:mongoose.Schema.Types.ObjectId,ref :'Studentforinstitute' },
        // createBy:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true },
        // updatedAt:Date,
        
        },{ timestamps: true})


const classfees =mongoose.model("Classfees",classfeeschema);
module.exports=classfees;
