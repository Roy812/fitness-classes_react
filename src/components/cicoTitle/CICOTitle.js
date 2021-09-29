import React from "react";
import styles from "./CICOTitle.module.scss";


function CICOTitle({ title, teacher }) {

    return (
        <div className={styles["cico-title"]}>
            <p>{title}<br/>{teacher}</p>
        </div>
    );
}

export default CICOTitle;