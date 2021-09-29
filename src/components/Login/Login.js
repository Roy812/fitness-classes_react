import React from "react";
import styles from "./Login.module.scss";
import { useForm } from 'react-hook-form';
import loginpicture from "../../assets/LogIn(gold).svg";


function Login() {

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        console.log(data)
    }

    return (
         <div className={styles["login__container"]} >
             <img className={styles["login__container__icon"]} src={loginpicture} alt="login_icon"/>

             <div className={styles["login__container__text-container"]} >
                 <p1>Already have an account?</p1>
                 <p2>Try to login below:</p2>
             </div>

             <form onSubmit={handleSubmit(onSubmit)}>
                 <input {...register("mail", {required: true})} className={styles["input"]} type="text"
                        name="login_mail"
                        placeholder="mail"
                        id="test"
                 />
                 <input {...register("password", {required: true})} className={styles["input"]} type="text"
                        name="login_password"
                        placeholder="password"
                        id="test_2"
                 />

                 <button className={styles["login__container__form-button"]} type="submit">
                     Login
                 </button>
             </form>
         </div>
    )
}

export default Login;