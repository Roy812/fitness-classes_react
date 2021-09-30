import React from "react";
import styles from "./CICOFooter.module.scss";
import { Link } from "react-router-dom";


function CICOFooter() {
    return (
        <div className={styles["cico-footer"]}>
            <Link
                className={styles["cico-footer__link"]}
                to="reviews"
            >
                REVIEW THIS CLASS <br/> AND MAKE YOUR LEARNING <br/> EXPERIENCE EVEN BETTER
            </Link>
        </div>
    );
}

export default CICOFooter;