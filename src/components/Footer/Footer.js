import React from "react";
import styles from "./Footer.module.css";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

function Footer() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

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