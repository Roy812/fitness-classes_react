import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import NutritionBody from "../components/nutrition-body/NutritionBody";

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