import React, {useContext} from "react";
import styles from "./LoginNavbar.module.css";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import userIcon from "../../assets/User(Icon).png";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import jwt_decode from "jwt-decode";
import axios from "axios";

function LoginNavbar() {

    const { user } = useContext(AuthContext);
    // console.log(user.id);
    // const nameOfUser = user.username;
    // const profilePictureOfUser = user.;

    async function loadUser() {
        const userId = localStorage.getItem('id');
        try {
            const result = await axios.get(`http://localhost:8080/users/id/${userId}`, {

            })
            console.log(result);
        } catch (e) {
            console.error(e);
        }
    }

    const resultLoadUser = loadUser();
    // const picture = resultLoadUser.profilePicture;

    return (
        <nav className={styles["login-navbar"]}>
            <Link to="/">
                <img className={styles["login-navbar__link__logo"]} src={logoPicture} alt="F.C.-image" />
            </Link>

            <ul className={styles["login-navbar__menu"]}>
                <li>
                    <Link
                        to="/myclasses"
                        className={styles["login-navbar__item__link"]}>
                        MY CLASSES
                    </Link>
                </li>

                <li>
                    <Link
                        to="/categories"
                        className={styles["login-navbar__item__link"]}>
                        CATEGORIES
                    </Link>
                </li>

                <li>
                    <Link
                        to="/newsletter"
                        className={styles["login-navbar__item__link"]}>
                        NEWSLETTER
                    </Link>
                </li>

                <li>
                    <Link
                        to="/reviews"
                        className={styles["login-navbar__item__link"]}>
                        REVIEWS
                    </Link>
                </li>
            </ul>

            <div className={styles["login-navbar__login"]}>
                <img src={userIcon} alt="userIcon-image"/>
                <p>YOU ARE CURRENTLY LOGGED IN AS: {user && user.username}</p>
            </div>
        </nav>
    );
}

export default LoginNavbar;