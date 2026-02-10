import validator from 'validator';
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';


//API for adding doctor

const addDoctor=async(req,res)=>{
    try {
        const {name,email,password,speciality,degree,experience,fees,about,address}=req.body;
        const imageFile=req.file;
        // console.log({name,email,password,speciality,degree,experience,fees,about,address},imageFile)

        //checking for all data to add doctor
        if(!name || !email || !password || !speciality || !fees || !degree || !about || !address || !experience || !imageFile){
            return res.json({success:false,message:"Missing Credentials"})
        }

        //Validating email format
        if(!validator.isEmail(email)){
            return res.json({success:"false",message:"Please enter a valid email"})
        }

        //Validating strong password
        if(password.length<8){
            return res.json({success:"false",message:"Please enter a strong password"})
        }

        //Encrypting the password
        const salt=await bcrypt.genSalt(10);//(5-15)
        const hashedPassword=await bcrypt.hash(password,salt)

        //Upload image to Cloudinary
        const imageUpload=await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"});
        const imageUrl=imageUpload.secure_url;

        //Save
        const doctorData={
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            fees,
            address:JSON.parse(address),//Store address as object
            about,
            experience,
            degree,
            date:Date.now()
        }

        const newDoctor=new doctorModel(doctorData)
        await newDoctor.save();
        res.json({success:true,message:"Doctor Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//api for admin login

const loginAdmin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {addDoctor,loginAdmin}