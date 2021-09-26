import React from "react";

function FilterBookingsByLessonIdTESTOSTERON(bookings, lessonId) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.lessonId === lessonId) {
            count++;
        }
    }
    return count;
}

export default FilterBookingsByLessonIdTESTOSTERON;