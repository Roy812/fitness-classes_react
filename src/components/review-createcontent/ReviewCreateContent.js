import React from "react";
import styles from "./ReviewCreateContent.module.css";
import dietPicture from "../../assets/Diet(icon).png";
import {Link} from "react-router-dom";
import dumbbellPicture from "../../assets/Dumbbell(icon).png";
import platePicture from "../../assets/Plate(icon).png";
import toolsPicture from "../../assets/Tools(icon).png";

function ReviewCreateContent() {
    return(
        <div className={styles["review-create-link-content"]}>
            <div className={styles["review-create-link-content-title"]}>
                <h1>FIND REVIEWS FOR ALL YOU FAVOURITE CLASSES</h1>
            </div>
            <div className={styles["review-create-link-content-nutrition"]}>
                <img className={styles["review-create-link-content-nutrition-icon"]} src={dietPicture} alt="diet-icon"/>
                <Link
                    className={styles["review-create-link-content-nutrition-link"]}
                    to="/nutritionreviews"
                >
                    NUTRITION
                </Link>
            </div>
            <div className={styles["review-create-link-content-buildmuscle"]}>
                <img className={styles["review-create-link-content-buildmuscle-icon"]} src={dumbbellPicture} alt="dumbell-icon"/>
                <Link
                    className={styles["review-create-link-content-buildmuscle-link"]}
                    to="/buildmusclereviews"
                >
                    BUILD MUSCLE
                </Link>
            </div>
            <div className={styles["review-create-link-content-buildpower"]}>
                <img className={styles["review-create-link-content-buildpower-icon"]} src={platePicture} alt="plate-icon"/>
                <Link
                    className={styles["review-create-link-content-buildpower-link"]}
                    to="/buildpowerreviews"
                >
                    BUILD POWER
                </Link>
            </div>
            <div className={styles["review-create-link-content-buildahomegym"]}>
                <img className={styles["review-create-link-content-buildahomegym-icon"]} src={toolsPicture} alt="tools-icon"/>
                <Link
                    className={styles["review-create-link-content-buildahomegym-link"]}
                    to="/buildahomegymreviews"
                >
                    BUILD A HOME GYM
                </Link>
            </div>
        </div>
    );
}

export default ReviewCreateContent;