import React, {useContext, useState} from "react";
import styles from "./CICOPayContent.module.css";
import { useForm } from "react-hook-form";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function CICOPayContent() {

    const alles = useContext(AuthContext);
    const [payCoinsSuccess, togglePayCoinsSuccess] = useState(true);
    const [completeBookingSuccess, toggleCompleteBookingSuccess] = useState(false);
    const {handleSubmit} = useForm();

    async function onSubmitPay() {
        try {
            const userId = localStorage.getItem('id');
            const result = await axios.post(`http://localhost:8080/users/subtract/coins/id/${userId}`, {

            })
            console.log(result);
            togglePayCoinsSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    async function onSubmitBook() {
        try {
            const lessonId = 1;
            const userId = localStorage.getItem('id');
            const result = await axios.post('http://localhost:8080/agenda/add', {
                userId: userId,
                lessonId: lessonId,
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
                {payCoinsSuccess && <p>Coins are subtracted! Click on the button below to complete your booking!</p>}
            </form>
            {payCoinsSuccess &&
            <form onSubmit={handleSubmit(onSubmitBook)}>
                <button
                    className={styles["CICO-pay-content__confirm-button"]}
                    type="submit"
                >
                    CONFIRM
                </button>
                {completeBookingSuccess && <p>Your Booking Is Confirmed!</p>}
            </form>
            }
        </div>
    );
}

export default CICOPayContent;