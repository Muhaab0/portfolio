"use client";

import axios from "axios";
import { createContext, useState , useContext, useEffect} from "react";


export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState()
    const [userData, setUserData] = useState()
    const [error, setError] = useState()



    const login = async (formData,e) => {
        e.preventDefault()
        setIsLoading(true);
        try {
            const res = await axios.post(`${process.env.customKey}/user/login`,formData)
            setUserData(res.data)
            setUserToken(res.data.token);
            localStorage.setItem("userData", JSON.stringify(userData))
            localStorage.setItem("userToken", userToken)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            console.log(error?.response?.data.message);
            setError(error.response?.data.message)
            setIsLoading(false)
        }

        setIsLoading(false);
    }


    const logout = () => {
        console.log("logouting");
        setIsLoading(true);
        setUserToken(null);
        setUserData(null);
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
        setIsLoading(false);
    }

    const isLoggedIn =  () => {
        setIsLoading(true)
        try {

            let userData =  localStorage.getItem("userData");
            let userToken =  localStorage.getItem("userToken");
            userData = JSON.parse(userData);
            if ( userData ) {
                console.log("LoggingIn");
                setUserData(userData)
                setUserToken(userToken)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(`isLogged in error ${error}`);
            setIsLoading(false)
        }
        setIsLoading(false)
    }


    useEffect(()=>{
        isLoggedIn();
        
    },[]);



    return(
        <AuthContext.Provider value={{userData,login, logout, isLoading , userToken , error}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AuthContext);
  }