import React from "react";
import { useForm } from 'react-hook-form';
import styles from "./Login.module.css";
import loginpicture from "../../assets/LogIn(gold).svg";

function Login() {

    const {register, handleSubmit} = useForm();
    function onSubmit(data) {
        console.log(data)
    }

    return (
        <>
            <div className={styles["login__container"]} >
                <img className={styles["login__container__icon"]} src={loginpicture} alt="login_icon"/>
                <div className={styles["login__container__text-container"]} >
                    <p>Already have an account?</p>
                    <p>Try to login below:</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="test" className={styles["form_container"]}>
                        <input {...register("mail", {required: true})} className={styles["input"]} type="text"
                               name="login_mail" placeholder="mail"
                               id="test"
                        />
                    </label>
                    <label htmlFor="test_2" className={styles["form_container"]}>
                        <input {...register("password", {required: true})} className={styles["input"]} type="text"
                               name="login_password" placeholder="password"
                               id="test_2"
                        />
                    </label>
                    <button className={styles["button_login"]} type="submit" >
                        Login
                    </button>
                </form>


            </div>
        </>
    )
}

export default Login;