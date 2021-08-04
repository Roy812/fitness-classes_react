import React from "react";
import loginpicture from "../assets/LogIn(gold).svg";

function Login() {
    return (
        <>
            <div className="login_container" >
                <img className="login_icon" src={loginpicture} alt="login_image"/>
                <div className="text_container" >
                    <p>Already have an account?</p>
                    <p>Try to login below:</p>
                </div>
                <form>
                    <label className="login_formlabel_container" >
                        PH
                        <input type="text" name="login_mail"/>
                    </label>
                    <label className="login_formlabel_container" >
                        PH
                        <input type="text" name="login_password"/>
                    </label>
                </form>
                <button className="login_button" type="button" >
                    Login
                </button>
            </div>
        </>
    )
}

export default Login;