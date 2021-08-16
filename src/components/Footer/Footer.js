import React from "react";
import styles from "./Footer.module.css";
import { useForm } from "react-hook-form";

function Footer() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

    return (
        <div className={styles["footer"]}>
            <h3 className={styles["footer__message"]} >KEEP UP-TO-DATE,<br/>GET OUR NEWSLETTER!</h3>

            <div className={styles["footer__form-container"]} >
                <form className={styles["footer__form-container__form"]} onSubmit={handleSubmit(onSubmit)}>
                    {/*<label className={styles["footer__form-container__form__label"]}>*/}
                        <input
                            className={styles["footer__form-container__form__label__input"]}
                            type="mail"
                            name="mail"
                            placeholder="YOUR MAIL:"
                            {...register("mail", {
                                required: {
                                    value: true,
                                    pattern: !/\S+@\S+\.\S+/,
                                    message: "This field can't be empty, also include '@'"
                                }, validate: value => value.includes('@')
                            })}
                        />
                        {errors.mail && <p className={styles["footer__form-container__form__label__error1"]}>{errors.mail.message}</p>}
                    {/*</label>*/}
                    <button
                        type="submit"
                        className={styles["footer__form-container__form__link"]}>
                        JOIN
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Footer;