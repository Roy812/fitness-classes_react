import React, {useState} from "react";
import styles from "./RegisterContent.module.css";
import RegisterBanner from "../registerBanner/RegisterBanner";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";

function RegisterContent() {

    const history = useHistory();
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/singup', {
                username: data.email,
                email: data.email,
                password: data.password,
                role: "USER"
            })
            console.log(result);
            toggleRegisterSuccess(true);
            history.push('/login');
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["register-content"]}>
                <RegisterBanner />

                <div className={styles["register-content2"]}>
                    <div className={styles["register-content__container"]}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles["register-content__container__one"]}>
                                <p>STEP 1:</p>
                                <p>ENTER YOUR MAILADDRESS</p>

                                <input
                                    className={styles["register-content__container__one__input"]}
                                    type="mail"
                                    placeholder="TYPE YOUR MAILADDRESS"
                                    name="email"
                                    id="email"
                                    {...register("email", {
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
                                <button
                                    className={styles["register-content__container__three__button"]}
                                    type="submit"
                                >
                                    CONFIRM
                                </button>
                            </div>
                            {registerSuccess && <p>REGISTERED SUCCESSFULLY, YOU WILL BE REDIRECTED TO THE LOGIN PAGE</p>}
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default RegisterContent;