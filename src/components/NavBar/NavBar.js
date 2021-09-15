import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { Link, useHistory } from "react-router-dom";
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/Login(icon).png"
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

function NavBar( {message} ) {

    // const history = useHistory();
    // const { user, loginFunction } = useContext(AuthContext);
    const alles = useContext(AuthContext);
    console.log(alles);
    const {register, handleSubmit, formState: {errors}} = useForm();

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
            alles.login(result.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

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
                <form className={styles["navbar__login__form-container"]} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className={styles["navbar__login__form-container__input-mail"]}
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
                    {errors.username && <p className={styles["navbar__login__form-container__error1"]}>{errors.username.message}</p>}

                    <input
                        className={styles["navbar__login__form-container__input-password"]}
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
                    {errors.password && <p className={styles["navbar__login__form-container__error2"]}>{errors.password.message}</p>}

                    <button
                        type="submit"
                        className={styles["navbar__login__form-container__button"]}
                    >
                        {message}
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;