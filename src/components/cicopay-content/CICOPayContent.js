import React from "react";
import styles from "./CICOPayContent.module.css";

function CICOPayContent() {
    return(
        <div className={styles["cicopay-content"]}>
            <h3 className={styles["cicopay-content-title"]}>YOU ARE ABOUT TO PAY ONE <br/>
                COIN CREDIT TO GRANT <br/>
                ACCESS TO THIS CLASS
            </h3>
            <h3 className={styles["cicopay-content-entermail"]}>
                ENTER YOUR MAIL ADDRESS
            </h3>
            <label>
                <input
                    className={styles["cicopay-content-inputmail"]}
                    type="text"
                    placeholder="MAIL ADDRESS HERE"
                />
            </label>
            <h3 className={styles["cicopay-content-enterpassword"]}>
                ENTER YOUR PASSWORD
            </h3>
            <label>
                <input
                    className={styles["cicopay-content-inputpassword"]}
                    type="text"
                    placeholder="PASSWORD HERE"
                />
            </label>
            <h3 className={styles["cicopay-content-confirm"]}>
                TO COMPLETE YOUR PAYMENT, <br/>
                PRESS CONFIRM
            </h3>
            <button
                className={styles["cicopay-content-confirm-button"]}
            >
            CONFIRM
            </button>
        </div>
    );
}

export default CICOPayContent;