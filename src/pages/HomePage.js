import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Banner from "../components/Banner/Banner";
import Quotes from "../components/Quotes/Quotes";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";


function HomePage() {

    return (
        <>
            <NavBar
            message="LOGIN"
            />
            <Banner />
            <Quotes />
            <Content />
            <Button />
            <Footer />
        </>
    );
}

export default HomePage;