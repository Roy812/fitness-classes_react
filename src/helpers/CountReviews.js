import React from "react";

function CountReviews(bookings) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        count++;
    }
    return count;
}

export default CountReviews;