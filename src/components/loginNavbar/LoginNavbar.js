import React, { useContext, useEffect, useState } from "react";
import "./LoginNavbar.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import logoPicture from "../../assets/Logo F.C. (1).svg";


function LoginNavbar() {

    const [userPicture, setUserPicture] = useState();
    const { user } = useContext(AuthContext);
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
            } catch (e) {
                console.error(e);
            }
        }
        loadProfile();
    }, [])

    const showButton = () => {
        if (window.innerWidth <= 1060) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="login-navbar">
                <div className="login-navbar__fc-logo-container">
                    <Link to="/">
                        <img className="login-navbar__fc-logo" src={logoPicture} alt="Fitness Classes Logo" />
                    </Link>
                </div>
                <div className="login-navbar__container">
                    <div className="login-navbar__menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "login-navbar__menu active" : "login-navbar__menu"}>
                        <li className="login-navbar__item">
                            <Link to='/myclasses'
                                  className="login-navbar__links"
                                  onClick={closeMobileMenu}>
                                MYCLASSES
                            </Link>
                        </li>
                        <li className="login-navbar__item">
                            <Link
                                to='/categories'
                                className="login-navbar__links"
                                onClick={closeMobileMenu}
                            >
                                CATEGORIES
                            </Link>
                        </li>
                        <li className="login-navbar__item">
                            <Link
                                to='/newsletter'
                                className="login-navbar__links"
                                onClick={closeMobileMenu}
                            >
                                NEWSLETTER
                            </Link>
                        </li>
                        <li className="login-navbar__item">
                            <Link
                                to='/reviews'
                                className="login-navbar__links"
                                onClick={closeMobileMenu}
                            >
                                REVIEWS
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="login-navbar__login">
                    <img className="login-navbar__login__profile-picture" src={userPicture} alt="userIcon-image"/>
                    <p> YOU ARE CURRENTLY LOGGED IN AS: {user && user.username}</p>
                </div>

            </nav>
        </>
    );
}

export default LoginNavbar;