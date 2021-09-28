import React, {useContext, useState} from "react";
import styles from "./CICOPayContent.module.css";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function CICOPayContent({ classTitle, lessonId }) {

    const { user } = useContext(AuthContext);
    const [payCoinsSuccess, togglePayCoinsSuccess] = useState(false);
    const [paymentError, togglePaymentError] = useState(false);
    const [completeBookingSuccess, toggleCompleteBookingSuccess] = useState(false);
    const {handleSubmit} = useForm();

    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    async function onSubmitPay() {
        try {
            const result = await axios.patch(`http://localhost:8080/users/subtract/coins/id/${userId}`, {

            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            togglePayCoinsSuccess(true);
        } catch (e) {
            console.error(e)
            togglePaymentError(true);
        }
    }

    async function onSubmitBook() {
        try {
            // const lessonId = 1;
            const result = await axios.post('http://localhost:8080/agenda/add', {
                // title: "CICO, ITs ALL YOU NEED",
                title: classTitle,
                userId: userId,
                lessonId: lessonId,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`,
                }
            })
            console.log(result);
            toggleCompleteBookingSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className={styles["CICO-pay-content__forms"]}>
            <form onSubmit={handleSubmit(onSubmitPay)}>
                <h3 className={styles["CICO-pay-content__title"]}>YOU ARE ABOUT TO PAY ONE<br/>
                    COIN CREDIT TO GRANT<br/>
                    ACCESS TO THIS CLASS
                </h3>

                <h3 className={styles["CICO-pay-content__confirm"]}>
                    TO DO YOUR PAYMENT,<br/>
                    PRESS PAY COINS
                </h3>

                <button
                    className={styles["CICO-pay-content__pay-button"]}
                    type="submit"
                >
                    PAY COINS
                </button>
                {payCoinsSuccess && <p
                    className={styles["CICO-pay-content__payment-success"]}
                >
                    COINS ARE SUBTRACTED! CLICK ON THE BUTTON BELOW TO COMPLETE BOOKING!</p>}
                {paymentError && <p
                    className={styles["CICO-pay-content__payment-failed"]}
                >
                    YOUR COINBALANCE IS 0, UPDATE YOUR COINS!</p>}
            </form>
            {payCoinsSuccess &&
            <form
                onSubmit={handleSubmit(onSubmitBook)}
                className={styles["CICO-pay-content__form2"]}
            >
                <button
                    className={styles["CICO-pay-content__form2__confirm-button"]}
                    type="submit"
                >
                    CONFIRM
                </button>
                {completeBookingSuccess && <p
                    className={styles["CICO-pay-content__form2__booking-success"]}
                >
                    YOUR BOOKING IS CONFIRMED!</p>}
            </form>
            }
        </div>
    );
}

export default CICOPayContent;