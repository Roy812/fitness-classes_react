import React from "react";
import styles from "./SettingsHeader.module.css";
import {Link} from "react-router-dom";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import userIcon from "../../assets/User(Icon).png";

function SettingsHeader() {
    return(
        <nav className={styles["settings-header"]}>
            <Link to="/">
                <img className={styles["settings-header__logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>
            <h1 className={styles["settings-header__title"]}>SETTINGS</h1>
            <div className={styles["settings-header__user"]}>
                <img className={styles["settings-header__user-icon"]} src={userIcon} alt="login-icon"/>
                <h1
                    className={styles["settings-header__user-message"]}>
                    YOU ARE CURRENTLY LOGGED IN AS USER
                </h1>
            </div>
        </nav>
    );
}

export default SettingsHeader;