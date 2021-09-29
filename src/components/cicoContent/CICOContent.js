import React, { useState } from "react";
import styles from "./CICOContent.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


function CICOContent({ payLink }) {

    const { handleSubmit } = useForm();
    const [downloadGuideSuccess, toggleDownloadGuideSuccess] = useState(false);
    const [downloadVideoSuccess, toggleDownloadVideoSuccess] = useState(false);
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

    return (
        <div className={styles["cico-content"]}>
            <Link
             className={styles["cico-content__link"]}
             to={payLink}
            >
             SIGN UP FOR THIS CLASS HERE!
            </Link>

            <p className={styles["cico-content__message"]}>PREPARATION MAKES PERFECT <br/> DOWNLOAD YOUR CLASS GUIDE/VIDEO</p>

            <form
                onSubmit={handleSubmit(onSubmitGuide)}
                className={styles["cico-content__form1"]}
            >
                <button
                    className={styles["cico-content__form1__button"]}
                    type="submit"
                >
                    DOWNLOAD GUIDE
                </button>
                {downloadGuideSuccess && <p>YOUR DOWNLOAD WILL NOW START!</p>}
            </form>

            <form
                onSubmit={handleSubmit(onSubmitVideo)}
                className={styles["cico-content__form2"]}
            >
                <button
                    className={styles["cico-content__form2__button"]}
                    type="submit"
                >
                    DOWNLOAD PREVIEW
                </button>
                {downloadVideoSuccess && <p>YOUR DOWNLOAD WILL NOW START!</p>}
            </form>
        </div>
    );
}

export default CICOContent;