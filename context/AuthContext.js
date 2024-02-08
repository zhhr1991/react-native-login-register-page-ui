import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
//import axios from 'axios';
//import { Base_URL } from '../utils/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    //const [userInfo, setUserInfo] = useState(null);
    
    const login = (/*username, password*/) => {
        setIsLoading(true);
        /*axios.post(`${BASE_URL}/jwt-auth/v1/token`, {
            username,
            password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.data.token);
            AsyncStorage.setItem('userToken', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.data.token);
        }).catch(e)  (
            console.log(`Login error ${e}`)
        )*/

        setUserToken('ddruudvy');
        AsyncStorage.setItem('userToken', 'ddruudvy');
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        //AsyncStorage.removeItem('userInfo');
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLogedIn = async () => {
        try {
            setIsLoading(true);
            //let userinfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            /*userInfo = JSON.parse(userInfo);
            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }*/

            setUserToken(userToken);
            setIsLoading(false);
        } catch (e) {
            console.log(`isLoged in error ${e}`);
        }
    }

    useEffect(() => {
        isLogedIn();
    }, []);

    return (
        <AuthContext.Provider value={{isLoading,userToken,/*userInfo,*/login,logout,isLogedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

//export { AuthContext, AuthProvider }