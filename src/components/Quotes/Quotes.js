import React from "react";
import styles from "./Quotes.module.scss";


function Quotes() {

    return (
        <div className={styles["quotes"]}>
            <span className={styles["quotes__one"]}>LIFT BIG WEIGHTS</span>
            <span className={styles["quotes__two"]}>STUDY YOUR DIET</span>
            <span className={styles["quotes__three"]}>BUILD YOUR DREAM HOME GYM</span>
        </div>
    )
}

export default Quotes;