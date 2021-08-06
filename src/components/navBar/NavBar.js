import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/login.svg"

function NavBar() {
    return (
        <nav className={styles["navbar"]}>

            <Link to="/">
                <img className={styles["navbar__logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>
            <ul className={styles["navbar__menu"]}>

                <li>
                    <Link
                        to="/categories"
                        className={styles["navbar__link"]}>
                        Categories
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className={styles["navbar__link"]}>
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to="/newsletter"
                        className={styles["navbar__link"]}>
                        Newsletter
                    </Link>
                </li>

                <li>
                    <Link
                        to="/review"
                        className={styles["navbar__link"]}>
                        Review
                    </Link>
                </li>
            </ul>

            <div className={styles["navbar__login"]}>
            <img className={styles["navbar__login-icon"]} src={loginIcon} alt="login-icon"/>
                <Link
                    to="/login"
                    className={styles["navbar__login-link"]}>
                    Login
                </Link>
            </div>

        </nav>
    );
}

export default NavBar;