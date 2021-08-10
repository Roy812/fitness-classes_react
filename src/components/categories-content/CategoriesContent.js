import React from "react";
import styles from "./Categories.module.css";
import dietPicture from "../../assets/Diet(icon).png";
import dumbbellPicture from "../../assets/Dumbbell(icon).png";
import platePicture from "../../assets/Plate(icon).png";
import toolsPicture from "../../assets/Tools(icon).png";
import {Link} from "react-router-dom";

function CategoriesContent() {
    return(
        <div className={styles["categories-content"]}>
            <div className={styles["categories-content-title"]}>
                <h1>BROWSE OUR CATEGORIES</h1>
            </div>
            <div className={styles["categories-content-nutrition"]}>
                <img className={styles["categories-content-nutrition-icon"]} src={dietPicture} alt="diet-icon"/>
                <Link
                    className={styles["categories-content-nutrition-link"]}
                    to="/nutrition"
                >
                    NUTRITION
                </Link>
            </div>
            <div className={styles["categories-content-buildmuscle"]}>
                <img className={styles["categories-content-buildmuscle-icon"]} src={dumbbellPicture} alt="dumbell-icon"/>
                <Link
                    className={styles["categories-content-buildmuscle-link"]}
                    to="/buildmuscle"
                >
                    BUILD MUSCLE
                </Link>
            </div>
            <div className={styles["categories-content-buildpower"]}>
                <img className={styles["categories-content-buildpower-icon"]} src={platePicture} alt="plate-icon"/>
                <Link
                    className={styles["categories-content-buildpower-link"]}
                    to="/buildpower"
                >
                    BUILD POWER
                </Link>
            </div>
            <div className={styles["categories-content-buildahomegym"]}>
                <img className={styles["categories-content-buildahomegym-icon"]} src={toolsPicture} alt="tools-icon"/>
                <Link
                    className={styles["categories-content-buildahomegym-link"]}
                    to="/buildahomegym"
                >
                    BUILD A HOME GYM
                </Link>
            </div>
        </div>
    );
}

export default CategoriesContent;