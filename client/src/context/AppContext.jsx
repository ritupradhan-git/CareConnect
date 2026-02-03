import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const AppContext=createContext();//global box for storing data

const AppContextProvider=(props)=>{ //wrapper component-wraps the whole app
    const value={//data stored globally
        doctors
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider