import React from "react";
import styles from "./RegisterContent.module.css";
import RegisterBanner from "../registerBanner/RegisterBanner";

function RegisterContent() {
    return (
        <div className={styles["register-content"]}>

            <RegisterBanner />

            <div className={styles["register-content__container"]}>
                <div className={styles["register-content__container__one"]}>
                    <p>STEP 1:</p>
                    <p>ENTER YOUR MAILADDRESS</p>
                    <input
                        className={styles["register-content__container__one__input"]}
                        type="text"
                        placeholder="TYPE YOUR MAILADDRESS"/>
                </div>

                <div className={styles["register-content__container__two"]}>
                    <p>STEP 2:</p>
                    <p>CREATE A PASSWORD</p>
                    <input
                        className={styles["register-content__container__two__input"]}
                        type="text"
                        placeholder="TYPE YOUR PASSWORD" />
                </div>

                <div className={styles["register-content__container__three"]}>
                    <p>STEP 3:</p>
                    <p>TO COMPLETE YOUR REGISTRATION, PRESS CONFIRM</p>
                    <button className={styles["register-content__container__three__button"]} type="submit">
                       CONFIRM
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterContent;