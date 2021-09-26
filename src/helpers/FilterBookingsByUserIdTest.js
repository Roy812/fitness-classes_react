import React from "react";


function FilterBookingsByUserIdTest(bookings, userId) {
    //ADD AN EXTRA ARRAY TO THIS FUNCTION.
    const listOfBookings = [];
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.userId === userId) {
            listOfBookings.push(booking)
            // return bookings[i];
        }
    }
    return listOfBookings;
}

export default FilterBookingsByUserIdTest;