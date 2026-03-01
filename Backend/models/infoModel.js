import mongoose from "mongoose"

const formSchema = new mongoose.Schema({
    firstName: { type:String,required:true},
    lastName:{ type:String,required:true},
    email:{type:String,required:true,unique:true},
    phone:{type:String, default:"00000"},
    programOfInterest:{type:String,required:true}
})

const formModel = mongoose.model.form || mongoose.model("form", formSchema);

export default formModel;