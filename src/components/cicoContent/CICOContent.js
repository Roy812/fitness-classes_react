import React, { useState } from "react";
import styles from "./CICOContent.module.css";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function CICOContent() {

    const [downloadGuideSuccess, toggleDownloadGuideSuccess] = useState(false);
    const {handleSubmit} = useForm();

    async function onSubmit() {
        // console.log(data);
        try {
            const result = await axios.post('http://localhost:8080/lesson/download/guid/id/{id}', {
            //USE EFFECT TO GET USERID FOR PATH VARIABLE.
            })
            console.log(result);
            toggleDownloadGuideSuccess(true);
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
            <p className={styles["CICO-content__message"]}>PREPARATION MAKES PERFECT <br/> DOWNLOAD YOUR CLASS GUIDE</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <button
                    className={styles["CICO-content__button"]}
                    type="text"
                >
                    DOWNLOAD GUIDE
                </button>
                {downloadGuideSuccess && <p>Your download will now start!</p>}
            </form>
        </div>
    );
}

export default CICOContent;