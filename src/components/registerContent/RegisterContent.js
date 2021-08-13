import React from "react";
import styles from "./RegisterContent.module.css";
import RegisterBanner from "../registerBanner/RegisterBanner";

function RegisterContent() {
    return(
        <div className={styles["register-content"]}>

            <RegisterBanner />

            <div className={styles["register-content__container"]}>
                <div className={styles["register-content__one"]}>
                    <p>STEP 1:</p>
                    <p>ENTER YOUR MAILADDRESS</p>
                    <label>
                        <input
                            className={styles["register-content__one__input"]}
                            type="text"
                            placeholder="TYPE YOUR MAILADDRESS" />
                    </label>
                </div>
                <div className={styles["register-content__two"]}>
                    <p>STEP 2:</p>
                    <p>CREATE A PASSWORD</p>
                    <label>
                        <input
                            className={styles["register-content__two__input"]}
                            type="text"
                            placeholder="TYPE YOUR PASSWORD" />
                    </label>
                </div>
                <div className={styles["register-content__three"]}>
                    <p>STEP 3:</p>
                    <p>TO COMPLETE YOUR REGISTRATION, PRESS CONFIRM</p>
                    <label>
                        <button className={styles["register-content__three-button"]} type="submit"
                        >
                        CONFIRM
                        </button>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default RegisterContent;