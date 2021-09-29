import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import MyClassesContent from "../components/myClassesContent/MyClassesContent";


function MyClassesPage() {

    return (
        <>
            <LoginNavbar />
            <MyClassesContent />
            <LoginFooter />
        </>
    );
}

export default MyClassesPage;