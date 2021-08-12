import React from "react";
import styles from "./CICOContent.module.css";
import {Link} from "react-router-dom";

function CICOContent() {
    return(
        <div className={styles["CICO-content"]}>
            <Link
             className={styles["CICO-content-link"]}
             to="/CICOpay"
            >
             SIGN UP FOR THIS CLASS HERE!
            </Link>
            <h4 className={styles["CICO-content-message"]}>PREPARATION MAKES PERFECT <br/> DOWNLOAD YOUR CLASS GUIDE</h4>
            <button
                className={styles["CICO-content-button"]}
                type="text"
            >
                DOWNLOAD GUIDE
            </button>
        </div>
    );
}

export default CICOContent;