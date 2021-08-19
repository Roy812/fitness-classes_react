import React from "react";
import RegisterHeader from "../components/registerHeader/RegisterHeader";
import Footer from "../components/Footer/Footer";
import NewsletterContent from "../components/newsletterContent/NewsletterContent";
import RegisterFooter from "../components/registerFooter/RegisterFooter";

function NewsletterPage() {
    return (
        <>
            <RegisterHeader
                title="NEWSLETTER"
                message="LOGIN"
            />
            <NewsletterContent />
            <RegisterFooter
            message="STILL UNSURE, SIGN UP AN GET YOUR FIRST LESSON FREE!"
            />
        </>
    );
}

export default NewsletterPage;