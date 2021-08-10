import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import CICOTitle from "../components/cico-title/CICOTitle";
import CICOContent from "../components/cico-content/CICOContent";
import CICOFooter from "../components/cico-footer/CICOFooter";

function CICOPage() {
    return(
        <>
            <LoginNavbar />
            <CICOTitle />
            <CICOContent />
            <CICOFooter />
        </>
    );
}

export default CICOPage;