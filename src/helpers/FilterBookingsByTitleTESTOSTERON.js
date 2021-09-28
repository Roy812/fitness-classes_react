import React from "react";

function FilterBookingsByTitleTESTOSTERON(bookings) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.title === "TESTOSTERONE") {
            count++;
        }
    }
    return count;
}

export default FilterBookingsByTitleTESTOSTERON;