import React from "react";
import styles from "./LoginBanner.module.scss";
import cookbookPicture from "../../assets/Cookbook(image).png";
import hittPicture from "../../assets/HIIT(image).png";

function LoginBanner() {
    return(
        <div className={styles["login-banner"]}>
            <div className={styles["login-banner__container1"]}>
                <img className={styles["login-banner__container1__img"]} src={cookbookPicture} alt="cookbook-image"/>
                <div className={styles["login-banner__container1__testbar"]}>TESTBAR</div>
            </div>

            <div className={styles["login-banner__container2"]}>
                <img className={styles["login-banner__container2__img"]} src={hittPicture} alt="hitt-image"/>
                <div className={styles["login-banner__container2__podcast"]}>
                    <p>TODAY ON THE F.C. PODCAST</p>
                </div>
            </div>
        </div>
    );
}

export default LoginBanner;