import React from "react";
import styles from "./RegisterContent.module.css";
import RegisterBanner from "../registerBanner/RegisterBanner";
import { useForm } from "react-hook-form";

function RegisterContent() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        //e.preventDefault();
        console.log(data);
    }

    return (
        <div className={styles["register-content"]}>

            <RegisterBanner />

            <div className={styles["register-content__container"]}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles["register-content__container__one"]}>
                        <p>STEP 1:</p>
                        <p>ENTER YOUR MAILADDRESS</p>

                        <input
                            className={styles["register-content__container__one__input"]}
                            type="mail"
                            placeholder="TYPE YOUR MAILADDRESS"
                            name="mail"
                            id="mail"
                            {...register("mail", {
                                required: {
                                    value: true,
                                    message: "THIS FIELD CAN'T BE EMPTY, ALSO INCLUDE '@'"
                                }, validate: value => value.includes('@')
                            })}
                        />
                        {errors.mail && <p className={styles["register-content__container__one__input__error1"]}>{errors.mail.message}</p>}
                    </div>

                    <div className={styles["register-content__container__two"]}>
                        <p>STEP 2:</p>
                        <p>CREATE A PASSWORD</p>

                        <input
                            className={styles["register-content__container__two__input"]}
                            type="text"
                            placeholder="TYPE YOUR PASSWORD"
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
                        {errors.password && <p className={styles["register-content__container__one__input__error2"]}>{errors.password.message}</p>}
                    </div>

                    <div className={styles["register-content__container__three"]}>
                        <p>STEP 3:</p>
                        <p>TO COMPLETE YOUR REGISTRATION, PRESS CONFIRM</p>
                        <button className={styles["register-content__container__three__button"]} type="submit">
                            CONFIRM
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterContent;

//