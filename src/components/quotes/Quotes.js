import React from "react";
import styles from "./Quotes.module.css";
import lockpicture from "../../assets/Lock(final).svg";
import cuppicture from "../../assets/Cup(final).svg";
import playpicture from "../../assets/Play(final).svg";
import checkpicture from "../../assets/check.svg";

function Quotes( {quote_1, quote_2, quote_3} ) {
    return (
        <>
          <div className={styles["quotes_direction_container"]} >
              <img className={styles["lock"]} src={lockpicture} alt="lock_image"/>
              <img className={styles["cup"]} src={cuppicture} alt="cup_image"/>
              <img className={styles["play"]} src={playpicture} alt="play_image"/>
            <div className={styles["quote_container"]} >
                <h2 className={styles["quote"]} >{quote_1}</h2>
                <h2 className={styles["quote"]} >{quote_2}</h2>
                <h2 className={styles["quote"]} >{quote_3}</h2>
              <div className={styles["button_container"]} >
                  <h2>Made Up Your Mind</h2>
                  <button className={styles["button_smu"]} type="button"
                  >Sign Me Up
                  </button>
                  <img className={styles["check"]} src={checkpicture} alt="check_image"/>
                </div>
            </div>
          </div>
        </>
    )
}

export default Quotes;