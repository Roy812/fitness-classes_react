import React from "react";
import styles from "./NavBar.module.css";
import { Link, useHistory } from "react-router-dom";
//NB: Alt = useHistory -- destructure and use the .push method on a event handler -- place onClick event listener.
import logoPicture from "../../assets/Logo F.C. (1).svg";
import loginIcon from "../../assets/Login(icon).png"
import { useForm } from "react-hook-form";

function NavBar( {message} ) {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
        history.push("/login");
    }

    const history = useHistory();

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
                        name="mail"
                        id="mail"
                        placeholder="Mail Here"
                        {...register("mail", {
                            required: {
                                value: true,
                                message: "THIS FIELD CAN'T BE EMPTY, ALSO INCLUDE '@'"
                            }, validate: value => value.includes('@'),
                        })}
                    />
                    {errors.mail && <p className={styles["navbar__login__form-container__error1"]}>{errors.mail.message}</p>}

                    <input
                        className={styles["navbar__login__form-container__input-password"]}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password Here"
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
                        className={styles["navbar__login__form-container__button"]}>
                        {message}
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default NavBar;