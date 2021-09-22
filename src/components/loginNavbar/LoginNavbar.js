import React, { useContext, useEffect, useState } from "react";
import styles from "./LoginNavbar.module.css";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import userIcon from "../../assets/User(Icon).png";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


function LoginNavbar() {

    const { user } = useContext(AuthContext);
    const [userPicture, setUserPicture] = useState();
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    useEffect(() => {
        async function loadProfile() {
            try {
                const result = await axios.get(`http://localhost:8080/users/picture/id/${userId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                    , responseType: "blob",
                });
                console.log(result);
                setUserPicture(URL.createObjectURL(result.data));
                // var decodedStringAtoB = atob(result.data);
                // console.log(decodedStringAtoB);
            } catch (e) {
                console.error(e);
            }
        }
        loadProfile();
    }, [])



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
                <img className={styles["login-navbar__login__profile-picture"]} src={userPicture} alt="userIcon-image"/>
                <p className={styles["login-navbar__login__message"]}> YOU ARE CURRENTLY LOGGED IN AS: {user && user.username}</p>
            </div>
        </nav>
    );
}

export default LoginNavbar;