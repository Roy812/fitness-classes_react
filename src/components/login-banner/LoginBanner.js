import React from "react";
import styles from "./LoginBanner.module.css";
import cookbookPicture from "../../assets/Cookbook(image).png";
import hittPicture from "../../assets/HIIT(image).png";

function LoginBanner() {
    return(
        <div className={styles["login-banner"]}>
            <div className={styles["login-banner-img"]}>
                <img className={styles["login-banner-cookbook"]} src={cookbookPicture} alt="cookbook-image"/>
                <img className={styles["login-banner-hitt"]} src={hittPicture} alt="hitt-image"/>
            </div>
            <div className={styles["login-banner__podcast"]}>
                <p className={styles["login-banner__podcastmessage"]}>TODAY ON THE F.C. PODCAST</p>
            </div>
        </div>
    );
}

export default LoginBanner;