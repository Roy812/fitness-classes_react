import React from "react";
import styles from "./RegisterBanner.module.css";
import fitflixPicture from "../../assets/FitFlix(image).png";
import cheeringPicture from "../../assets/Cheering(image).png";

function RegisterBanner() {
    return (
        <div className={styles["register-banner"]}>
            <p className={styles["register-banner__message1"]}>"IT'S LIKE NETFLIX, BUT FOR FITNESS"</p>

            <img className={styles["register-banner__fitflix"]} src={fitflixPicture} alt="fitflix-image"/>

            <p className={styles["register-banner__message2"]}>"JUST AS SEXY AS TIKTOK, BUT MORE INFORMATIVE"</p>

            <img className={styles["register-banner__cheering"]} src={cheeringPicture} alt="cheering-image"/>
        </div>
    )
}

export default RegisterBanner;