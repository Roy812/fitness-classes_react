import React from "react";
import styles from "./Button.module.css";
import checkPicture from "../../assets/check.svg";
import {Link} from "react-router-dom";

function Button() {
    return (
        <div className={styles["button"]}>
            <div className={styles["button__container"]}>
                <p>MADE UP YOUR MIND?</p>
                <label className={styles["button__container__label"]}>
                    <Link
                        to="/register"
                        className={styles["button__container__link"]}>
                        SIGN ME UP
                    </Link>
                </label>
            </div>
            <img className={styles["button__check"]} src={checkPicture} alt="check-image"/>
        </div>
    )
}

export default Button;