const express=require("express");
const app=express();

const port=4000;

app.get("/",(req,res)=>{
    res.send("This is Live");
})

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})