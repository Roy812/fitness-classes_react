import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import MyClassesContent from "../components/myclasses-content/MyClassesContent";

function MyClassesPage() {
    return(
        <>
            <LoginNavbar />
            <MyClassesContent />
            <LoginFooter />
        </>
    );
}

export default MyClassesPage;