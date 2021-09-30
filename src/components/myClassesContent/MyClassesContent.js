import React, { useContext, useState } from "react";
import styles from "./MyClassesContent.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import FilterBookingsByTitleCICO from "../../helpers/FilterBookingsByTitleCICO";
import FilterBookingsByTitleSNACKS from "../../helpers/FilterBookingsByTitleSNACKS";
import FilterBookingsByTitleTESTOSTERON from "../../helpers/FilterBookingsByTitleTESTOSTERON";


function MyClassesContent() {

    const { handleSubmit } = useForm();
    const [bookings, setBookings] = useState([]);
    const [countBookingsCICO, setCountBookingsCICO] = useState();
    const [countBookingsSNACKS, setCountBookingsSNACKS] = useState();
    const [countBookingsTESTOSTERON, setCountBookingsTESTOSTERON] = useState();
    const [notFound, toggleNotFound] = useState(false);
    const { user } = useContext(AuthContext);
    const jwtToken = localStorage.getItem('token');

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
            const CICO = FilterBookingsByTitleCICO(result.data);
            setCountBookingsCICO(CICO);
            const SNACKS = FilterBookingsByTitleSNACKS(result.data);
            setCountBookingsSNACKS(SNACKS);
            const TESTOSTERON = FilterBookingsByTitleTESTOSTERON(result.data);
            setCountBookingsTESTOSTERON(TESTOSTERON);
        } catch (e) {
            console.error(e)
            toggleNotFound(true);
        }
    }

    return (
      <div className={styles["my-classes-content"]}>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["my-classes-content__form"]}
        >
            <button
                className={styles["my-classes-content__form__button"]}
                type="submit">
                GET MY BOOKINGS
            </button>
            {notFound && <h1>BOOKINGS NOT FOUND..</h1>}
        </form>

        <div className={styles["my-classes-content__bookings"]}>
            BOOKINGS OF USER: {user.username}
            {bookings && bookings.map((booking) => {
                return <div className={styles["my-classes-content__search-result"]} key={booking.id}>
                            <h1>{booking.user.id === user.id && booking.lesson.id === 1 ? <h1>CICO</h1> : <p />}</h1>
                            <h1>{booking.user.id === user.id && booking.lesson.id === 2 ? <h1>SNACKS</h1> : <p />}</h1>
                            <h1>{booking.user.id === user.id && booking.lesson.id === 3 ? <h1>TESTOSTERONE</h1> : <p />}</h1>
                        </div>
            })}
            <h2>TOTAL BOOKINGS CICO: {countBookingsCICO}</h2>
            <h2>TOTAL BOOKINGS SNACKS: {countBookingsSNACKS}</h2>
            <h2>TOTAL BOOKINGS TESTOSTERONE: {countBookingsTESTOSTERON}</h2>
        </div>
      </div>
    );
}

export default MyClassesContent;