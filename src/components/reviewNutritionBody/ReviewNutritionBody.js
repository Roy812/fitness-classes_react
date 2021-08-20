import React from "react";
import styles from "./ReviewNutritionBody.module.css";
import {Link} from "react-router-dom";

function ReviewNutritionBody() {
    return (
        <div className={styles["review-nutrition-body"]}>
            <h3 className={styles["review-nutrition-body__title"]}>NUTRITION RELATED REVIEWS</h3>

            <div className={styles["review-nutrition-body__subheader-container"]}>
                <p>CLASS</p>
                <p>TEACHER</p>
                <p>BY USER</p>
            </div>

            <div className={styles["review-nutrition-body__CICO"]}>
                <Link
                    className={styles["review-nutrition-body__CICO__title"]}
                    to="/CICOreview">
                    1. "CICO, IT"s ALL YOU NEED"
                </Link>

                <h4 className={styles["review-nutrition-body__CICO__teacher"]} >GREG DOUCHETTE</h4>
                <h4 className={styles["review-nutrition-body__CICO__user"]} >-</h4>
            </div>

            <div className={styles["review-nutrition-body__workoutsnacks"]}>
                <Link
                    className={styles["review-nutrition-body__workoutsnacks__title"]}
                    to="/workoutsnacksreview">
                    2. "THE PERFECT WORKOUT SNACKS"
                </Link>

                <h4 className={styles["review-nutrition-body__workoutsnacks__teacher"]} >JIM STOPPANI</h4>
                <h4 className={styles["review-nutrition-body__workoutsnacks__user"]} >-</h4>
            </div>

            <div className={styles["review-nutrition-body__testlevelsanddiets"]}>
                <Link
                    className={styles["review-nutrition-body__testlevelsanddiets__title"]}
                    to="/testlevelsanddietsreview">
                    3. "TESTOSTERONE LEVELS & DIETS"
                </Link>

                <h4 className={styles["review-nutrition-body__testlevelsanddiets__teacher"]} >MIKE ISRATEL</h4>
                <h4 className={styles["review-nutrition-body__testlevelsanddiets__user"]} >-</h4>
            </div>
        </div>
    );
}

export default ReviewNutritionBody;