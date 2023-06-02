const jwt=require('jsonwebtoken');

const requireAuth= (req,res,next)=>{
  // console.log(req.cookies)
  const token=req.cookies?.jwt;
   jwt.verify(token,'secret',(err,decodedToken)=>{
    if(err){
      console.error(err);
      res.send([]);
    }
    else{
      return next();
    }
  })
}

module.exports=requireAuth;