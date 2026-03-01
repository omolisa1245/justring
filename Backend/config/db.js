import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://olayemiomolisa:omololami@cluster0.qjnhwuo.mongodb.net/Justring').then(()=>console.log("DB Connected"));

}