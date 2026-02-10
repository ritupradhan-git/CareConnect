import { createContext } from "react";


export const AdminContext=createContext();//global box for storing data

const AdminContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const currencySymbol='$'
    const value={//data stored globally
        doctors,
        currencySymbol
    }
    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider