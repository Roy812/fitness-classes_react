import React from "react";

const id = localStorage.getItem('id');

function FilterBookingsByUserId(bookings) {
    //ADD AN EXTRA ARRAY TO THIS FUNCTION.
    const listOfBookings = [];
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.id === id) {
            listOfBookings.push(booking)
            // return bookings[i];
        }
    }
    return listOfBookings;
}

export default FilterBookingsByUserId;