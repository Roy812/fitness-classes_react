import React from "react";
import NavBar from "../components/navBar/NavBar";
import Banner from "../components/banner/Banner";
import Quotes from "../components/quotes/Quotes";
import Content from "../components/content/Content";
import Footer from "../components/footer/Footer";
import Button from "../components/button/Button";

function HomePage() {
    return (
        <>
            <NavBar />
            <Banner />
            <Quotes />
            <Content />
            <Button />
            <Footer />
        </>
    );
}

export default HomePage;