import React, { useContext } from "react";
import styles from "./SettingsHeader.module.scss";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import userIcon from "../../assets/User(Icon).png";


function SettingsHeader() {

    const { user } = useContext(AuthContext);

    return (
        <nav className={styles["settings-header"]}>
            <Link to="/">
                <img className={styles["settings-header__fc-logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>

            <h1>SETTINGS</h1>

            <div className={styles["settings-header__user"]}>
                <img className={styles["settings-header__user__icon"]} src={userIcon} alt="login-icon"/>
                <h1>YOU ARE CURRENTLY LOGGED IN AS: {user && user.username}</h1>
            </div>
        </nav>
    );
}

export default SettingsHeader;