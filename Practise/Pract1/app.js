const express=require("express");
const app=express();
const model=require("./model/model");
const package=require("./product.json");
const router=require("./routers/router");

const port=4000;

app.use("/",router);
app.get("/",(req,res)=>{
    res.send("This is Live");
})

app.listen(port,async()=>{
    console.log(`port is running on ${port}`);
   // await model.deleteMany();
    await model.create(package);
})

