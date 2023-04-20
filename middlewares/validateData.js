const  validateData = (req,res,next)=>{
    console.log("This is route based middleware");
    next();
}
module.exports = validateData