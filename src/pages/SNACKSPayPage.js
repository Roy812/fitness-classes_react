import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CICOPayContent from "../components/cicoPayContent/CICOPayContent";

function SNACKSPayPage() {
    return(
        <>
            <LoginNavbar />
            <CICOPayContent
                classTitle={"SNACKS"}
                lessonId={2}
            />
            <LoginFooter />
        </>
    );
}

export default SNACKSPayPage;