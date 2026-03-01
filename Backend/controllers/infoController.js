import formModel from "../models/infoModel.js";
import userModel from "../models/usermodel.js";
import validator from "validator"
import jwt from "jsonwebtoken"
import transporter from "../config/nodemailer.js";



const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


const infoForm = async (req, res) => {
    const { firstName, lastName, email, phone, programOfInterest } = req.body;

    const user = await userModel.findOne({ email });

    if (!firstName || !lastName || !email || !phone || !programOfInterest) {
        return res.json({ success: false, message: "Missing details" })

    }



    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "invalid email adddress" })

    }

    try {

        const infoForm = {
            firstName,
            lastName,
            email,
            phone,
            programOfInterest
        }

        const newForm = new formModel(infoForm);


        await newForm.save();
        const token = createToken(user)


        // // sending welcome email
        // const mailOption = {
        //     from: process.env.EMAIL,
        //     to: email,
        //     subject: 'Welcome to Justring',
        //     text:  `kindly note that we have receive your request. We will reached out to you shortly via this email id:${email}. Thank you for your patience`
        // }

        // await transporter.sendMail(mailOption);

        res.json({ success: true,token })
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: "error" });

    }

}


export { infoForm }