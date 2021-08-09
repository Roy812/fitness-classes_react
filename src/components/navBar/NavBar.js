import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
//NB: Alt = useHistory -- destructure and use the .push method on a event handler -- place onClick event listener.
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/Login(icon).png"

function NavBar( {message} ) {

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
                        CATEGORIES
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className={styles["navbar__link"]}>
                        ABOUT
                    </Link>
                </li>

                <li>
                    <Link
                        to="/newsletter"
                        className={styles["navbar__link"]}>
                        NEWSLETTER
                    </Link>
                </li>

                <li>
                    <Link
                        to="/reviews"
                        className={styles["navbar__link"]}>
                        REVIEWS
                    </Link>
                </li>
            </ul>

            <div className={styles["navbar__login"]}>
                <img className={styles["navbar__login-icon"]} src={loginIcon} alt="login-icon"/>
                <div className={styles["navbar__login-input__container"]}>
                    <label>
                        <input
                        className={styles["navbar__login-input"]}
                        type="text"
                        placeholder="MAIL"
                        />
                    </label>
                    <label>
                        <input
                        className={styles["navbar__login-input"]}
                        type="text"
                        placeholder="PASSWORD"
                        />
                    </label>
                </div>
                <Link
                    to="/login"
                    className={styles["navbar__login-link"]}>
                    {message}
                </Link>
            </div>

        </nav>
    );
}

export default NavBar;