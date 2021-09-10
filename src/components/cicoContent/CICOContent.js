import React, { useState } from "react";
import styles from "./CICOContent.module.css";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function CICOContent() {

    const [downloadGuideSuccess, toggleDownloadGuideSuccess] = useState(false);
    const [downloadVideoSuccess, toggleDownloadVideoSuccess] = useState(false);
    const {handleSubmit} = useForm();

    async function onSubmitGuide() {
        // console.log(data);
        try {
            const result = await axios.get('http://localhost:8080/lesson/download/guide/id/{id}', {
            //USE EFFECT TO GET LESSON ID FOR PATH VARIABLE.
            })
            console.log(result);
            toggleDownloadGuideSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitVideo() {
        // console.log(data);
        try {
            const result = await axios.get('http://localhost:8080/lesson/download/video/id/{id}', {
                //USE EFFECT TO GET LESSON ID FOR PATH VARIABLE.
            })
            console.log(result);
            toggleDownloadVideoSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["CICO-content"]}>
            <Link
             className={styles["CICO-content__link"]}
             to="/CICOpay"
            >
             SIGN UP FOR THIS CLASS HERE!
            </Link>

            <p className={styles["CICO-content__message"]}>PREPARATION MAKES PERFECT <br/> DOWNLOAD YOUR CLASS GUIDE/VIDEO</p>
            <form onSubmit={handleSubmit(onSubmitGuide)}>
                <button
                    className={styles["CICO-content__button"]}
                    type="submit"
                >
                    DOWNLOAD GUIDE
                </button>
                {downloadGuideSuccess && <p>Your download will now start!</p>}
            </form>

            <form onSubmit={handleSubmit(onSubmitVideo)}>
                <button
                    className={styles["CICO-content__button"]}
                    type="submit"
                >
                    DOWNLOAD VIDEO
                </button>
                {downloadVideoSuccess && <p>Your download will now start!</p>}
            </form>
        </div>
    );
}

export default CICOContent;