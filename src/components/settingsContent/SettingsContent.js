import React, { useState } from "react";
import styles from "./SettingsContent.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import lockPicture from "../../assets/Lock-red(new).svg"
import photoPicture from "../../assets/Camera-red(new).svg";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";


function SettingsContent() {

    const [changePasswordSuccess, toggleChangePasswordSuccess] = useState(false);
    const [uploadPictureSuccess, toggleUploadPictureSuccess] = useState(false);
    const [newsletterSuccess, toggleNewsletterSuccess] = useState(false);
    const [requestDeleteSuccess, toggleRequestDeleteSuccess] = useState(false);
    const [requestDeleteFailed, toggleRequestDeleteFailed] = useState(false);

    const { register, handleSubmit, formState: {errors} } = useForm();
    const history = useHistory();
    const userId = localStorage.getItem('id');
    const jwtToken = localStorage.getItem('token');

    async function onSubmitPassword(data) {
        try {
            const result = await axios.patch(`http://localhost:8080/users/password/id/${userId}`, {
                newPassword: data.newPassword,
            }, {
                headers: {
                "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
            }},
                )
            console.log(result);
            toggleChangePasswordSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitPicture(data) {
        try {
            const formData = new FormData();
            formData.append('file', data.profilePicture[0]);

            const result = await axios.patch(`http://localhost:8080/users/upload/id/${userId}`,
                formData
            , {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }},
                )
            console.log(result);
            toggleUploadPictureSuccess(true);
            history.push("/login")
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitNewsletter() {
        try {
            const result = await axios.patch(`http://localhost:8080/users/newsletter/id/${userId}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }},)
            console.log(result);
            toggleNewsletterSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitDelete() {
        try {
            const result = await axios.delete(`http://localhost:8080/users/delete/id/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }},
                )
            console.log(result);
            toggleRequestDeleteSuccess(true);
        } catch (e) {
            console.error(e)
            toggleRequestDeleteFailed(true);
        }
    }

    return (
        <div className={styles["settings-content"]}>
            <div className={styles["settings-content__icon-container"]}>
                <img className={styles["settings-content__icon-container__lock"]} src={lockPicture} alt="lock-image"/>
                <img className={styles["settings-content__icon-container__photo"]} src={photoPicture} alt="photo-image"/>
                <img className={styles["settings-content__icon-container__newsletter"]} src={newsletterPicture} alt="newsletter-image"/>
                <img className={styles["settings-content__icon-container__delete"]} src={deletePicture} alt="delete-image"/>
            </div>

            <div className={styles["settings-content__container1"]}>
                <p1>DEAR USER: ALL FIELD ARE REQUIRED TO BE FULFILLED BEFORE ANY REQUEST CAN BE MADE</p1>
                <p2>CHANGE YOUR PASSWORD</p2>
                <form
                    className={styles["settings-content__container1__form"]}
                    onSubmit={handleSubmit(onSubmitPassword)}
                >
                    <input
                        className={styles["settings-content__container1__form__input"]}
                        type="text"
                        placeholder="TYPE YOUR NEW PASSWORD"
                        name="newPassword"
                        id="newPassword"
                        {...register("newPassword", {
                            required: {
                                value: true,
                                message: "THIS FIELD CAN'T BE EMPTY"
                            }, minLength: {
                                value: 6,
                                message: "MIN LENGTH IS 6 CHARACTERS"
                            }
                        })}
                    />
                    {errors.newpassword && <p className={styles["settings-content__container1__form__error"]}>{errors.newpassword.message}</p>}

                    <button
                        className={styles["settings-content__container1__form__button"]}
                        type="submit">
                        SUBMIT
                    </button>
                    {changePasswordSuccess && <p>PASSWORD IS CHANGED!</p>}
                </form>

                <form
                    onSubmit={handleSubmit(onSubmitPicture)}
                    className={styles["settings-content__form2"]}
                >
                    <p1>CHANGE YOUR PROFILE PICTURE</p1>
                    <p2>PLEASE SELECT A JPG FILE</p2>
                    <input
                        ref={register}
                        type="file"
                        accept="image/*"
                        multiple="false"
                        {...register("profilePicture", {
                            required: {
                                value: true,
                                message: "Please upload profile picture, also make sure your new password is minimal 6 characters",
                            }
                        })}
                    />
                    {errors.profilePicture && <p3>{errors.profilePicture.message}</p3>}

                    <p4>IF YOU ARE A 100% SURE THIS IS YOUR PERFECT PROFILE PICTURE, PRESS CONFIRM</p4>

                    <button
                        className={styles["settings-content__form2__button"]} type="submit">
                        CONFIRM
                    </button>
                    {uploadPictureSuccess && <p5>PICTURE IS UPLOADED!</p5>}
                </form>

                <form
                    onSubmit={handleSubmit(onSubmitNewsletter)}
                    className={styles["settings-content__form3"]}
                >
                    <p1>SEND ME THE F.C. NEWSLETTER</p1>
                    <button
                        className={styles["settings-content__form3__button"]} type="submit">
                        YES/NO
                    </button>
                    {newsletterSuccess && <p2>PREFERENCES CHANGED!</p2>}
                </form>

                <form
                    onSubmit={handleSubmit(onSubmitDelete)}
                    className={styles["settings-content__form4"]}
                >
                    <p1>DELETE ACCOUNT</p1>
                    <p2>IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST PRESS THE BUTTON BELOW</p2>
                    <button
                        className={styles["settings-content__form4__button"]} type="submit"
                    >
                        DELETE MY ACCOUNT
                    </button>
                    {requestDeleteSuccess && <p3>ACCOUNT IS DELETED!</p3>}
                    {requestDeleteFailed && <p4>SOMETHING WENT WRONG..</p4>}
                </form>
            </div>
        </div>
    );
}

export default SettingsContent;