import React, {useState} from "react";
import styles from "./RegisterContent.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";


function RegisterContent() {

    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/api/auth/signup', {
                username: data.email,
                email: "test@novi.com",
                password: data.password,
                subscribeToNewsletter: false,
                coinBalance: 1,
                role: ["user"]
            })
            console.log(result);
            toggleRegisterSuccess(true);
            history.push('/');
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["register-content"]}>
            <div className={styles["register-content__container1"]}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>STEP 1:</p>
                    <p>ENTER YOUR MAILADDRESS</p>
                    <input
                        className={styles["register-content__container1__input"]}
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
                    {errors.mail && <p className={styles["register-content__container1__error"]}>{errors.mail.message}</p>}

                    <div className={styles["register-content__container2"]}>
                        <p>STEP 2:</p>
                        <p>CREATE A PASSWORD</p>
                        <input
                            className={styles["register-content__container2__input"]}
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
                        {errors.password && <div className={styles["register-content__container2__error"]}>
                                                <p>{errors.password.message}</p>
                                                <p>ALSO, DON'T FORGET TO USE THE '@' CHARACTER IN YOUR MAIL</p>
                                            </div>}
                    </div>

                    <div className={styles["register-content__container3"]}>
                        <p>STEP 3:</p>
                        <p>TO COMPLETE YOUR REGISTRATION, PRESS CONFIRM</p>
                        <button
                            className={styles["register-content__container3__button"]}
                            type="submit"
                        >
                            CONFIRM
                        </button>
                        {registerSuccess && <p>REGISTERED SUCCESSFULLY, YOU WILL BE REDIRECTED TO THE LOGIN PAGE</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterContent;