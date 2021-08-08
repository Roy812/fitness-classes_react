import React from "react";
import styles from "./RegisterFooter.module.css";


function RegisterFooter( {message} ) {
    return(
        <div className={styles["register-footer"]}>
            <h3 className={styles["register-footer__message"]} >{message}</h3>
        </div>
    )
}

export default RegisterFooter;