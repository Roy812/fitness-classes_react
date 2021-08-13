import React from "react";
import styles from "./Settings.module.css";
import lockPicture from "../../assets/Lock(red).png"
import photoPicture from "../../assets/Photo(red).png";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";

function SettingsContent() {
    return(
      <div className={styles["settings-content"]}>
        <div className={styles["settings-content__icons"]}>
            <img className={styles["settings-content__icons-lock"]} src={lockPicture} alt="lock-image"/>
            <img className={styles["settings-content__icons-photo"]} src={photoPicture} alt="photo-image"/>
            <img className={styles["settings-content__icons-newsletter"]} src={newsletterPicture} alt="newsletter-image"/>
            <img className={styles["settings-content__icons-delete"]} src={deletePicture} alt="delete-image"/>
        </div>
        <div className={styles["settings-content__container"]}>
            <div className={styles["settings-content__one"]}>
                <p>CHANGE YOUR PASSWORD</p>
                <label className={styles["settings-content__one-label"]}>
                    <input
                        className={styles["settings-content__one-input"]}
                        type="text"
                        placeholder="TYPE YOUR NEW PASSWORD"
                    />
                    <button
                        className={styles["settings-content__one-button"]} type="submit"
                        >
                        SUBMIT
                    </button>
                </label>
            </div>
            <div className={styles["settings-content__two"]}>
                <p>CHANGE YOUR PROFILE PICTURE</p>
                <p className={styles["settings-content__two-jpgmessage"]}>PLEASE SELECT A JPG FILE</p>
                <button
                    className={styles["settings-content__two-button"]} type="submit"
                    >
                    SELECT
                </button>
                <p
                    className={styles["settings-content__two-jpgconfirm"]}
                    >
                    IF YOU ARE A 100% SURE THIS IS YOUR PERFECT
                    PROFILE PICTURE, PRESS CONFIRM
                </p>
                <button
                    className={styles["settings-content__two-button"]} type="submit"
                    >
                    CONFIRM
                </button>
            </div>
            <div className={styles["settings-content__three"]}>
                <p>SEND ME THE F.C. NEWSLETTER</p>
                <button
                    className={styles["settings-content__three-button"]} type="submit"
                    >
                    YES
                </button>
            </div>
            <div className={styles["settings-content__four"]}>
                <p>DELETE ACCOUNT</p>
                <p
                    className={styles["settings-content__four-message"]}
                    >IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST SEND A REQUEST TO ADMIN
                </p>
                <button
                    className={styles["settings-content__four-button"]} type="submit"
                    >
                    DELETE MY ACCOUNT
                </button>
            </div>
        </div>
      </div>
    );
}

export default SettingsContent;