import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import styles from "./LoginFooter.module.css";
import {Link, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function LoginFooter() {

    const { logout } = useContext(AuthContext);
    const { handleSubmit } = useForm();
    const history = useHistory();

    async function onSubmit() {
        try {
            logout();
            history.push('/');
        } catch (e) {
            console.error(e)
        }
    }

    return (
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles["login__footer"]}>
                <Link
                    className={styles["login__footer__link1"]}
                    to="/settings"
                >
                    GO TO SETTINGS
                </Link>

                <button
                    className={styles["login__footer__button"]}
                    type="submit"
                >
                    LOG OUT
                </button>
            </form>
    );
}

export default LoginFooter;