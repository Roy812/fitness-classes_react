import React from "react";
import styles from "./Footer.module.css";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className={styles["footer"]}>
            <h3 className={styles["footer__message"]} >KEEP UP-TO-DATE,<br/>GET OUR NEWSLETTER!</h3>
            <div className={styles["footer__container"]} >
                <form className={styles["footer__form"]}>
                    <label className={styles["footer__label"]}>
                        <input className={styles["footer__label__input"]} type="text" name="mail" placeholder="YOUR MAIL:"/>
                    </label>
                    <Link
                        to="/newsletter"
                        className={styles["footer__form__link"]}
                        >
                        JOIN
                    </Link>

                </form>
        </div>
        </div>
    )
}

export default Footer;