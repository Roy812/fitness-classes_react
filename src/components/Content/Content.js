import React from "react";
import styles from "./Content.module.css";
import cupPicture from "../../assets/Cup(final).svg";
import lockPicture from "../../assets/Lock(final).svg";
import playPicture from "../../assets/Play(final).svg";


function Content() {
    return (
        <div className={styles["content"]}>
            <div className={styles["content__icon-container"]}>
                <img className={styles["content__icon-container__cup"]} src={cupPicture} alt="cup-image"/>
                <img className={styles["content__icon-container__lock"]} src={lockPicture} alt="cup-image"/>
                <img className={styles["content__icon-container__play"]} src={playPicture} alt="cup-image"/>
            </div>
            <div className={styles["content__line-container"]}>
                <div className={styles["content__icon-container__line1"]}>FITNESS CLASSES IS THE BEST WAY TO LEARN <br/> EXACTLY WHAT YOUR LOOKING FOR</div>
                <div className={styles["content__icon-container__line2"]}>RECEIVE EXCLUSIVE MEMBERSHIP OFFERS</div>
                <div className={styles["content__icon-container__line3"]}>(RE)WATCH YOUR CLASSES ANYTIME, ANYWHERE</div>
            </div>
        </div>
    );
}

export default Content;