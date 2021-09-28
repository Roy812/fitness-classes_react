import React from "react";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import checkPicture from "../../assets/check.svg";

function Button() {

    return (
        <div className={styles["button"]}>
            <div className={styles["button__container"]}>
                <div>MADE UP YOUR MIND?</div>
                <label className={styles["button__label"]}>
                    <Link
                        to="/register"
                        className={styles["button__label__link"]}>
                        SIGN ME UP
                    </Link>
                </label>
            </div>
            <img className={styles["button__check"]} src={checkPicture} alt="check-image"/>
        </div>
    );
}

export default Button;