import React from "react";
import styles from "./LoginContent.module.css";
import exclamationPicture from "../../assets/Exclamation(image).png";
import {Link} from "react-router-dom";

function LoginContent() {
    return (
        <div className={styles["login-content"]}>
            <div className={styles["login-content__icon-container"]}>
                <img className={styles["login-content__icon-container-exclamation"]} src={exclamationPicture} alt="exclamation-image"/>
            </div>

            <div className={styles["login-content__line-container"]}>
                <div className={styles["login-content__line-container__line1"]}>WELCOME BACK USER</div>

                <div className={styles["login-content__line-container__line2"]}>YOU CAN NOW BROWSE, BOOK AND WATCH CLASSES</div>
                    <Link
                        to="/categories"
                        className={styles["login-content__line-container__line2__link1"]}>
                        <p className={styles["login-content__line-container__line2__link1__message1"]}>CATEGORIES</p>
                    </Link>
                <div className={styles["login-content__line-container__line3"]}>HAVE YOUR CHECKED OUT THE F.C. NEWSLETTER?</div>

                <Link
                    to="/newsletter"
                    className={styles["login-content__line-container__link2"]}
                    >
                    <p className={styles["login-content__line-container__link2__message2"]}>READ NOW</p>
                </Link>
            </div>
        </div>
    );
}

export default LoginContent;