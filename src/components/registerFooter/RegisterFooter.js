import React from "react";
import styles from "./RegisterFooter.module.css";
import {Link} from "react-router-dom";


function RegisterFooter( {message} ) {
    return (
        <div className={styles["register-footer"]}>
            {/*<h3 className={styles["register-footer__message"]} >{message}</h3>*/}
            <Link
                className={styles["register-footer__message"]}
                to="/register">
                {message}
            </Link>
        </div>
    )
}

export default RegisterFooter;