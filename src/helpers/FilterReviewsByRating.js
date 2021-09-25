import React from "react";
import styles from "../components/reviewCicoBody/ReviewCICOBody.module.css";
import fourstars from "../assets/Stars(4_5).svg";

function FilterReviewsByRating(reviews) {
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 1) {
            return reviews[i];
        }
    }
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 2) {
            return reviews[i];
        }
    }
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 3) {
            return reviews[i];
        }
    }
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 4) {
            return reviews[i];
        }
    }
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 5) {
            return reviews[i];
        }
    }
}

export default FilterReviewsByRating;