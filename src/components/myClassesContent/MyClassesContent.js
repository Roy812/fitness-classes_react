import React, {useContext, useState} from "react";
import styles from "./MyClassesContent.module.css";
import axios from "axios";
import {useForm} from "react-hook-form";
import FilterBookingsByTitleCICO from "../../helpers/FilterBookingsByTitleCICO";
import FilterBookingsByTitleSNACKS from "../../helpers/FilterBookingsByTitleSNACKS";
import FilterBookingsByTitleTESTOSTERON from "../../helpers/FilterBookingsByTitleTESTOSTERON";
import {AuthContext} from "../../context/AuthContext";

function MyClassesContent() {

    const { user } = useContext(AuthContext);
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');
    const {handleSubmit} = useForm();
    const [bookings, setBookings] = useState([]);
    const [countBookingsCICO, setCountBookingsCICO] = useState();
    const [countBookingsSNACKS, setCountBookingsSNACKS] = useState();
    const [countBookingsTESTOSTERON, setCountBookingsTESTOSTERON] = useState();
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

            // console.log(userId);
            const CICO = FilterBookingsByTitleCICO(result.data);
            console.log(CICO);
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
      <>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles["my-classes-content"]}
        >
            <button
                className={styles["my-classes-content__button"]}
                type="submit">
                GET MY BOOKINGS
            </button>
            {notFound && <p
                className={styles["my-classes-content__bookings-not-found"]}
            >
                BOOKINGS NOT FOUND..</p>}
        </form>

        <div className={styles["my-classes-content__bookings"]}>
            BOOKINGS OF USER: {user.username}
            {bookings && bookings.map((booking) => {
                return <div key={booking.id}>
                            {/*<p>BOOKINGS OF USER: {booking.user.username}</p>*/}
                            {/*<p className={styles["my-classes-content__bookings__title"]}>{booking.title}</p>*/}
                            {/*<p>CICO IS BOOKED {booking.user.id} TIMES IN TOTAL</p>*/}
                            {/*<p>{booking.user.username}</p>*/}
                            {/*<p>{booking.user.id === 2 && booking.lesson.id === 2 ? <p>SNACKS</p> : <p></p>}</p>*/}
                            <p>{booking.user.id === user.id && booking.lesson.id === 1 ? <p className={styles["my-classes-content__bookings__item1"]}>CICO</p> : <p></p>}</p>
                            <p>{booking.user.id === user.id && booking.lesson.id === 2 ? <p className={styles["my-classes-content__bookings__item2"]}>SNACKS</p> : <p></p>}</p>
                            <p>{booking.user.id === user.id && booking.lesson.id === 3 ? <p className={styles["my-classes-content__bookings__item3"]}>TESTOSTERON</p> : <p></p>}</p>
                        </div>
            })}
            <p className={styles["my-classes-content__count"]}>TOTAL BOOKINGS CICO: {countBookingsCICO}</p>
            <p className={styles["my-classes-content__count"]}>TOTAL BOOKINGS SNACKS: {countBookingsSNACKS}</p>
            <p className={styles["my-classes-content__count"]}>TOTAL BOOKINGS TESTOSTERON: {countBookingsTESTOSTERON}</p>
        </div>
      </>
    );
}

export default MyClassesContent;