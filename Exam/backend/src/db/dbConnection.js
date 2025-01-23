import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Db connected");
    
}).catch(()=>{
    console.log("DB connection failed");
    
})