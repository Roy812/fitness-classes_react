import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import NutritionBody from "../components/nutritionBody/NutritionBody";


function NutritionPage() {

    return(
        <>
            <LoginNavbar />
            <NutritionBody />
            <LoginFooter />
        </>
    );
}

export default NutritionPage;