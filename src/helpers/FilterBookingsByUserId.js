import React from "react";

const id = localStorage.getItem('id');

function FilterBookingsByUserId(bookings) {
    //ADD AN EXTRA ARRAY TO THIS FUNCTION.
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.id === id) {
            return bookings[i];
        }
    }
}

export default FilterBookingsByUserId;