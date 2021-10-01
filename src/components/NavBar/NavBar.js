import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/Login(icon).png";

function NavBar( {message}) {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const [invalidInput, toggleInvalidInput] = useState(false);
    const { login } = useContext(AuthContext);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signin', {
                username: data.username,
                password: data.password,
            })
            console.log(result.data);
            localStorage.setItem('token', result.data.accessToken);
            localStorage.setItem('id', result.data.id);
            login(result.data);
        } catch (e) {
            console.error(e);
            toggleInvalidInput(true);
        }
    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
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
            <nav className="navbar">
                <div className="navbar__fc-logo-container">
                    <Link to="/">
                        <img className="navbar__fc-logo" src={logoPicture} alt="Fitness Classes Logo" />
                    </Link>
                </div>
                <div className="navbar__container">
                    <div className="navbar__menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "navbar__menu active" : "navbar__menu"}>
                        <li className="navbar__item">
                            <Link to='/categories' className="navbar__links" onClick={closeMobileMenu}>
                                CATEGORIES
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link
                                to='/about'
                                className="navbar__links"
                                onClick={closeMobileMenu}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link
                                to='/newsletter'
                                className="navbar__links"
                                onClick={closeMobileMenu}
                            >
                                NEWSLETTER
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link
                                to='/reviews'
                                className="navbar__links"
                                onClick={closeMobileMenu}
                            >
                                REVIEWS
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar__login">
                    <img className="navbar__login__icon" src={loginIcon} alt="login-icon"/>
                    <form className="navbar__login__form-container" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="navbar__login__form-container__input-mail"
                            type="mail"
                            name="username"
                            id="username"
                            placeholder="USERNAME"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: "THIS FIELD CAN'T BE EMPTY, ALSO INCLUDE '@'"
                                }, validate: value => value.includes('@'),
                            })}
                        />
                        {errors.username && <p className="navbar__login__form-container__error1">{errors.username.message}</p>}

                        <input
                            className="navbar__login__form-container__input-password"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="PASSWORD"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "THIS FIELD CAN'T BE EMPTY"
                                }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        {invalidInput && <p>INVALID INPUT</p>}

                        <button
                            type="submit"
                            className="navbar__login__form-container__button"
                        >
                            {message}
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default NavBar;