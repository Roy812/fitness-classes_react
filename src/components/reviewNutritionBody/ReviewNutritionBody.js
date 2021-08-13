import React from "react";
import styles from "./ReviewNutritionBody.module.css";
import {Link} from "react-router-dom";

function ReviewNutritionBody() {
    return(
        <div className={styles["review-nutrition-body"]}>

            <h3 className={styles["review-nutrition-body-title"]}>NUTRITION RELATED REVIEWS</h3>

            <div className={styles["review-nutrition-body-subheaders"]}>
                <h3>CLASS</h3>
                <h3>TEACHER</h3>
                <h3>BY USER</h3>
            </div>

            <div className={styles["review-nutrition-content-CICO"]}>
                <Link
                    className={styles["review-nutrition-body-CICO-title"]}
                    to="/CICOreview"
                >
                    1. "CICO, IT"s ALL YOU NEED"</Link>
                <h4 className={styles["review-nutrition-body-CICO-teacher"]} >GREG DOUCHETTE</h4>
                <h4 className={styles["review-nutrition-body-CICO-user"]} >-</h4>
            </div>

            <div className={styles["review-nutrition-body-workoutsnacks"]}>
                <Link
                    className={styles["review-nutrition-body-workoutsnacks-title"]}
                    to="/workoutsnacksreview"
                >
                    2. "THE PERFECT WORKOUT SNACKS"</Link>
                <h4 className={styles["review-nutrition-body-workoutsnacks-teacher"]} >JIM STOPPANI</h4>
                <h4 className={styles["review-nutrition-body-workoutsnacks-user"]} >-</h4>
            </div>

            <div className={styles["review-nutrition-body-testlevelsanddiets"]}>
                <Link
                    className={styles["review-nutrition-body-testlevelsanddiets-title"]}
                    to="/testlevelsanddietsreview"
                >
                    3. "TESTOSTERONE LEVELS & DIETS"</Link>
                <h4 className={styles["review-nutrition-body-testlevelsanddiets-teacher"]} >MIKE ISRATEL</h4>
                <h4 className={styles["review-nutrition-body-testlevelsanddiets-user"]} >-</h4>
            </div>

        </div>
    );
}

export default ReviewNutritionBody;