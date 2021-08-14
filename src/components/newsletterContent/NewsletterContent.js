import React from "react";
import styles from "./NewsletterContent.module.css";
import {Link} from "react-router-dom";

function NewsletterContent() {
    return (
        <div className={styles["newsletter-content"]}>
            <Link
                className={styles["newsletter-content__link"]}
                to="/newsletter">
                EPISODE 1. - BIG DISCOUNTS THIS WEEK ON F.C.
            </Link>

            <Link
                className={styles["newsletter-content__link"]}
                to="/newsletter">
                EPISODE 2. - MENTAL HEALTH AT THE HIGHEST LEVEL OF SPORTS.
            </Link>

            <Link
                className={styles["newsletter-content__link"]}
                to="/newsletter">
                EPISODE 3. - UPCOMING CLASSES THIS MONTH ON F.C.
            </Link>

            <Link
                className={styles["newsletter-content__link"]}
                to="/newsletter">
                EPISODE 4. - TOP TEN POWER RACKS FOR A FAIR PRICE.
            </Link>
        </div>
    );
}

export default NewsletterContent;