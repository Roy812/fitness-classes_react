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
                <img className={styles["navbar__link__logo"]} src={logoPicture} alt="Fitness Classes Logo" />
            </Link>

            <ul className={styles["navbar__menu"]}>
                <li>
                    <Link
                        to="/categories"
                        className={styles["navbar__menu__item__link"]}>
                        CATEGORIES
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className={styles["navbar__menu__item__link"]}>
                        ABOUT
                    </Link>
                </li>

                <li>
                    <Link
                        to="/newsletter"
                        className={styles["navbar__menu__item__link"]}>
                        NEWSLETTER
                    </Link>
                </li>

                <li>
                    <Link
                        to="/reviews"
                        className={styles["navbar__menu__item__link"]}>
                        REVIEWS
                    </Link>
                </li>
            </ul>

            <div className={styles["navbar__login"]}>
                <img className={styles["navbar__login__icon"]} src={loginIcon} alt="login-icon"/>
                <div className={styles["navbar__login__input-container"]}>
                    <input
                        className={styles["navbar__login__input-container__mail"]}
                        type="text"
                        placeholder="MAIL"/>
                    <input
                        className={styles["navbar__login__input-container__password"]}
                        type="password"
                        placeholder="PASSWORD"/>
                </div>

                <Link
                    to="/login"
                    className={styles["navbar__login__link"]}>
                    {message}
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;