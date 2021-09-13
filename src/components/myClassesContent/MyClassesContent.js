import React from "react";
import styles from "./MyClassesContent.module.css";

function MyClassesContent() {
    return (
        <div className={styles["my-classes-content"]}>
            <h3 className={styles["my-classes-content__message"]}>MY CLASSES</h3>
        </div>
    );
}

export default MyClassesContent;