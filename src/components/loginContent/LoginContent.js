import React from "react";
import styles from "./LoginContent.module.scss";
import { Link } from "react-router-dom";
import exclamationPicture from "../../assets/Exclamation(image).png";


function LoginContent() {

    return (
        <div className={styles["login-content"]}>
            <div className={styles["login-content__container1"]}>
                <img className={styles["login-content__container1__icon"]} src={exclamationPicture} alt="exclamation-image"/>
            </div>

            <div className={styles["login-content__container2"]}>
                <div className={styles["login-content__container2__line1"]}>WELCOME BACK USER</div>
                <div className={styles["login-content__container2__line2"]}>YOU CAN NOW BROWSE, BOOK AND WATCH CLASSES</div>

                <Link
                    to="/categories"
                    className={styles["login-content__container2__link1"]}>
                    <p className={styles["login-content__container2__link1-name"]}>CATEGORIES</p>
                </Link>

                <div className={styles["login-content__container2__line3"]}>HAVE YOUR CHECKED OUT THE F.C. NEWSLETTER?</div>

                <Link
                    to="/newsletter"
                    className={styles["login-content__container2__link2"]}
                    >
                    <p className={styles["login-content__container2__link2-name"]}>READ NOW</p>
                </Link>
            </div>
        </div>
    );
}

export default LoginContent;