import React, { useState, useEffect } from "react";
import styles from "./ReviewCICOBody.module.scss";
import axios from "axios";
import fourstars from "../../assets/Stars(4_5).svg";
import oneStar from "../../assets/Stars_1_5.svg";
import twoStars from "../../assets/Stars_2_5.svg";
import threeStars from "../../assets/Stars_3_5.svg";
import fourStars from "../../assets/Stars(4_5).svg";
import fiveStars from "../../assets/Stars_5_5.svg";
import CountReviews from "../../helpers/CountReviews";


function ReviewCICOBody({ title }) {

    const jwtToken = localStorage.getItem('token');
    const [reviews, setReviews] = useState([]);
    const [totalReviews, setTotalReviews] = useState();
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        async function loadReviews() {
            try {
                // const title = 'CICO, ITs ALL YOU NEED';
                const result = await axios.get(`http://localhost:8080/users/review/findby/title/${title}`,
                    {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                })
                console.log(result.data)
                setReviews(result.data);
                const totalReviews = CountReviews(result.data);
                setTotalReviews(totalReviews);
            } catch (e) {
                console.error(e)
                toggleNotFound(true);
            }
        }
        loadReviews();
    }, [])

    return (
        <div className={styles["review-cico-body"]}>
            <h3>TOTAL REVIEWS ON THIS CLASS: {totalReviews}</h3>

            <h1>
                {reviews && reviews.map((review) => {
                    return <div key={review.id}>
                        <h2>{review.title}</h2>
                        <h4>BY USER: {review.user.username}</h4>
                        <div>{review.review}</div>
                        <div>{review.rating === 1 ? <img className={styles["review-cico-body__stars"]} src={oneStar} alt="stars1-image"/> :
                            review.rating === 2 ? <img className={styles["review-cico-body__stars"]} src={twoStars} alt="stars2-image"/> :
                                review.rating === 3 ? <img className={styles["review-cico-body__stars"]} src={threeStars} alt="stars3-image"/> :
                                    review.rating === 4 ? <img className={styles["review-cico-body__stars"]} src={fourstars} alt="stars4-image"/> :
                                        review.rating === 5 ? <img className={styles["review-cico-body__stars"]} src={fiveStars} alt="stars5-image"/> :
                                            <p />}</div>
                    </div>
                })}
            </h1>

            {notFound && <h5>REVIEWS NOT FOUND..</h5>}
            {totalReviews === 0 && <h6>THERE ARE NO REVIEWS FOR THIS CLASS..</h6>}
        </div>
    );
}

export default ReviewCICOBody;