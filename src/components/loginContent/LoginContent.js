import React from "react";
import styles from "./LoginContent.module.css";
import cupPicture from "../../assets/Cup(final).svg";
import lockPicture from "../../assets/Lock(final).svg";
import exclamationPicture from "../../assets/Exclamation(image).png";
import {Link} from "react-router-dom";

function LoginContent() {
    return(
        <div className={styles["login-content"]}>
            <div className={styles["login-content__icon-container"]}>
                <img className={styles["login-content__icon-container-cup"]} src={cupPicture} alt="cup-image"/>
                <img className={styles["login-content__icon-container-lock"]} src={lockPicture} alt="lock-image"/>
                <img className={styles["login-content__icon-container-exclamation"]} src={exclamationPicture} alt="exclamation-image"/>
            </div>

            <div className={styles["login-content__line-container"]}>
                <div>FITNESS CLASSES IS THE BEST WAY TO LEARN<br/>EXACTLY WHAT YOUR LOOKING FOR</div>

                <div className={styles["login-content__line-container__line2"]}>RECEIVE EXCLUSIVE MEMBERSHIP OFFERS</div>
                    <Link
                        to="/myclasses"
                        className={styles["login-content__line-container__line2__link1"]}>
                        <p className={styles["login-content__line-container__line2__link1__message1"]}>LEARN MORE</p>
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