import React from "react";
import styles from "./RegisterFooter.module.scss";
import { Link } from "react-router-dom";


function RegisterFooter({ message }) {

    return (
        <div className={styles["register-footer"]}>
            <Link
                className={styles["register-footer__message"]}
                to="/register">
                {message}
            </Link>
        </div>
    )
}

export default RegisterFooter;