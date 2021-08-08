import React from "react";
import RegisterHeader from "../components/register-header/RegisterHeader";
import RegisterFooter from "../components/register-footer/RegisterFooter";
import RegisterContent from "../components/register-content/RegisterContent";


function RegisterPage() {
    return(
        <>
            <RegisterHeader
            title="REGISTER YOUR ACCOUNT BY FOLLOWING THESE SIMPLE STEPS"
            message="LOGIN"
            />
            <RegisterContent />
            <RegisterFooter
            message="STILL UNSURE? SIGN UP, AND GET YOUR FIRST LESSON FREE!"
            />
        </>
    );
}

export default RegisterPage;