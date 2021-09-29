import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import ReviewCICOBody from "../components/reviewCicoBody/ReviewCICOBody";


function ReviewPageTESTOSTERON() {

    return (
        <>
            <LoginNavbar />
            <ReviewCICOBody
            title={"TESTOSTERON"}
            />
            <LoginFooter />
        </>
    );
}

export default ReviewPageTESTOSTERON;