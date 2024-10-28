const express=require("express");
const router=express.Router();

router.route("/").get((req,res)=>{
    res.status(200).json({msg:"This is product List"});
})

router.route("/testing").get((req,res)=>{
    res.status(200).json({msg:"This is all product list"});
})

module.exports=router;