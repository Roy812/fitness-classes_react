import React from "react";
import { useForm } from "react-hook-form";
import styles from "./SettingsContent.module.css";
import lockPicture from "../../assets/Lock-red(new).svg"
import photoPicture from "../../assets/Camera-red(new).svg";
import newsletterPicture from "../../assets/Newsletter(red).png";
import deletePicture from "../../assets/Delete(red).png";

function SettingsContent() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function onSubmit(data) {
        console.log(data);
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
                    <p>CHANGE YOUR PASSWORD</p>

                 <label className={styles["settings-content__container1__item1__label"]}>
                     <form
                         className={styles["settings-content__container1__item1__label__form"]}
                         onSubmit={handleSubmit(onSubmit)}>
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
                     </form>
                 </label>
            </div>

            <div className={styles["settings-content__container2"]}>
                <p>CHANGE YOUR PROFILE PICTURE</p>

                <p className={styles["settings-content__container2__jpg-message"]}>PLEASE SELECT A JPG FILE</p>
                <button
                    className={styles["settings-content__container2__button"]} type="submit">
                    SELECT
                </button>

                <p className={styles["settings-content__container2__jpg-confirm"]}>
                   IF YOU ARE A 100% SURE THIS IS YOUR PERFECT
                   PROFILE PICTURE, PRESS CONFIRM
                </p>
                <button
                    className={styles["settings-content__container2__button"]} type="submit">
                    CONFIRM
                </button>
            </div>

            <div className={styles["settings-content__container3"]}>
                <p>SEND ME THE F.C. NEWSLETTER</p>
                <button
                    className={styles["settings-content__container3__button"]} type="submit">
                    YES
                </button>
            </div>

            <div className={styles["settings-content__container4"]}>
                <p>DELETE ACCOUNT</p>

                <p className={styles["settings-content__container4__message"]}>
                   IF YOU WISH TO DELETE YOUR ACCOUNT YOU MUST SEND A REQUEST TO ADMIN
                </p>
                <button
                    className={styles["settings-content__container4__button"]} type="submit"
                    >
                    DELETE MY ACCOUNT
                </button>
            </div>
        </div>
      </div>
    );
}

export default SettingsContent;