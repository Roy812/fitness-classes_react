import React from "react";
import styles from "./LoginContent.module.css";
import cupPicture from "../../assets/Cup(final).svg";
import lockPicture from "../../assets/Lock(final).svg";
import exclamationPicture from "../../assets/Exclamation(image).png";
import {Link} from "react-router-dom";

function LoginContent() {
    return(
        <div className={styles["login-content"]}>
            <div className={styles["login-content__icons"]}>
                <img className={styles["cup"]} src={cupPicture} alt="cup-image"/>
                <img className={styles["lock"]} src={lockPicture} alt="lock-image"/>
                <img className={styles["exclamation"]} src={exclamationPicture} alt="exclamation-image"/>
            </div>
            <div className={styles["login-content__lines"]}>
                <div className={styles["line__one"]}>FITNESS CLASSES IS THE BEST WAY TO LEARN <br/> EXACTLY WHAT YOUR LOOKING FOR</div>
                <div className={styles["line__two"]}>RECEIVE EXCLUSIVE MEMBERSHIP OFFERS</div>
                    <Link
                        to="/myclasses"
                        className={styles["login-content__lines-link1"]}
                        >
                        <p className={styles["login-content__lines-linkmessage1"]}>LEARN MORE</p>
                    </Link>
                <div className={styles["line__three"]}>HAVE YOUR CHECKED OUT THE F.C. NEWSLETTER?</div>
                <Link
                    to="/newsletter"
                    className={styles["login-content__lines-link2"]}
                    >
                    <p className={styles["login-content__lines-linkmessage2"]}>READ NOW</p>
                </Link>
            </div>
        </div>
    );
}

export default LoginContent;