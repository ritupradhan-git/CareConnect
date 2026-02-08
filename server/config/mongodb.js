import mongoose from "mongoose";


const connectDB=async()=>{

    mongoose.connection.on('connected',()=>console.log("Database Connected")) // To confirm if the database is connected or not
    await mongoose.connect(`${process.env.MONGO_URI}/CareConnect`)
}

export default connectDB;