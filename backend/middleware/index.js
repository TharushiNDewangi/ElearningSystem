
const jwt =require('jsonwebtoken');

exports.requireSignin=(req,res,next)=>
{
    //validation
    //check header regading validationa method and
    //forward it to nxt user
    if(req.headers.authorization)
    {
        const token=req.headers.authorization.split(" ")[1];
        const user=jwt.verify(token,process.env.JWT_SCRET);
        req.user=user;
        console.log(token);
        console.log(req.user.role);
        
        //jwt.decode()
    }else{
        return res.status(400).json({message:'Authorization requied'})
    }
    next();
}
exports.usermiddleware = (req, res, next) => {
    
    console.log(req.user.role);
    if(req.user.role !=='user')
    {
        return res.status(400).json({message:'user access denaied'})
    }
    next();
   
}
exports.sellermiddleware = (req, res, next) => {
    console.log(req.body.name);
    console.log(req.user.role);
    //console.log(req.user.name);
   if(req.user.role !=='seller')
    {
        return res.status(400).json({message:'seller access denaied'})
    }
    next();
   
}