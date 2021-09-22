import React, { useState, useContext, useEffect } from "react";
import styles from "./ReviewCICOBody.module.css";
import axios from "axios";
import fourstars from "../../assets/Stars(4_5).svg";
import { useForm } from "react-hook-form";
import FilterReviewsByRating4 from "../../helpers/FilterReviewsByRating4";


function ReviewCICOBody() {

    const jwtToken = localStorage.getItem('token');
    const [reviews, setReviews] = useState([]);
    const [notFound, toggleNotFound] = useState(false);
    // const { handleSubmit } = useForm();

    useEffect(() => {
        async function loadReviews() {
            try {
                const title = 'CICO';
                const result = await axios.get(`http://localhost:8080/users/review/findby/title/${title}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                })
                console.log(result.data)
                setReviews(result.data);
            } catch (e) {
                console.error(e)
                toggleNotFound(true);
            }
        }
        loadReviews();
    }, [])

    return (
        <div className={styles["review-cico-body"]}>
            <form>
                <button
                    className={styles["review-cico-body__form-button"]}
                    type="submit"
                >
                    GET REVIEWS..
                </button>
                {notFound && <p
                    className={styles["review-cico-body__form__review-not-found"]}
                >
                    REVIEWS NOT FOUND..</p>}
            </form>
            <h3
                className={styles["review-cico-body__title"]}>
                "CICO, IT's ALL YOU NEED"<br/>
                REVIEW BY USER
            </h3>

            <p className={styles["review-cico-body__text"]}>
                THIS CLASS HELPED ME TO <br/>
                UNDERSTAND WHY IT IS EASY TO <br/>
                OVERCOMPLICATE YOUR DIET <br/>
                GREG EXPLAINS STEP BY STEP <br/>
                A PRACTICAL APPROACH TO A <br/>
                CIRCLE DIET LIFESTYLE
            </p>

            <img className={styles["review-cico-body__fourstars"]} src={fourstars} alt="fourstars-image"/>

            <div>
                {/*{reviews && reviews.map((review) => {*/}
                {/*    return <p key={review.id}>{review.title}</p>*/}
                {/*})}*/}
                {reviews}
            </div>
        </div>
    );
}

export default ReviewCICOBody;