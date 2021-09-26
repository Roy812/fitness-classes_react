import React, { useState, useContext, useEffect } from "react";
import styles from "./ReviewCICOBody.module.css";
import axios from "axios";
import fourstars from "../../assets/Stars(4_5).svg";
import FilterReviewsByRating from "../../helpers/FilterReviewsByRating";
import oneStar from "../../assets/Stars_1_5.svg";
import twoStars from "../../assets/Stars_2_5.svg";
import threeStars from "../../assets/Stars_3_5.svg";
import fourStars from "../../assets/Stars(4_5).svg";
import fiveStars from "../../assets/Stars_5_5.svg";
import CountReviews from "../../helpers/CountReviews";


function ReviewCICOBody() {

    const jwtToken = localStorage.getItem('token');
    const [reviews, setReviews] = useState([]);
    const [ratings, setRatings] = useState([]);
    const [totalReviews, setTotalReviews] = useState();
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        async function loadReviews() {
            try {
                const title = 'CICO, ITs ALL YOU NEED';
                const result = await axios.get(`http://localhost:8080/users/review/findby/title/${title}`,
                    {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`,
                    }
                })
                console.log(result.data)
                setReviews(result.data);

                const arrayOfRatings = FilterReviewsByRating(result.data);
                console.log(arrayOfRatings);
                setRatings(arrayOfRatings);

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
        <div className={styles["review-CICO-body"]}>
            <h3 className={styles["review-CICO-body__total-reviews"]}>TOTAL REVIEWS ON THIS CLASS: {totalReviews}</h3>

            <p className={styles["review-CICO-body__review"]}>
                {reviews && reviews.map((review) => {
                    return <div key={review.id}>
                                <p className={styles["review-CICO-body__title"]}>{review.title}</p>
                                <p className={styles["review-CICO-body__username"]}>BY USER: {review.user.username}</p>
                                <p>{review.review}</p>
                                <p>{review.rating === 1 ? <img className={styles["review-CICO-body__stars"]} src={oneStar} alt="stars1-image"/> :
                                    review.rating === 2 ? <img className={styles["review-CICO-body__stars"]} src={twoStars} alt="stars2-image"/> :
                                    review.rating === 3 ? <img className={styles["review-CICO-body__stars"]} src={threeStars} alt="stars3-image"/> :
                                    review.rating === 4 ? <img className={styles["review-CICO-body__stars"]} src={fourstars} alt="stars4-image"/> :
                                    review.rating === 5 ? <img className={styles["review-CICO-body__stars"]} src={fiveStars} alt="stars5-image"/> :
                                        <p></p>}</p>
                            </div>
                })}
            </p>

            {notFound && <p className={styles["review-CICO-body__not-found"]}>REVIEWS NOT FOUND</p>}
        </div>
    );
}

export default ReviewCICOBody;