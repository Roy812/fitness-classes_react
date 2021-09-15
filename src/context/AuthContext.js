import React, {createContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";


export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    async function fetchUserData(jwtToken) {
        const decodedToken = jwt_decode(jwtToken);
        console.log(decodedToken);
        // const userId = decodedToken.sub;
        const userId = localStorage.getItem('id');
        try {
            const result = await axios.get(`http://localhost:8080/users/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }

            })
            console.log(result);
            setAuthState({
                user: {
                    username: result.data.username,
                    password: result.data.password,
                    id: result.data.id,
                },
                status: 'done',
            });
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== undefined && authState.user === null) {
            // const decodedToken = jwt_decode(token);
            // const userId = decodedToken.sub;
            fetchUserData(token);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    async function loginFunction(jwtToken) {
        localStorage.setItem('token', jwtToken);
        fetchUserData(jwtToken);
        history.push('/login');
    }

    function logoutFunction() {
        const token = localStorage.getItem('token');
        localStorage.removeItem(token);
        setAuthState({
           user: null,
        });

    }

    const data = {
        ...authState,
        login: loginFunction,
        logout: logoutFunction,
    }

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;