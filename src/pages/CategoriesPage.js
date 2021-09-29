import React from "react";
import LoginNavbar from "../components/loginNavbar/LoginNavbar";
import LoginFooter from "../components/loginFooter/LoginFooter";
import CategoriesContent from "../components/categoriesContent/CategoriesContent";


function CategoriesPage() {

    return (
        <>
            <LoginNavbar />
            <CategoriesContent
            message="BROWSE OUR CATEGORIES"
            />
            <LoginFooter />
        </>
    );
}

export default CategoriesPage;