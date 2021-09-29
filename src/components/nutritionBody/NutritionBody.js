import React from "react";
import styles from "./NutritionBody.module.scss";
import { Link } from "react-router-dom";


function NutritionBody() {

    return (
        <div className={styles["nutrition-body"]}>
            <h3>BROWSE CLASSES ON NUTRITION</h3>

            <div className={styles["nutrition-body__subheader-container"]}>
                <p>CLASS</p>
                <p>PLAYTIME</p>
                <p>SUBCATEGORY</p>
            </div>

            <div className={styles["nutrition-body__cico"]}>
                <Link
                    className={styles["nutrition-body__cico__title"]}
                    to="/CICO">
                    1. "CICO, IT"s ALL YOU NEED" BY - GREG DOUCHETTE</Link>
                <h4 className={styles["nutrition-body__cico__playtime"]} >90 MIN</h4>
                <h4 className={styles["nutrition-body__cico__subcategory"]} >MACRONUTRIENTS</h4>
            </div>

            <div className={styles["nutrition-body__workoutsnacks"]}>
                <Link
                    className={styles["nutrition-body__workoutsnacks__title"]}
                    to="/SNACKS">
                    2. "THE PERFECT WORKOUT SNACKS" BY - JIM STOPPANI</Link>
                <h4 className={styles["nutrition-body__workoutsnacks__playtime"]} >120 MIN</h4>
                <h4 className={styles["nutrition-body__workoutsnacks__subcategory"]} >TRAINING</h4>
            </div>

            <div className={styles["nutrition-body__testlevels-and-diets"]}>
                <Link
                    className={styles["nutrition-body__testlevels-and-diets__title"]}
                    to="/TESTOSTERONE">
                    3. "TESTOSTERONE LEVELS & DIETS" BY - MIKE ISRATEL
                </Link>
                <h4 className={styles["nutrition-body__testlevels-and-diets__playtime"]} >100 MIN</h4>
                <h4 className={styles["nutrition-body__testlevels-and-diets__subcategory"]} >HORMONAL BALANCE</h4>
            </div>

        </div>
    );
}

export default NutritionBody;