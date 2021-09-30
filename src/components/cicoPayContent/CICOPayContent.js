import React, {useContext, useState} from "react";
import styles from "./CICOPayContent.module.scss";
import axios from "axios";
import { useForm } from "react-hook-form";


function CICOPayContent({ classTitle, lessonId }) {

    const { handleSubmit } = useForm();
    const [payCoinsSuccess, togglePayCoinsSuccess] = useState(false);
    const [paymentError, togglePaymentError] = useState(false);
    const [completeBookingSuccess, toggleCompleteBookingSuccess] = useState(false);
    const [bookingError, toggleBookingError] = useState(false);
    const jwtToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    async function onSubmitPay() {
        try {
            const result = await axios.patch(`http://localhost:8080/users/subtract/coins/id/${userId}`, {}, {
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
            const result = await axios.post('http://localhost:8080/agenda/add', {
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
            toggleBookingError(true);
        }
    }

    return (
        <div className={styles["cico-pay-content"]}>
            <form onSubmit={handleSubmit(onSubmitPay)}>
                <h3>YOU ARE ABOUT TO PAY ONE<br/>
                    COIN CREDIT TO GRANT<br/>
                    ACCESS TO THIS CLASS
                </h3>

                <h4>
                    TO DO YOUR PAYMENT,<br/>
                    PRESS PAY COINS
                </h4>

                <button
                    className={styles["cico-pay-content__pay-button"]}
                    type="submit"
                >
                    PAY COINS
                </button>
                {payCoinsSuccess && <p
                    className={styles["cico-pay-content__payment-success"]}
                    >
                    COINS ARE SUBTRACTED! CLICK ON THE BUTTON BELOW TO COMPLETE BOOKING!</p>}
                {paymentError && <p
                    className={styles["cico-pay-content__payment-failed"]}
                    >
                    YOUR COINBALANCE IS 0, UPDATE YOUR COINS!</p>}
            </form>

            {payCoinsSuccess && <form
                onSubmit={handleSubmit(onSubmitBook)}
                className={styles["cico-pay-content__form2"]}
            >
                <button
                    className={styles["cico-pay-content__form2__confirm-button"]}
                    type="submit"
                >
                    CONFIRM
                </button>
                {completeBookingSuccess && <p
                    className={styles["cico-pay-content__form2__booking-success"]}
                    >
                    YOUR BOOKING IS CONFIRMED!</p>}
                {bookingError && <p
                    className={styles["cico-pay-content__form2__booking-failed"]}
                    >
                    SOMETHING WENT WRONG..</p>}
            </form>}
        </div>
    );
}

export default CICOPayContent;