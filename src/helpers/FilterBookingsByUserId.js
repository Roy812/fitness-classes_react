import React from "react";

const id = localStorage.getItem('id');

function filterBookingsByUserId(data) {
    return data.filter((item) => {
        return item.userId === id;
    });
}

export default filterBookingsByUserId;