import React from "react";
import styles from "./AboutContent.module.css";

function AboutContent() {
    return(
        <div className={styles["about-content"]}>
            <div className={styles["about-content__item1"]}>
                <h3>
                    F.C. IS A PLATFORM FOR ALL FITNESS ENTHOUSIASTS.
                    IT DIVES DEEPER INTO SPECIFIC TOPICS SUCH AS DIETS,
                    STRENGTH TRAINING AND BUILDING A HOME GYM.
                </h3>
            </div>
            <div className={styles["about-content__item2"]}>
                <h3>
                    MEMBERSHIP IS WITHOUT OBLIGATIONS, YOUR FIRST LESSON IS FOR FREE.
                    AFTER YOUR FIRST FREE LESSON, YOU CAN UPGRADE YOUR ACCOUNT WITH COINS.
                    THE CONCEPT IS VERY SIMPLE, ONE COIN PER LESSON IS PAID.
                </h3>
            </div>
            <div className={styles["about-content__item3"]}>
                <h3>
                    AFTER WATCHING A CLASS YOU CAN LEAVE A REVIEW ABOUT IT.
                    YOU CAN ALSO MAKE A REQUEST ABOUT CONTENT YOU'D LIKE TO SEE IN THE FUTURE.
                </h3>
            </div>
        </div>
    );
}

export default AboutContent;