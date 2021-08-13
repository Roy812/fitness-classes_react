import React from "react";
import RegisterHeader from "../components/registerHeader/RegisterHeader";
import Footer from "../components/Footer/Footer";
import NewsletterContent from "../components/newsletterContent/NewsletterContent";

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