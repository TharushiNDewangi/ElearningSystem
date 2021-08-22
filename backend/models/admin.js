const mongoose = require('mongoose');
const schema =mongoose.Schema;

const adminSchema=new schema(
    {
        adminId: {
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
        role: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
        },
        month: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
            
        },
        year: {
            type:String, 
            required:true,
            trim:true,
            unique:true,
            index:true
            
        },
        contactnumber:{
            type:String
        }
     
    },{timestamps:true}
);
// userschema.virtual('password' )
// .set(function(password){
// this.hashpassword=bcrypt.hashSync(password,10)
// });
// userschema.methods={
//     authenticate:function(password)
//     {
//         console.log(password);
//         console.log(this.hashpassword);
//         return bcrypt.compareSync(password,this.hashpassword)
//     }
// }
const admin =mongoose.model("admins",adminSchema);
module.exports=admin;