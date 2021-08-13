import React from "react";
import styles from "./CICOFooter.module.css";
import {Link} from "react-router-dom";

function CICOFooter() {
    return(
        <div className={styles["CICO-footer"]}>
            <h3
                className={styles["CICO-footer__message"]}
            >
                REVIEW THIS CLASS <br/> AND MAKE YOUR LEARNING <br/> EXPERIENCE EVEN BETTER
            </h3>
            <Link
                className={styles["CICO-footer__review-link"]}
                to="/review"
            >
                REVIEW
            </Link>
        </div>
    );
}

export default CICOFooter;