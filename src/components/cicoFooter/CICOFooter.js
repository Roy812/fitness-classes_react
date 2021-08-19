import React from "react";
import styles from "./CICOFooter.module.css";
import {Link} from "react-router-dom";

function CICOFooter() {
    return(
        <div className={styles["CICO-footer"]}>
            <Link
                className={styles["CICO-footer__link"]}
                to="reviews"
            >
                REVIEW THIS CLASS <br/> AND MAKE YOUR LEARNING <br/> EXPERIENCE EVEN BETTER
            </Link>
            {/*<Link*/}
            {/*    className={styles["CICO-footer__review-link"]}*/}
            {/*    to="/review"*/}
            {/*>*/}
            {/*    REVIEW*/}
            {/*</Link>*/}
        </div>
    );
}

export default CICOFooter;