import React from "react";
import styles from "./CategoriesContent.module.css";
import dietPicture from "../../assets/Diet(icon).png";
import dumbbellPicture from "../../assets/Dumbbell(icon).png";
import platePicture from "../../assets/Plate(icon).png";
import toolsPicture from "../../assets/Tools(icon).png";
import {Link} from "react-router-dom";

function CategoriesContent( {message} ) {
    return(
        <div className={styles["categories-content"]}>
            <div className={styles["categories-content__title"]}>
                <p>{message}</p>
            </div>
            <div className={styles["categories-content__nutrition"]}>
                <img className={styles["categories-content__nutrition__icon"]} src={dietPicture} alt="diet-icon"/>
                <Link
                    className={styles["categories-content__nutrition__link"]}
                    to="/nutrition"
                >
                    NUTRITION
                </Link>
            </div>
            <div className={styles["categories-content__buildmuscle"]}>
                <img className={styles["categories-content__buildmuscle__icon"]} src={dumbbellPicture} alt="dumbell-icon"/>
                <Link
                    className={styles["categories-content__buildmuscle__link"]}
                    to="/buildmuscle"
                >
                    BUILD MUSCLE
                </Link>
            </div>
            <div className={styles["categories-content__buildpower"]}>
                <img className={styles["categories-content__buildpower__icon"]} src={platePicture} alt="plate-icon"/>
                <Link
                    className={styles["categories-content__buildpower__link"]}
                    to="/buildpower"
                >
                    BUILD POWER
                </Link>
            </div>
            <div className={styles["categories-content__build-a-homegym"]}>
                <img className={styles["categories-content__build-a-homegym__icon"]} src={toolsPicture} alt="tools-icon"/>
                <Link
                    className={styles["categories-content__build-a-homegym__link"]}
                    to="/buildahomegym"
                >
                    BUILD A HOME GYM
                </Link>
            </div>
        </div>
    );
}

export default CategoriesContent;