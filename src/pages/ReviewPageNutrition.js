import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import ReviewNutritionBody from "../components/reviewNutritionBody/ReviewNutritionBody";


function ReviewPageNutrition() {

    return (
        <>
            <LoginNavbar />
            <ReviewNutritionBody />
            <LoginFooter />
        </>
    );
}

export default ReviewPageNutrition;