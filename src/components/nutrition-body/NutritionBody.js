import React from "react";
import styles from "./NutritionBody.module.css";
import {Link} from "react-router-dom";

function NutritionBody() {
    return(
        <div className={styles["nutrition-body"]}>

            <h3 className={styles["nutrition-body-title"]}>BROWSE CLASSES ON NUTRITION</h3>

            <div className={styles["nutrition-body-subheaders"]}>
                <h3>CLASS</h3>
                <h3>PLAYTIME</h3>
                <h3>SUBCATEGORY</h3>
            </div>

            <div className={styles["nutrition-content-CICO"]}>
                <Link
                    className={styles["nutrition-body-CICO-title"]}
                    to="/CICO"
                >
                    1. "CICO, IT"s ALL YOU NEED" BY - GREG DOUCHETTE</Link>
                <h4 className={styles["nutrition-body-CICO-playtime"]} >90 MIN</h4>
                <h4 className={styles["nutrition-body-CICO-subcategory"]} >MACRONUTRIENTS</h4>
            </div>

            <div className={styles["nutrition-body-workoutsnacks"]}>
                <Link
                    className={styles["nutrition-body-workoutsnacks-title"]}
                    to="/workoutsnacks"
                >
                    2. "THE PERFECT WORKOUT SNACKS" BY - JIM STOPPANI</Link>
                <h4 className={styles["nutrition-body-workoutsnacks-playtime"]} >120 MIN</h4>
                <h4 className={styles["nutrition-body-workoutsnacks-subcategory"]} >TRAINING</h4>
            </div>

            <div className={styles["nutrition-body-testlevelsanddiets"]}>
                <Link
                    className={styles["nutrition-body-testlevelsanddiets-title"]}
                    to="/testlevelsanddiets"
                >
                    3. "TESTOSTERONE LEVELS & DIETS" BY - MIKE ISRATEL</Link>
                <h4 className={styles["nutrition-body-testlevelsanddiets-playtime"]} >100 MIN</h4>
                <h4 className={styles["nutrition-body-testlevelsanddiets-subcategory"]} >HORMONAL BALANCE</h4>
            </div>

        </div>
    );
}

export default NutritionBody;