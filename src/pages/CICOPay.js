import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CICOPayContent from "../components/cicoPayContent/CICOPayContent";


function CICOPay() {

    return (
        <>
            <LoginNavbar />
            <CICOPayContent
            classTitle={"CICO, ITs ALL YOU NEED"}
            lessonId={1}
            />
            <LoginFooter />
        </>
    );
}

export default CICOPay;