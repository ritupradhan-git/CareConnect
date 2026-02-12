import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'
export const AdminContext=createContext();//global box for storing data

const AdminContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const [aToken,setAToken]=useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    //get all doctors api end-point calling
    const [doctors,setDoctors]=useState([]);
    const getAllDoctors=async()=>{
        try {
            const {data}=await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{aToken}});
            if(data.success){
                setDoctors(data.doctors);
                console.log(data.doctors);
                
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    //Change Availability
    const changeAvailability=async(docId)=>
    {
        try{
            const {data}=await axios.post(backendUrl+'/api/admin/change-availability',{docId},{headers:{aToken}});
            if(data.success){
                toast.success(data.message);
                getAllDoctors()
                
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            toast.error(error.message);
        }
    }
    
    const value={//data stored globally
        aToken,
        setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailability
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider