import { createContext, useState } from "react";


export const AdminContext=createContext();//global box for storing data

const AdminContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const [aToken,setAToken]=useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'');
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const value={//data stored globally
        aToken,
        setAToken,
        backendUrl,
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider