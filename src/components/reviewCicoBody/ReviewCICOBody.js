import React, { useState, useContext, useEffect } from "react";

import styles from "./ReviewCICOBody.module.css";
import fourstars from "../../assets/Stars(4_5).svg";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function ReviewCICOBody() {

    const [notFound, toggleNotFound] = useState(false);
    const { handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const jwtToken = localStorage.getItem('token');

    async function onSubmitReviews() {
        try {
            // const title = 'CICO';
            const result = await axios.get(`http://localhost:8080/users/review/findby/title`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }, title: 'CICO',
            })
            console.log(result);
        } catch (e) {
            console.error(e)
            toggleNotFound(true);
        }
    }

    // useEffect(() => {
    //     loadReviews();
    // }, [])


    return (
        <div className={styles["review-cico-body"]}>
            <form onSubmit={handleSubmit(onSubmitReviews)}>
                <button
                    className={styles["review-cico-body__form-button"]}
                    type="submit"
                >
                    GET REVIEWS..
                </button>
                {notFound && <p
                    className={styles["review-cico-body__form__review-not-found"]}
                >
                    REVIEWS NOT FOUND..</p>}
            </form>
            <h3
                className={styles["review-cico-body__title"]}>
                "CICO, IT's ALL YOU NEED"<br/>
                REVIEW BY USER
            </h3>

            <p className={styles["review-cico-body__text"]}>
                THIS CLASS HELPED ME TO <br/>
                UNDERSTAND WHY IT IS EASY TO <br/>
                OVERCOMPLICATE YOUR DIET <br/>
                GREG EXPLAINS STEP BY STEP <br/>
                A PRACTICAL APPROACH TO A <br/>
                CIRCLE DIET LIFESTYLE
            </p>

            <img className={styles["review-cico-body__fourstars"]} src={fourstars} alt="fourstars-image"/>
        </div>
    );
}

export default ReviewCICOBody;