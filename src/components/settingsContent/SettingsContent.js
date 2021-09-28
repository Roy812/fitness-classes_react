import React, {useState, useContext} from "react";
import { useForm } from "react-hook-form";
import styles from "./SettingsContent.module.css";
import lockPicture from "../../assets/Lock-red(new).svg"
import photoPicture from "../../assets/Camera-red(new).svg";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";
import axios from "axios";
import {useHistory} from "react-router-dom";

function SettingsContent() {

    const history = useHistory();
    const [changePasswordSuccess, toggleChangePasswordSuccess] = useState(false);
    const [uploadPictureSuccess, toggleUploadPictureSuccess] = useState(false);
    const [newsletterSuccess, toggleNewsletterSuccess] = useState(false);
    const [requestDeleteSuccess, toggleRequestDeleteSuccess] = useState(false);
    const [requestDeleteFailed, toggleRequestDeleteFailed] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm();

    async function onSubmitPassword(data) {
        try {
            const userId = localStorage.getItem('id');
            const jwtToken = localStorage.getItem('token');
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
            // toggleChangePasswordError(true);
        }
    }

    async function onSubmitPicture(data) {
        console.log(data);
        try {
            const formData = new FormData();
            formData.append('file', data.profilePicture[0]);
            const userId = localStorage.getItem('id');
            const jwtToken = localStorage.getItem('token');
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
        // console.log(data);
        try {
            const userId = localStorage.getItem('id');
            const jwtToken = localStorage.getItem('token');
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
            const userId = localStorage.getItem('id');
            const jwtToken = localStorage.getItem('token');
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
                <p className={styles["settings-content-_container1__required-fields"]}>DEAR USER: ALL FIELD ARE REQUIRED TO BE FULFILLED BEFORE ANY REQUEST CAN BE MADE</p>
                <div className={styles["settings-content__container1__item1"]}>
                    <p className={styles["settings-content__container1__item1__change-password"]}>CHANGE YOUR PASSWORD</p>

                 <label className={styles["settings-content__container1__item1__label"]}>
                     <form
                         className={styles["settings-content__container1__item1__label__form"]}
                         onSubmit={handleSubmit(onSubmitPassword)}>
                         <input
                            className={styles["settings-content__container1__item1__label__form__password"]}
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
                         {errors.newpassword && <p className={styles["settings-content__container1__item1__label__form__error1"]}>{errors.newpassword.message}</p>}

                         <button
                             className={styles["settings-content__container1__item1__label__form__button"]}
                             type="submit">
                             SUBMIT
                         </button>
                         {changePasswordSuccess && <p
                             className={styles["settings-content__container1__item1__label__form__success-message"]}
                         >
                             PASSWORD IS CHANGED!</p>}
                     </form>
                 </label>
            </div>

            <div className={styles["settings-content__container2"]}>
                <form onSubmit={handleSubmit(onSubmitPicture)}>
                    <p className={styles["settings-content__container2__change-profile-picture"]}>CHANGE YOUR PROFILE PICTURE</p>
                    <p className={styles["settings-content__container2__jpg-message"]}>PLEASE SELECT A JPG FILE</p>
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
                    {errors.profilePicture && <p className={styles["settings-content__container2__required-message"]}>{errors.profilePicture.message}</p>}

                    <p className={styles["settings-content__container2__jpg-confirm"]}>
                    IF YOU ARE A 100% SURE THIS IS YOUR PERFECT
                    PROFILE PICTURE, PRESS CONFIRM
                    </p>
                    <button
                        className={styles["settings-content__container2__button"]} type="submit">
                        CONFIRM
                    </button>
                    {uploadPictureSuccess && <p
                        className={styles["settings-content__container2__success-message"]}
                        >
                        PICTURE IS UPLOADED!</p>}
                </form>
            </div>

            <div className={styles["settings-content__container3"]}>
                <form onSubmit={handleSubmit(onSubmitNewsletter)}>
                    <p className={styles["settings-content__container3__send-newsletter"]}>SEND ME THE F.C. NEWSLETTER</p>
                    <button
                        className={styles["settings-content__container3__button"]} type="submit">
                        YES/NO
                    </button>
                    {newsletterSuccess && <p
                        className={styles["settings-content__container3__success-message"]}
                    >
                        PREFERENCES CHANGED!</p>}
                </form>
            </div>

            <div className={styles["settings-content__container4"]}>
                <form onSubmit={handleSubmit(onSubmitDelete)}>
                    <p className={styles["settings-content__container4__delete-account"]}>DELETE ACCOUNT</p>
                    <p className={styles["settings-content__container4__message"]}>
                       IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST PRESS THE BUTTON BELOW
                    </p>
                    <button
                        className={styles["settings-content__container4__button"]} type="submit"
                        >
                        DELETE MY ACCOUNT
                    </button>
                    {requestDeleteSuccess && <p
                        className={styles["settings-content__container4__success-message"]}
                    >
                        ACCOUNT IS DELETED!</p>}
                    {requestDeleteFailed && <p className={styles["settings-content__container4__request-failed"]}>SOMETHING WENT WRONG..</p>}
                </form>
            </div>
        </div>
      </div>
    );
}

export default SettingsContent;