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
    const [rating, setRating] = useState();
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
                // console.log(result);
                console.log(result.data)
                setReviews(result.data);
                const filter = FilterReviewsByRating(result.data);
                console.log(filter.rating);
                setRating(filter.rating);

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
            <h3 className={styles["review-CICO-body__title"]}>
                CICO, IT's ALL YOU NEED
                {reviews && reviews.map((review) => {
                    return <p className={styles["review-CICO-body__username"]} key={review.id}>BY USER: {review.review}</p>
                })}
                {/*{review.user.username}*/}
            </h3>

            <p className={styles["review-CICO-body__review"]}>
                {reviews && reviews.map((review) => {
                    // return <p key={review.id}>{review.review}</p>
                    return <li key={review.id}>{review.review}</li>
                })}
            </p>

            <div>
                {rating === 1 ? <img className={styles["review-CICO-body__stars"]} src={oneStar} alt="fourstars-image"/> :
                <p></p>}
                {rating === 2 ? <img className={styles["review-CICO-body__stars"]} src={twoStars} alt="fourstars-image"/> :
                <p></p>}
                {rating === 3 ? <img className={styles["review-CICO-body__stars"]} src={threeStars} alt="fourstars-image"/> :
                <p></p>}
                {rating === 4 ? <img className={styles["review-CICO-body__stars"]} src={fourstars} alt="fourstars-image"/> :
                <p></p>}
                {rating === 5 ? <img className={styles["review-CICO-body__stars"]} src={fiveStars} alt="fourstars-image"/> :
                <p></p>}
            </div>
            <h3 className={styles["review-CICO-body__total-reviews"]}>TOTAL REVIEWS ON THIS CLASS: {totalReviews}</h3>
        </div>
    );
}

export default ReviewCICOBody;