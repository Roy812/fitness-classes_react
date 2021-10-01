import React, { useContext } from "react";
import styles from "./LoginFooter.module.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


function LoginFooter() {

    const { user , logout } = useContext(AuthContext);

     function onSubmit() {
       logout();
    }

    return (
            <div className={styles["login__footer"]}>
                <Link
                    className={styles["login__footer__link"]}
                    to="/settings"
                >
                    GO TO SETTINGS
                </Link>

                {user !== null && <button
                    className={styles["login__footer__button"]}
                    type="button"
                    onClick={onSubmit}
                >
                    LOG OUT
                </button>}
            </div>
    );
}

export default LoginFooter;