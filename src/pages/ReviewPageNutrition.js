import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import ReviewNutritionBody from "../components/review-nutrition-body/ReviewNutritionBody";

function ReviewPageNutrition() {
    return(
        <>
            <LoginNavbar />
            <ReviewNutritionBody />
            <LoginFooter />
        </>
    );
}

export default ReviewPageNutrition;