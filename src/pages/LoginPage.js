import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginBanner from "../components/login-banner/LoginBanner";
import LoginContent from "../components/login-content/LoginContent";
import LoginFooter from "../components/login-footer/LoginFooter";

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