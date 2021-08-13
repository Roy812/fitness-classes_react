import React from "react";
import RegisterFooter from "../components/registerFooter/RegisterFooter";
import RegisterHeader from "../components/registerHeader/RegisterHeader";
import AboutContent from "../components/aboutContent/AboutContent";

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