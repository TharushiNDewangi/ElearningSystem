const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema =mongoose.Schema;
const userschema=new schema(
    {
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
        username: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
        },
        hashpassword: {
            type:String,
            required:true
            
        },
        role: {
            type:String,
            enum:['user','admin','seller'],
            default:'user'
            
        },
        contactnumber:{
            type:String
        },
        profilepic:{
            type:String
        }
    },{timestamps:true}
);
// userschema.virtual('password' )
// .set(function(password){
// this.hashpassword=bcrypt.hashSync(password,10)
// });
userschema.methods={
    authenticate:function(password)
    {
        console.log(password);
        console.log(this.hashpassword);
        return bcrypt.compareSync(password,this.hashpassword)
    }
}
const user =mongoose.model("User",userschema);
module.exports=user;