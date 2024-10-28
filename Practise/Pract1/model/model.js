const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mongodbDatabaseName1");

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:[true,"price must be provided"]
    },

    featured:{
        type:Boolean,
        default:false
    },

    rating:{
        type:Number,
        default:4.9
    },

    createdAt:{
        type:Date,
        default:Date.now()
    },

    company:{
        type:String,
        enum:['apple',"samsung","dell","mi"],
        message:`{VALUE} is not supported`
    }



})

module.exports=mongoose.model("SCHEMA",productSchema);