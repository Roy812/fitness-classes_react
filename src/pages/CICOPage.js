import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import CICOTitle from "../components/cicoTitle/CICOTitle";
import CICOContent from "../components/cicoContent/CICOContent";
import CICOFooter from "../components/cicoFooter/CICOFooter";

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