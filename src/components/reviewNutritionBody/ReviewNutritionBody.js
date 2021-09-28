import React from "react";
import styles from "./ReviewNutritionBody.module.css";
import {Link} from "react-router-dom";

function ReviewNutritionBody() {
    return (
        <div className={styles["review-nutrition-body"]}>
            <h3 className={styles["review-nutrition-body__title"]}>NUTRITION RELATED REVIEWS</h3>

            <div className={styles["review-nutrition-body__subheader-container"]}>
                <p>CLASS</p>
                <p className={styles["review-nutrition-body__subheader-container__teacher-title"]}>TEACHER</p>
            </div>

            <div className={styles["review-nutrition-body__CICO"]}>
                <Link
                    className={styles["review-nutrition-body__CICO__title"]}
                    to="/CICOreview">
                    1. "CICO, IT"s ALL YOU NEED"
                </Link>

                <h4 className={styles["review-nutrition-body__CICO__teacher"]} >GREG DOUCHETTE</h4>
            </div>

            <div className={styles["review-nutrition-body__workoutsnacks"]}>
                <Link
                    className={styles["review-nutrition-body__workoutsnacks__title"]}
                    to="/SNACKSreview">
                    2. "THE PERFECT WORKOUT SNACKS"
                </Link>

                <h4 className={styles["review-nutrition-body__workoutsnacks__teacher"]} >JIM STOPPANI</h4>
            </div>

            <div className={styles["review-nutrition-body__testlevels-and-diets"]}>
                <Link
                    className={styles["review-nutrition-body__testlevels-and-diets__title"]}
                    to="/TESTOSTERONreview">
                    3. "TESTOSTERONE LEVELS & DIETS"
                </Link>

                <h4 className={styles["review-nutrition-body__testlevels-and-diets__teacher"]} >MIKE ISRATEL</h4>
            </div>
        </div>
    );
}

export default ReviewNutritionBody;