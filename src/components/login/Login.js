import React from "react";
import styles from "./Login.module.css";
import loginpicture from "../../assets/LogIn(gold).svg";

function Login() {
    return (
        <>
            <div className={styles["login_direction_container"]} >
                <img className={styles["login_icon"]} src={loginpicture} alt="login_image"/>
                <div className={styles["text_container"]} >
                    <p>Already have an account?</p>
                    <p>Try to login below:</p>
                </div>
                <form>
                    <label className={styles["form_container"]} >
                        PH
                        <input type="text" name="login_mail"/>
                    </label>
                    <label className={styles["form_container"]} >
                        PH
                        <input type="text" name="login_password"/>
                    </label>
                </form>
                <button className={styles["button_login"]} type="button" >
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;