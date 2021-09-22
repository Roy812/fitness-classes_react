import React from "react";

function CountLessons(bookings) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.lessonId === 1) {
            count++;
        }
    }
    return count;
}

export default CountLessons;