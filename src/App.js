import React from "react";
import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Quotes from "./components/quotes/Quotes";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";


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
