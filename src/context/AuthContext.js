import React, { createContext, useState } from "react";




export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({
        user: null,
    });

    function loginFunction() {
        console.log('Login!');
    }

    function logoutFunction() {
        console.log('Logout!');
    }

    const data = {
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;