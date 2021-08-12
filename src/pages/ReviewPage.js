import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import ReviewCreate from "../components/review-create/ReviewCreate";
import ReviewCreateContent from "../components/review-createcontent/ReviewCreateContent";

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