import React, {useContext, useState} from "react";
import styles from "./CICOContent.module.css";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function CICOContent({ payLink }) {

    const alles = useContext(AuthContext);
    const [downloadGuideSuccess, toggleDownloadGuideSuccess] = useState(false);
    const [downloadVideoSuccess, toggleDownloadVideoSuccess] = useState(false);
    const {handleSubmit} = useForm();
    const jwtToken = localStorage.getItem('token');

    async function onSubmitGuide() {
        try {
            axios({
                url: 'http://localhost:8080/lesson/download/guide/id/1',
                method: 'GET',
                responseType: 'blob', // important
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.jpg');
                document.body.appendChild(link);
                link.click();
            });
            toggleDownloadGuideSuccess(true);
        } catch (e) {
            console.error(e);
            }
        }

    async function onSubmitVideo() {
        try {
            axios({
                url: 'http://localhost:8080/lesson/download/video/id/1',
                method: 'GET',
                responseType: 'blob', // important
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            }).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.jpg');
                document.body.appendChild(link);
                link.click();
            });
            toggleDownloadVideoSuccess(true);
        } catch (e) {
            console.error(e);
        }
    }

    //     try {
    //         const lessonId = 1;
    //         const jwtToken = localStorage.getItem('token');
    //         const result = await axios.get(`http://localhost:8080/lesson/download/video/id/${lessonId}`, {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization: `Bearer ${jwtToken}`,
    //             }, responseType: "blob"
    //         })
    //         console.log(result);
    //         toggleDownloadVideoSuccess(true);
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    return (
        <div className={styles["CICO-content"]}>
            <Link
             className={styles["CICO-content__link"]}
             // to="/CICOpay"
             to={payLink}
            >
             SIGN UP FOR THIS CLASS HERE!
            </Link>

            <p className={styles["CICO-content__message"]}>PREPARATION MAKES PERFECT <br/> DOWNLOAD YOUR CLASS GUIDE/VIDEO</p>
            <form
                onSubmit={handleSubmit(onSubmitGuide)}
                className={styles["CICO-content__form1"]}
            >
                <button
                    className={styles["CICO-content__form1__button"]}
                    type="submit"
                >
                    DOWNLOAD GUIDE
                </button>
                {downloadGuideSuccess && <p
                    className={styles["cico-content__form1__download-guide-success"]}
                >
                    YOUR DOWNLOAD WILL NOW START!</p>}
            </form>

            <form
                onSubmit={handleSubmit(onSubmitVideo)}
                className={styles["CICO-content__form2"]}
            >
                <button
                    className={styles["CICO-content__form2__button"]}
                    type="submit"
                >
                    DOWNLOAD PREVIEW
                </button>
                {downloadVideoSuccess && <p
                    className={styles["CICO-content__form2__download-video-success"]}
                >
                    YOUR DOWNLOAD WILL NOW START!</p>}
            </form>
        </div>
    );
}

export default CICOContent;