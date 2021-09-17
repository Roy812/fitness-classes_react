import React from "react";
import axios from "axios";

const jwtToken = localStorage.getItem('token');
const userId = localStorage.getItem('id');


    async function LoadProfilePicture() {
        try {
             const result = await axios.get(`http://localhost:8080/users/id/${userId}`, {
                 headers: {
                     "Content-Type": "application/json",
                     Authorization: `Bearer ${jwtToken}`,
                 }
             })
             console.log(result);
             const profilePicture = result.data.profilePicture;
             console.log(profilePicture);
         } catch (e) {
             console.error(e);
         }
    }


export default LoadProfilePicture;