import React from "react";


function FilterReviewsByRating(reviews) {
    const listOfRatings = [];
    for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        listOfRatings.push(review.rating);
    }
    return listOfRatings;

    // for (let i = 0; i < reviews.length; i++) {
    //     const review = reviews[i];
    //     if (review.rating === 1) {
    //         listOfRatings.push(review[i]);
    //         // return reviews[i];
    //     }
    // }
    // for (let i = 0; i < reviews.length; i++) {
    //     const review = reviews[i];
    //     if (review.rating === 2) {
    //         listOfRatings.push(review[i]);
    //         // return reviews[i];
    //     }
    // }
    // for (let i = 0; i < reviews.length; i++) {
    //     const review = reviews[i];
    //     if (review.rating === 3) {
    //         listOfRatings.push(review[i]);
    //         // return reviews[i];
    //     }
    // }
    // for (let i = 0; i < reviews.length; i++) {
    //     const review = reviews[i];
    //     if (review.rating === 4) {
    //         listOfRatings.push(review[i]);
    //         // return reviews[i];
    //     }
    // }
    // for (let i = 0; i < reviews.length; i++) {
    //     const review = reviews[i];
    //     if (review.rating === 5) {
    //         listOfRatings.push(review[i]);
    //         // return reviews[i];
    //     }
    // }
    // return listOfRatings;
}

export default FilterReviewsByRating;