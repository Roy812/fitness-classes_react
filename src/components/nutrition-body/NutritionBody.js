import React from "react";
import styles from "./NutritionBody.module.css";

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
                <h4 className={styles["nutrition-body-CICO-title"]}>1. "CICO, IT"s ALL YOU NEED" BY - GREG DOUCHETTE</h4>
                <h4 className={styles["nutrition-body-CICO-playtime"]} >90 MIN</h4>
                <h4 className={styles["nutrition-body-CICO-subcategory"]} >MACRONUTRIENTS</h4>
            </div>

            <div className={styles["nutrition-body-workoutsnacks"]}>
                <h4 className={styles["nutrition-body-workoutsnacks-title"]}>2. "THE PERFECT WORKOUT SNACKS" BY - JIM STOPPANI</h4>
                <h4 className={styles["nutrition-body-workoutsnacks-playtime"]} >120 MIN</h4>
                <h4 className={styles["nutrition-body-workoutsnacks-subcategory"]} >TRAINING</h4>
            </div>

            <div className={styles["nutrition-body-testlevelsanddiets"]}>
                <h4 className={styles["nutrition-body-testlevelsanddiets-title"]}>2. "TESTOSTERONE LEVELS & DIETS" BY - MIKE ISRATEL</h4>
                <h4 className={styles["nutrition-body-testlevelsanddiets-playtime"]} >100 MIN</h4>
                <h4 className={styles["nutrition-body-testlevelsanddiets-subcategory"]} >HORMONAL BALANCE</h4>
            </div>

        </div>
    );
}

export default NutritionBody;