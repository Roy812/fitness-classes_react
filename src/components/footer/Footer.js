import React from "react";
import styles from "./Footer.module.css";

function Footer( {message} ) {
    return (
        <div className={styles["footer_container"]}>
            <h3 className={styles["message"]} >{message}</h3>
            <div className={styles["form_container"]} >
                <form>
                    <label>
                        Your mail:
                        <input type="text" name="mail"/>
                    </label>
                </form>
            <button type="button"
            >Join
            </button>
        </div>

        </div>
    )
}

export default Footer;