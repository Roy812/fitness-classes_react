import React from "react";
import styles from "./CICOFooter.module.css";
import {Link} from "react-router-dom";

function CICOFooter() {
    return(
        <div className={styles["cico-footer"]}>
            <h3
                className={styles["cico-footer-message"]}
            >
                REVIEW THIS CLASS <br/> AND MAKE YOUR LEARNING <br/> EXPERIENCE EVEN BETTER
            </h3>
            <Link
                className={styles["cico-footer-reviewlink"]}
                to="/review"
            >
                REVIEW
            </Link>
        </div>
    );
}

export default CICOFooter;