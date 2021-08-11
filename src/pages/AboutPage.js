import React from "react";
import RegisterFooter from "../components/register-footer/RegisterFooter";
import RegisterHeader from "../components/register-header/RegisterHeader";
import AboutContent from "../components/about-content/AboutContent";

function AboutPage() {
    return (
        <>
            <RegisterHeader
                title="ABOUT"
                message="LOGIN"
            />
            <AboutContent />
            <RegisterFooter
                message="STILL UNSURE? SIGN UP, AND GET YOUR FIRST LESSON FREE!"
            />
        </>
    );
}

export default AboutPage;