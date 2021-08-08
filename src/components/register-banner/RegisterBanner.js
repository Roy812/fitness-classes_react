import React from "react";
import styles from "./RegisterBanner.module.css";
import fitflixPicture from "../../assets/FitFlix(image).png";
import cheeringPicture from "../../assets/Cheering(image).png";

function RegisterBanner() {
    return(
        <div className={styles["register-banner"]}>
            <p className={styles["register-banner-message__one"]}>"IT'S LIKE NETFLIX, BUT FOR FITNESS"</p>
            <img className={styles["register-banner-fitflix"]} src={fitflixPicture} alt="fitflix-image"/>
            <p className={styles["register-banner-message__two"]}>"JUST AS SEXY AS TIKTOK, BUT MORE INFORMATIVE"</p>
            <img className={styles["register-banner-cheering"]} src={cheeringPicture} alt="cheering-image"/>
        </div>
    )
}

export default RegisterBanner;