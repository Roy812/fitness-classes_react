import React from "react";
import './App.css';
import Header from "./components/Header";
import './components/Header.css';
import Banner from "./components/Banner";
import "./components/Banner.css";
import Quotes from "./components/Quotes";
import "./components/Quotes.css";
import Footer from "./components/Footer";
import "./components/Footer.css";
import Login from "./components/Login";
import "./components/Login.css";

function App() {
  return (
    <>

    <Header
    title_1="Categories"
    title_2="About"
    title_3="Newsletter"
    title_4="Reviews"
    />

    <div className="banner_quotes_container">
        <Banner
        quote_1="Lift Big Weights"
        quote_2="Study Your Diet"
        quote_3="Build Your Dream Home Gym"
        />
        <Quotes
        quote_1="Fitness Classes Is The Best Way To Learn Exactly What You Are Looking For"
        quote_2="Receive Exclusive Membership Offers"
        quote_3="(Re)watch Your Classes Anytime, Anywhere"
        />
        <Login/>
    </div>

    <Footer
    message="Keep Up-To-Date, Get Our Newsletter!"
    />

    </>
  );
}

export default App;
