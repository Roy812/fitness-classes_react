import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginBanner from "../components/loginBanner/LoginBanner";
import LoginContent from "../components/loginContent/LoginContent";
import LoginFooter from "../components/loginFooter/LoginFooter";


function LoginPage() {

    return (
        <>
            <LoginNavbar />
            <LoginBanner />
            <LoginContent />
            <LoginFooter />
        </>
    );
}

export default LoginPage;