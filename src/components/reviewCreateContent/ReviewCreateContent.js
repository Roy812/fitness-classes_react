import React from "react";
import styles from "./ReviewCreateContent.module.css";
import dietPicture from "../../assets/Diet(icon).png";
import {Link} from "react-router-dom";
import dumbbellPicture from "../../assets/Dumbbell(icon).png";
import platePicture from "../../assets/Plate(icon).png";
import toolsPicture from "../../assets/Tools(icon).png";

function ReviewCreateContent() {
    return (
        <div className={styles["review-create-content"]}>
            <div className={styles["review-create-content__title"]}>
                <p>FIND REVIEWS FOR ALL YOU FAVOURITE CLASSES</p>
            </div>

            <div className={styles["review-create-content__nutrition"]}>
                <img className={styles["review-create-content__nutrition__icon"]} src={dietPicture} alt="diet-icon"/>
                <Link
                    className={styles["review-create-content__nutrition__link"]}
                    to="/nutritionreviews">
                    NUTRITION
                </Link>
            </div>

            <div className={styles["review-create-content__build-muscle"]}>
                <img className={styles["review-create-content__build-muscle__icon"]} src={dumbbellPicture} alt="dumbbell-icon"/>
                <Link
                    className={styles["review-create-content__build-muscle__link"]}
                    to="/buildmusclereviews">
                    BUILD MUSCLE
                </Link>
            </div>

            <div className={styles["review-create-content__build-power"]}>
                <img className={styles["review-create-content__build-power__icon"]} src={platePicture} alt="plate-icon"/>
                <Link
                    className={styles["review-create-content__build-power__link"]}
                    to="/buildpowerreviews">
                    BUILD POWER
                </Link>
            </div>

            <div className={styles["review-create-content__build-a-homegym"]}>
                <img className={styles["review-create-content__build-a-homegym__icon"]} src={toolsPicture} alt="tools-icon"/>
                <Link
                    className={styles["review-create-content__build-a-homegym__link"]}
                    to="/buildahomegymreviews">
                    BUILD A HOME GYM
                </Link>
            </div>
        </div>
    );
}

export default ReviewCreateContent;