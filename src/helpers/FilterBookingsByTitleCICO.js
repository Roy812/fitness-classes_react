function FilterBookingsByTitleCICO(bookings) {
    let count = 0;
    for (let i = 0; i < bookings.length; i++) {
        const booking = bookings[i];
        if (booking.title === "CICO, ITs ALL YOU NEED") {
            count++;
        }
    }
    return count;
}

export default FilterBookingsByTitleCICO;