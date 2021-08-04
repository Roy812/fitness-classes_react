import React from "react";
import styles from "./Header.module.css";
import logopicture from "../../assets/Logo F.C. (1).svg";

function Header( {title_1, title_2, title_3, title_4} ) {
    return (
      <>
        <div className={styles["header_container"]} >
            <img className={styles["logo_fc"]} src={logopicture} alt="logo" />
            <span className={styles["title"]} >{title_1}</span>
            <span className={styles["title"]} >{title_2}</span>
            <span className={styles["title"]} >{title_3}</span>
            <span className={styles["title"]} >{title_4}</span>
        </div>
        <div className={styles["bar_container"]} >
            <div className={styles["phantom"]} ></div>
            <div className={styles["bar_one"]}></div>
            <div className={styles["bar_two"]}></div>
            <div className={styles["bar_three"]}></div>
            <div className={styles["bar_four"]}></div>
        </div>
      </>
    )
}

export default Header;