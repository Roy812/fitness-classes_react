import React from "react";
import styles from "./ReviewCICOBody.module.css";
import fourstars from "../../assets/Stars(4_5).svg";

function ReviewCICOBody() {
    return(
        <div className={styles["review-cico-body"]}>
            <h3
                className={styles["review-cico-body-title"]}
            >
                "CICO, IT's ALL YOU NEED"<br/>
                REVIEW BY USER
            </h3>
            <p className={styles["review-cico-body-text"]}>
                THIS CLASS HELPED ME TO <br/>
                UNDERSTAND WHY IT IS EASY TO <br/>
                OVERCOMPLICATE YOUR DIET <br/>
                GREG EXPLAINS STEP BY STEP <br/>
                A PRACTICAL APPROACH TO A <br/>
                CIRCLE DIET LIFESTYLE
            </p>
            <img className={styles["review-cico-body-fourstars"]} src={fourstars} alt="fourstars-image"/>
        </div>
    );
}

export default ReviewCICOBody;