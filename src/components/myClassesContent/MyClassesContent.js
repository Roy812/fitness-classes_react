import React, {useContext, useState} from "react";
import styles from "./MyClassesContent.module.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import FilterBookingsByUserId from "../../helpers/FilterBookingsByUserId";
import CountLessons from "../../helpers/CountLessons";

function MyClassesContent() {

    const jwtToken = localStorage.getItem('token');
    const {handleSubmit} = useForm();
    const [bookings, setBookings] = useState([]);
    const [notFound, toggleNotFound] = useState(false);

    async function onSubmit() {
        try {
            const result = await axios.get(`http://localhost:8080/agenda/find/all`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            setBookings(result.data);
        } catch (e) {
            console.error(e)
            toggleNotFound(true);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["my-classes-content"]}
        >
            <button
                className={styles["my-classes-content__button"]}
                type="submit">
                GET MY BOOKINGS
            </button>
            {/*<h3 className={styles["my-classes-content__message"]}>resultSearch</h3>*/}
            {notFound && <p
                className={styles["my-classes-content__bookings-not-found"]}
            >
                BOOKINGS NOT FOUND..</p>}
            <div>{bookings}</div>
        </form>
    );
}

export default MyClassesContent;