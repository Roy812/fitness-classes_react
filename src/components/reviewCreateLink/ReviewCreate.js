import React from "react";
import styles from "./ReviewCreate.module.css";
import greenplusPicture from "../../assets/Greenplus.svg";
import {Link} from "react-router-dom";

function ReviewCreate() {
    return (
        <div className={styles["review-create"]}>
            <img className={styles["review-create__plus-icon"]} src={greenplusPicture} alt="greenplus-image"/>
            <Link
            className={styles["review-create__link"]}
            to="/createreview">
            CREATE REVIEW
            </Link>
        </div>
    );
}

export default ReviewCreate;