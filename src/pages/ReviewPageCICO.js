import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import ReviewCICOBody from "../components/reviewCicoBody/ReviewCICOBody";

function ReviewPageCICO() {
    return(
        <>
            <LoginNavbar />
            <ReviewCICOBody />
            <LoginFooter />
        </>
    );
}

export default ReviewPageCICO;