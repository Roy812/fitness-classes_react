import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CICOPayContent from "../components/cicoPayContent/CICOPayContent";

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