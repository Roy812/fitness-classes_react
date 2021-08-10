import React from "react";
import LoginNavbar from "../components/login-navbar/LoginNavbar";
import LoginFooter from "../components/login-footer/LoginFooter";
import CategoriesContent from "../components/categories-content/CategoriesContent";

function CategoriesPage() {
    return (
        <>
            <LoginNavbar />
            <CategoriesContent />
            <LoginFooter />
        </>
    );
}

export default CategoriesPage;