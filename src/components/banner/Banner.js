import React from "react";
import styles from "./Banner.module.css";
import liftingpicture from "../../assets/640px-Lasha_Talakhadze_Rio_2016 New1.jpg";
import foodpicture from "../../assets/FoodPicture.jpg";
import homegympicture from "../../assets/home gym.jpg";

function Banner( {quote_1, quote_2, quote_3} ) {
    return (
      <>
        <div className={styles["banner_container"]}>
          <img className={styles["picture"]} src={liftingpicture} alt="lifting"/>
          <span className={styles["quote1"]}
          >{quote_1}
          </span>
          <img className={styles["picture"]} src={foodpicture} alt="food"/>
          <span className={styles["quote2"]}
          >{quote_2}
          </span>
          <img className={styles["picture"]} src={homegympicture} alt="homegym"/>
          <span className={styles["quote3"]}
          >{quote_3}
          </span>
        </div>
      </>
    )
}

export default Banner;