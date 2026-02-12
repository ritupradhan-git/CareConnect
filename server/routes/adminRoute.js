import express from 'express';
import { addDoctor, allDoctors, loginAdmin } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';
import authAdmin from '../middleware/authAdmin.js';

const adminRouter=express.Router();//Creates a mini app for admin routes
//Sends a post req with a milderware of multer for image upload
adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor);

//Login Route
adminRouter.post('/login',loginAdmin);

//All Doctors
adminRouter.post('/all-doctors',authAdmin,allDoctors);
export default adminRouter