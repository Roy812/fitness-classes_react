import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import CICOPayContent from "../components/cicopay-content/CICOPayContent";

function CICOPay() {
    return(
        <>
            <LoginNavbar />
            <CICOPayContent />
            <LoginFooter />
        </>
    );
}

export default CICOPay;