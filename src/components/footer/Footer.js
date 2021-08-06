import React from "react";
import styles from "./Footer.module.css";
import {useForm} from "react-hook-form";

function Footer( {message} ) {

    const {register, handleSubmit} = useForm()

    function handleFooterSubmit(data) {
        console.log(data);
    }

    return (
        <div className={styles["footer_container"]}>
            <h3 className={styles["message"]} >{message}</h3>
            <div className={styles["form_container"]} >
                <form onSubmit={handleSubmit(handleFooterSubmit)} >
                    <label>
                        Your mail:
                        <input {...register("test")} type="text" name="mail"/>
                    </label>
                    <button type="submit"
                    >Join
                    </button>
                </form>
        </div>
        </div>
    )
}

export default Footer;