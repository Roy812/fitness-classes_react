import React from "react";
import styles from "./CICOTitle.module.css";

function CICOTitle({ title, teacher }) {
    return (
        <div className={styles["CICO-title"]}>
            <p>{title}<br/>{teacher}</p>
        </div>
    );
}

export default CICOTitle;