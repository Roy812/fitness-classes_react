import React from "react";
import styles from "./LoginBanner.module.css";
import cookbookPicture from "../../assets/Cookbook(image).png";
import hittPicture from "../../assets/HIIT(image).png";

function LoginBanner() {
    return(
        <div className={styles["login-banner"]}>
            <div className={styles["login-banner__img-container"]}>
                <img className={styles["login-banner__img-container-cookbook"]} src={cookbookPicture} alt="cookbook-image"/>
                <div className={styles["login-banner__phantom-div"]}>TESTBAR</div>
            </div>

            <div className={styles["login-banner__container2"]}>
                <img className={styles["login-banner__img-container-hitt"]} src={hittPicture} alt="hitt-image"/>
                <div className={styles["login-banner__podcast"]}>
                    <p>TODAY ON THE F.C. PODCAST</p>
                </div>
            </div>
        </div>
    );
}

export default LoginBanner;