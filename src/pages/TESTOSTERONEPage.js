import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import CICOTitle from "../components/cicoTitle/CICOTitle";
import CICOContent from "../components/cicoContent/CICOContent";
import CICOFooter from "../components/cicoFooter/CICOFooter";


function TESTOSTERONEPage() {

    return (
        <>
            <LoginNavbar />
            <CICOTitle
                title={"TESTOSTERONE LEVELS & DIETS"}
                teacher={"BY - MIKE ISRATEL"}
            />
            <CICOContent
            payLink={"/TESTOSTERONEpay"}
            />
            <CICOFooter />
        </>
    );
}

export default TESTOSTERONEPage;