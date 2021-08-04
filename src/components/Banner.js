import React from "react";
import liftingpicture from "../assets/640px-Lasha_Talakhadze_Rio_2016 New1.jpg";
import foodpicture from "../assets/FoodPicture.jpg";
import homegympicture from "../assets/home gym.jpg";

function Banner( {quote_1, quote_2, quote_3} ) {
    return (
      <>
      <div className="container">
          <img className="picture" src={liftingpicture} alt="lifting"/>
            <span className="quote1"
            >{quote_1}
            </span>
          <img className="picture" src={foodpicture} alt="food"/>
            <span className="quote2"
            >{quote_2}
            </span>
          <img className="picture" src={homegympicture} alt="homegym"/>
            <span className="quote3"
            >{quote_3}
            </span>
      </div>
      </>
    )
}

export default Banner;