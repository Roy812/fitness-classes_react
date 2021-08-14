import React from "react";
import styles from "./Quotes.module.css";


function Quotes() {
    return (
        <div className={styles["quotes"]}>
            <span className={styles["quote__one"]}>LIFT BIG WEIGHTS</span>
            <span className={styles["quote__two"]}>STUDY YOUR DIET</span>
            <span className={styles["quote__three"]}>BUILD YOUR DREAM HOME GYM</span>
        </div>
    )
}

export default Quotes;