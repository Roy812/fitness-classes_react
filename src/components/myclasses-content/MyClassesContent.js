import React from "react";
import styles from "./MyClassesContent.module.css";

function MyClassesContent() {
    return(
        <div className={styles["myclasses-content"]}>
            <h3 className={styles["myclasses-content-message"]}>MY CLASSES</h3>
        </div>
    );
}

export default MyClassesContent;