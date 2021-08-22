const User=require('../models/user.js')
const router=require("express").Router();
const jwt =require('jsonwebtoken');
const bcrypt=require('bcrypt')
require('dotenv').config();
exports.signup=(req,res)=>{
    User.findOne({email:req.body.email
    }).exec(async(error,user)=>{
        if(user)
        return res.status(400).json({
            message:'user allready registed'
        });
        const{
            name,
            email,
            password
            }=req.body;
            const hashpassword=await bcrypt.hash(password,10);
        const _user=new User({
            name,
            email,
            hashpassword,
            username:Math.random().toString(),
            role:'user'
        });

            _user.save().then(()=>{
                res.json("user added");
            }).catch((err)=>{
                console.log(err);
            })
    
       
    });

}
//json({error}).
exports.signin=(req,res)=>{
    User.findOne({email:req.body.email
    }).exec((error,user)=>{
        if(error)return res.status(400).json({error});
        if(user){
            console.log(req.body.email);
            console.log(req.body.password);
            if(user.authenticate(req.body.password) && user.role==='user')
            {

                const token=jwt.sign({_id:user._id,role:user.role},process.env.JWT_SCRET,
                    {
                        expiresIn:'7d'
                    });
                    const {_id,name,email,role}=user;
                    res.status(200).json({
                        token,
                        user:{
                            _id,name,email,role
                        }
                    });
            }
            //pw fail
            else{
                return res.status(400).json({
                    message:'pw wrong'})
                //.json({error});
            }

        }
        else{
            return res.status(400).json({
                message:'something wrong'});
        }
    });
        
    
}
