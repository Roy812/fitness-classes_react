import React, {useContext, useState} from "react";
import styles from "./MyClassesContent.module.css";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useForm} from "react-hook-form";

function MyClassesContent() {

    // const alles = useContext(AuthContext);
    const [notFound, toggleNotFound] = useState(false);
    const {handleSubmit} = useForm();
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
            // const resultSearch = FILTERBOOKINGSBYUSERID(result);
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
                GETMYBOOKINGS
            </button>
            {/*<h3 className={styles["my-classes-content__message"]}>resultSearch</h3>*/}
            {notFound && <p
                className={styles["my-classes-content__bookings-not-found"]}
            >
                BOOKINGS NOT FOUND..</p>}
        </form>
    );
}

export default MyClassesContent;