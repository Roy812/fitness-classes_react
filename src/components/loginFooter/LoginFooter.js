import React from "react";
import styles from "./LoginFooter.module.css";
import {Link} from "react-router-dom";

function LoginFooter() {
    return (
            <div className={styles["login__footer"]}>
                <Link
                    className={styles["login__footer__link1"]}
                    to="/settings">
                    GO TO SETTINGS
                </Link>

                <Link
                    className={styles["login__footer__link2"]}
                    to="/">
                    LOG OUT
                </Link>
            </div>
    );
}

export default LoginFooter;