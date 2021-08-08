import React from "react";
import styles from "./Banner.module.css";
import liftingPicture from "../../assets/lifting-picture(cropped).jpg";
import foodPicture from "../../assets/FoodPicture.jpg";
import homegymPicture from "../../assets/homegym-image (2).jpg";

function Banner() {
    return (
        <div className={styles["banner"]}>
            <img className={styles["picture__lifting"]} src={liftingPicture} alt="lifting-image"/>
            <img className={styles["picture__food"]} src={foodPicture} alt="food-image"/>
            <img className={styles["picture__homegym"]} src={homegymPicture} alt="homegym-image"/>
        </div>
    )
}

export default Banner;