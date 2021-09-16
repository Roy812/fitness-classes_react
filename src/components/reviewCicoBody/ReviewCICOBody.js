import React, { useState, useContext } from "react";
import styles from "./ReviewCICOBody.module.css";
import fourstars from "../../assets/Stars(4_5).svg";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function ReviewCICOBody() {

    // const { handleSubmit } = useForm();
    const alles = useContext(AuthContext);

    async function loadReviews() {
        try {
            const title = 'CICO, ITs All YOU NEED';
            const result = await axios.get(`http://localhost:8080/review/findby/${title}`, {

            })
            console.log(result);
        } catch (e) {
            console.error(e)
        }
    }

    loadReviews();

    return (
        <div className={styles["review-cico-body"]}>
            <div>
                {/*LOADREVIEWS*/}
            </div>
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