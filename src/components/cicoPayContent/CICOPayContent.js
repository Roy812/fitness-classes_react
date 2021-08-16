import React from "react";
import styles from "./CICOPayContent.module.css";
import { useForm } from "react-hook-form";

function CICOPayContent() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

    return (
        <form className={styles["CICO-pay-content"]} onSubmit={handleSubmit(onSubmit)}>
            <h3 className={styles["CICO-pay-content__title"]}>YOU ARE ABOUT TO PAY ONE<br/>
                COIN CREDIT TO GRANT<br/>
                ACCESS TO THIS CLASS
            </h3>

            <h3 className={styles["CICO-pay-content__enter-mail"]}>
                ENTER YOUR MAIL ADDRESS
            </h3>

            <input
                className={styles["CICO-pay-content__input-mail"]}
                type="mail"
                placeholder="MAIL ADDRESS HERE"
                name="mail"
                id="mail"
                {...register("mail", {
                    required: {
                        value: true,
                        message: "THIS FIELD CAN'T BE EMPTY, ALSO INCLUDE '@'"
                    }, validate: value => value.includes('@')
                })}
            />
            {errors.mail && <p className={styles["CICO-pay-content__error1"]}>{errors.mail.message}</p>}

            <h3 className={styles["CICO-pay-content__enter-password"]}>
                ENTER YOUR PASSWORD
            </h3>

            <input
                className={styles["CICO-pay-content__input-password"]}
                type="text"
                placeholder="PASSWORD HERE"
                name="password"
                id="password"
                {...register("password", {
                    required: {
                        value: true,
                        message: "THIS FIELD CAN'T BE EMPTY"
                    },
                    minLength: {
                        value: 6,
                        message: "USE AT LEAST 6 CHARACTERS"
                    }
                })}
            />
            {errors.password && <p className={styles["CICO-pay-content__error2"]}>{errors.password.message}</p>}

            <h3 className={styles["CICO-pay-content__confirm"]}>
                TO COMPLETE YOUR PAYMENT,<br/>
                PRESS CONFIRM
            </h3>

            <button
                className={styles["CICO-pay-content__confirm-button"]}
                type="submit">
                CONFIRM
            </button>
        </form>
    );
}

export default CICOPayContent;