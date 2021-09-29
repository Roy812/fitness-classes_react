import React from "react";
import styles from "./RegisterHeader.module.scss";
import { Link } from "react-router-dom";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/Login(icon).png";


function RegisterHeader({ title, message } ) {

    return (
        <nav className={styles["header"]}>
            <Link to="/">
                <img className={styles["header__fc-logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>

            <h1 className={styles["header__title"]}>{title}</h1>

            <div className={styles["header__login"]}>
                <img className={styles["header__login__icon"]} src={loginIcon} alt="login-icon"/>
                <Link
                    to="/"
                    className={styles["header__login__link"]}>
                    {message}
                </Link>
            </div>
        </nav>
    )
}

export default RegisterHeader;