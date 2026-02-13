import doctorModel from "../models/doctorModel.js";

const changeAvailability=async(req,res)=>{
    try {
        const {docId}=req.body;
        const doctor = await doctorModel.findById(docId);

    if (!doctor) {
      return res.json({ success: false, message: "Doctor not found" });
    }

    doctor.available = !doctor.available;
    await doctor.save();

    res.json({ success: true, message: "Availability changed" });
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const allDoctorsList=async(req,res)=>{
    try {
        const doctors=await doctorModel.find({}).select(['-password -email']) //to get all doctors

        res.json({success:true,doctors}); //Response sent 
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
export {changeAvailability,allDoctorsList};