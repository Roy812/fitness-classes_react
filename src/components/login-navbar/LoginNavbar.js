import React from "react";
import styles from "./LoginNavbar.module.css";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import userIcon from "../../assets/User(Icon).png";
import {Link} from "react-router-dom";

function LoginNavbar() {
    return(
        <nav className={styles["login-navbar"]}>
            <Link to="/">
                <img className={styles["login-navbar__logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>
            <ul className={styles["login-navbar__menu"]}>
                <li>
                    <Link
                        to="/myclasses"
                        className={styles["login-navbar__link"]}>
                        MY CLASSES
                    </Link>
                </li>
                <li>
                    <Link
                        to="/categories"
                        className={styles["login-navbar__link"]}>
                        CATEGORIES
                    </Link>
                </li>
                <li>
                    <Link
                        to="/newsletter"
                        className={styles["login-navbar__link"]}>
                        NEWSLETTER
                    </Link>
                </li>
                <li>
                    <Link
                        to="/reviews"
                        className={styles["login-navbar__link"]}>
                        REVIEWS
                    </Link>
                </li>
            </ul>
            <div className={styles["login-navbar__login"]}>
                <img src={userIcon} alt="userIcon-image"/>
                <p>YOU ARE CURRENTLY LOGGED IN AS USER</p>
            </div>
        </nav>
    );
}

export default LoginNavbar;