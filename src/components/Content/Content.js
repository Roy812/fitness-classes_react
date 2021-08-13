import React from "react";
import styles from "./Content.module.css";
import cupPicture from "../../assets/Cup(final).svg";
import lockPicture from "../../assets/Lock(final).svg";
import playPicture from "../../assets/Play(final).svg";


function Content() {
    return (
        <div className={styles["content"]}>
            <div className={styles["content__icon__container"]}>
                <img className={styles["cup"]} src={cupPicture} alt="cup-image"/>
                <img className={styles["lock"]} src={lockPicture} alt="cup-image"/>
                <img className={styles["play"]} src={playPicture} alt="cup-image"/>
            </div>
            <div className={styles["content__line__container"]}>
                <div className={styles["line__one"]}>FITNESS CLASSES IS THE BEST WAY TO LEARN <br/> EXACTLY WHAT YOUR LOOKING FOR</div>
                <div className={styles["line__two"]}>RECEIVE EXCLUSIVE MEMBERSHIP OFFERS</div>
                <div className={styles["line__three"]}>(RE)WATCH YOUR CLASSES ANYTIME, ANYWHERE</div>
            </div>
        </div>
    )
}

export default Content;