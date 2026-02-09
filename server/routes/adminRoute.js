import express from 'express';
import { addDoctor } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const adminRouter=express.Router();//Creates a mini app for admin routes
//Sends a post req with a milderware of multer for image upload
adminRouter.post('/add-doctor',upload.single('image'),addDoctor);

export default adminRouter