import React from "react";
import RegisterHeader from "../components/registerHeader/RegisterHeader";
import RegisterFooter from "../components/registerFooter/RegisterFooter";
import RegisterContent from "../components/registerContent/RegisterContent";


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