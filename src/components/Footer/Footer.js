import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";


function Footer() {

    return (
        <div className={styles["footer"]}>
            <Link
                className={styles["footer__link"]}
                to="/newsletter"
            >
                KEEP UP-TO-DATE,<br/>GET OUR NEWSLETTER!
            </Link>
        </div>
    )
}

export default Footer;