import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import ReviewCreate from "../components/reviewCreateLink/ReviewCreate";
import ReviewCreateContent from "../components/reviewCreateContent/ReviewCreateContent";

function ReviewPage() {
    return (
        <>
            <LoginNavbar />
            <ReviewCreate />
            <ReviewCreateContent />
            <LoginFooter />
        </>
    );
}

export default ReviewPage;