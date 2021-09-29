import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import CICOTitle from "../components/cicoTitle/CICOTitle";
import CICOContent from "../components/cicoContent/CICOContent";
import CICOFooter from "../components/cicoFooter/CICOFooter";


function SNACKSPage() {

    return (
        <>
            <LoginNavbar />
            <CICOTitle
                title={"THE PERFECT WORKOUT SNACKS"}
                teacher={"BY - JIM STOPPANI"}
            />
            <CICOContent
            payLink={"/SNACKSpay"}
            />
            <CICOFooter />
        </>
    );
}

export default SNACKSPage;