import React from "react";
import styles from "./CreateReviewBody.module.css";
import star1Picture from "../../assets/Star_one.svg";
import star2Picture from "../../assets/Star_two.svg";
import star3Picture from "../../assets/Star_three.svg";
import star4Picture from "../../assets/Star_four.svg";
import star5Picture from "../../assets/Star_five.svg";

function CreateReviewBody() {
    return (
        <div className={styles["create-review-body"]}>
            <h3 className={styles["create-review-body-title"]}>
                CREATE A REVIEW FOR
            </h3>

            <select className={styles["create-review-body-dropdown"]}>
                <option>"CICO, IT'S ALL YOU NEED"</option>
                <option>"THE PERFECT POST WORKOUT SNACKS"</option>
                <option>"TESTOSTERON LEVES & DIETS"</option>
            </select>

            <textarea
                className={styles["create-review-body-input"]}
                rows="4"
                cols="40"
                placeholder="WRITE YOUR REVIEW HERE"
            />

            <h3
                className={styles["create-review-body-ratingmessage"]}>
                GIVE THIS CLASS A RATING<br/>OUT OF 5 STARS
            </h3>

            <div className={styles["create-review-body-rating__container"]}>
                <img className={styles["create-review-body-rating"]} src={star1Picture} alt="star1-image"/>
                <img className={styles["create-review-body-rating"]} src={star2Picture} alt="star2-image"/>
                <img className={styles["create-review-body-rating"]} src={star3Picture} alt="star3-image"/>
                <img className={styles["create-review-body-rating"]} src={star4Picture} alt="star4-image"/>
                <img className={styles["create-review-body-rating"]} src={star5Picture} alt="star5-image"/>
            </div>

            <button
                className={styles["create-review-body-post"]}>
                POST
            </button>
        </div>
    );
}

export default CreateReviewBody;