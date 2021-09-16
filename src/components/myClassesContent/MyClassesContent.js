import React, {useContext} from "react";
import styles from "./MyClassesContent.module.css";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function MyClassesContent() {

    const alles = useContext(AuthContext);

    async function loadBookings() {
        try {
            const result = await axios.get(`http://localhost:8080/agenda/find/all`, {

            })
            console.log(result);
        } catch (e) {
            console.error(e)
        }
    }

    const resultSearch = loadBookings();

    return (
        <div className={styles["my-classes-content"]}>
            <h3 className={styles["my-classes-content__message"]}>resultSearch</h3>
        </div>
    );
}

export default MyClassesContent;