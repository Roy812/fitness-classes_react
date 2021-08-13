import React from "react";
import styles from "./CICOPayContent.module.css";

function CICOPayContent() {
    return(
        <div className={styles["CICO-pay-content"]}>
            <h3 className={styles["CICO-pay-content__title"]}>YOU ARE ABOUT TO PAY ONE<br/>
                COIN CREDIT TO GRANT<br/>
                ACCESS TO THIS CLASS
            </h3>

            <h3 className={styles["CICO-pay-content__enter-mail"]}>
                ENTER YOUR MAIL ADDRESS
            </h3>

            <input
                className={styles["CICO-pay-content__input-mail"]}
                type="text"
                placeholder="MAIL ADDRESS HERE"/>

            <h3 className={styles["CICO-pay-content__enter-password"]}>
                ENTER YOUR PASSWORD
            </h3>

            <input
                className={styles["CICO-pay-content__input-password"]}
                type="text"
                placeholder="PASSWORD HERE"
            />

            <h3 className={styles["CICO-pay-content__confirm"]}>
                TO COMPLETE YOUR PAYMENT,<br/>
                PRESS CONFIRM
            </h3>

            <button
                className={styles["CICO-pay-content__confirm-button"]}>
            CONFIRM
            </button>
        </div>
    );
}

export default CICOPayContent;