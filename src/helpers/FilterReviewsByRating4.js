import React from "react";

function FilterReviewsByRating4(reviews) {
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        if (review.rating === 4) {
            return reviews[i];
        }
    }
}

export default FilterReviewsByRating4;