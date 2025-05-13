import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sudetacer:sude1234@cluster0.cdnh8vc.mongodb.net/food-delivery').then(()=>console.log("db connected"));
}