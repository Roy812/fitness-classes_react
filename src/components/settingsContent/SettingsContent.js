import React, {useState} from "react";
import { useForm } from "react-hook-form";
import styles from "./SettingsContent.module.css";
import lockPicture from "../../assets/Lock-red(new).svg"
import photoPicture from "../../assets/Camera-red(new).svg";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";
import axios from "axios";

function SettingsContent() {

    const [changePasswordSuccess, toggleChangePasswordSuccess] = useState(false);
    const [uploadPictureSuccess, toggleUploadPictureSuccess] = useState(false);
    const [newsletterSuccess, toggleNewsletterSuccess] = useState(false);
    const [requestDeleteSuccess, toggleRequestDeleteSuccess] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm();
    // const {register, handleSubmit, formState: {errors}} = useForm();

    async function onSubmitPassword(data) {
        console.log(data);
        try {
            const result = await axios.patch('http://localhost:8080/users/password/id/{id}', {
                newPassword: data.password,
                //USE EFFECT TO GET ID FROM USER.
                Id: 1
            })
            console.log(result);
            toggleChangePasswordSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitPicture(data) {
        console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/users/upload/id/{id}', {
                // file: data.file,
                //USE EFFECT TO GET ID FROM USER.
                Id: 1
            })
            console.log(result);
            toggleUploadPictureSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitNewsletter() {
        // console.log(data);
        try {
            const result = await axios.patch('http://localhost:8080/users/newsletter/id/{id}', {
                //USE EFFECT TO GET ID FROM USER.
                Id: 1
            })
            console.log(result);
            toggleNewsletterSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitDelete(data) {
        console.log(data);
        try {
            const result = await axios.delete('http://localhost:8080/users/delete/{id}', {
                //USE EFFECT TO GET ID FROM USER.
            })
            console.log(result);
            toggleRequestDeleteSuccess(true);
        } catch (e) {
            console.error(e)
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
                            name="password"
                            id="password"
                            {...register("newpassword", {
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
                         {changePasswordSuccess && <p>Password is changed!</p>}
                     </form>
                 </label>
            </div>

            <div className={styles["settings-content__container2"]}>
                <form onSubmit={handleSubmit(onSubmitPicture)}>
                    <p className={styles["settings-content__container2__change-profile-picture"]}>CHANGE YOUR PROFILE PICTURE</p>
                    <p className={styles["settings-content__container2__jpg-message"]}>PLEASE SELECT A JPG FILE</p>
                    {/*<button*/}
                    {/*    className={styles["settings-content__container2__button"]} type="submit">*/}
                    {/*    SELECT*/}
                    {/*</button>*/}

                    {/*//INPUT FOR MULTIPART FILE.*/}

                    <p className={styles["settings-content__container2__jpg-confirm"]}>
                    IF YOU ARE A 100% SURE THIS IS YOUR PERFECT
                    PROFILE PICTURE, PRESS CONFIRM
                    </p>
                    <button
                        className={styles["settings-content__container2__button"]} type="submit">
                        CONFIRM
                    </button>
                    {uploadPictureSuccess && <p>Picture is uploaded</p>}
                </form>
            </div>

            <div className={styles["settings-content__container3"]}>
                <form onSubmit={handleSubmit(onSubmitNewsletter)}>
                    <p className={styles["settings-content__container3__send-newsletter"]}>SEND ME THE F.C. NEWSLETTER</p>
                    <button
                        className={styles["settings-content__container3__button"]} type="submit">
                        YES
                    </button>
                    {newsletterSuccess && <p>Preferences changed!</p>}
                </form>
            </div>

            <div className={styles["settings-content__container4"]}>
                <form onSubmit={handleSubmit(onSubmitDelete)}>
                    <p className={styles["settings-content__container4__delete-account"]}>DELETE ACCOUNT</p>
                    <p className={styles["settings-content__container4__message"]}>
                       IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST SEND A REQUEST TO ADMIN
                    </p>
                    <button
                        className={styles["settings-content__container4__button"]} type="submit"
                        >
                        DELETE MY ACCOUNT
                    </button>
                    {requestDeleteSuccess && <p>Account is deleted</p>}
                </form>
            </div>
        </div>
      </div>
    );
}

export default SettingsContent;