import React from "react";
import styles from "./Banner.module.scss";
import liftingPicture from "../../assets/lifting-picture(cropped).jpg";
import foodPicture from "../../assets/FoodPicture.jpg";
import homegymPicture from "../../assets/homegym-image (2).jpg";

function Banner() {

    return (
        <div className={styles["banner"]}>
            <img className={styles["banner__picture-lifting"]} src={liftingPicture} alt="lifting-image"/>
            <img className={styles["banner__picture-food"]} src={foodPicture} alt="food-image"/>
            <img className={styles["banner__picture-home-gym"]} src={homegymPicture} alt="homegym-image"/>
        </div>
    )
}

export default Banner;