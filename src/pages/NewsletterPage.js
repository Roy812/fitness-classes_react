import React from "react";
import RegisterHeader from "../components/register-header/RegisterHeader";
import Footer from "../components/footer/Footer";
import NewsletterContent from "../components/newsletter-content/NewsletterContent";

function NewsletterPage() {
    return (
        <>
            <RegisterHeader
                title="NEWSLETTER"
                message="LOGIN"
            />
            <NewsletterContent />
            <Footer />
        </>
    );
}

export default NewsletterPage;