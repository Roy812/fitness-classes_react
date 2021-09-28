import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import ReviewCICOBody from "../components/reviewCicoBody/ReviewCICOBody";

function ReviewPageSNACKS() {
    return(
        <>
            <LoginNavbar />
            <ReviewCICOBody
            title={"SNACKS"}
            />
            <LoginFooter />
        </>
    );
}

export default ReviewPageSNACKS;