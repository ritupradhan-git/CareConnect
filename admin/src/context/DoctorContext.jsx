import { createContext } from "react";


export const DoctorContext=createContext();//global box for storing data

const DoctorContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const currencySymbol='$'
    const value={//data stored globally
        doctors,
        currencySymbol
    }
    return(
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider