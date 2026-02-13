import { createContext, useEffect, useState } from "react";
import { toast} from "react-toastify";
import axios from 'axios';
import { data } from "react-router-dom";
export const AppContext=createContext();//global box for storing data

const AppContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const currencySymbol='$'

    const backendUrl=import.meta.env.VITE_BACKEND_URL;

    const [doctors,setDoctors]=useState([]);
    const getDoctorsData=async ()=>{
        try {
            const {data}=await axios.get(backendUrl+'/api/doctor/list');
            if(data.success){
                setDoctors(data.doctors)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        getDoctorsData()
    },[]);
    const value={//data stored globally
        doctors,
        currencySymbol
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider