import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CreateReviewBody from "../components/createReviewBody/CreateReviewBody";


function CreateReviewPage() {

    return (
        <>
            <LoginNavbar />
            <CreateReviewBody />
            <LoginFooter />
        </>
    );
}

export default CreateReviewPage;