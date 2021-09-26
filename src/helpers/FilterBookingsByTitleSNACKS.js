import React from "react";

function FilterBookingsByTitleSNACKS(bookings) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.title === "SNACKS") {
            count++;
        }
    }
    return count;
}

export default FilterBookingsByTitleSNACKS;