import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloundinary from './config/cloudinary.js';
//app config

const app=express();
const PORT=process.env.PORT || 4000;
connectDB();
connectCloundinary();

//middleware-function which runs before your route

app.use(express.json());//request will pass through this-convert incoming json to javascript objects
app.use(cors());//Allows cross origin frontend-backend setup with each other

 //api endpoints

 app.get('/',(req,res)=>{
    res.send("API Working");
 })

 app.listen(PORT,()=>{
    console.log("Server started",PORT);
 });