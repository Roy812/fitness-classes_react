import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CICOPayContent from "../components/cicoPayContent/CICOPayContent";

function TESTOSTERONEPayPage() {
    return(
        <>
            <LoginNavbar />
            <CICOPayContent
                classTitle={"TESTOSTERONE"}
                lessonId={3}
            />
            <LoginFooter />
        </>
    );
}

export default TESTOSTERONEPayPage;