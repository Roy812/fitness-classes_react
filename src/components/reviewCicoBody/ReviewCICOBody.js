import React, {useState} from "react";
import styles from "./ReviewCICOBody.module.css";
import fourstars from "../../assets/Stars(4_5).svg";
import { useForm } from "react-hook-form";
import axios from "axios";

function ReviewCICOBody() {

    const {handleSubmit} = useForm();

    async function onSubmit(data) {
        console.log(data);
        try {
            const result = await axios.get('http://localhost:8080/review/findby/title', {
                title: data.title
            })
            console.log(result);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["review-cico-body"]}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/*//USE EFFECT!?*/}

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