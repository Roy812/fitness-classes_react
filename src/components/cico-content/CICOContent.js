import React from "react";
import styles from "./CICOContent.module.css";

function CICOContent() {
    return(
        <div className={styles["CICO-content"]}>
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