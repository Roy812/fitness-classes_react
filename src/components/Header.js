import React from "react";
import logopicture from "../assets/Logo F.C. (1).svg";

function Header( {title_1, title_2, title_3, title_4} ) {
    return (
      <>
        <div className="hold" >
            <img className="logo_fc" src={logopicture} alt="logo" />
            <span className="title" >{title_1}</span>
            <span className="title" >{title_2}</span>
            <span className="title" >{title_3}</span>
            <span className="title" >{title_4}</span>
        </div>
        <div className="barcontainer" >
            <div className="phantom" ></div>
            <div className="bar_one"></div>
            <div className="bar_two"></div>
            <div className="bar_three"></div>
            <div className="bar_four"></div>
        </div>
      </>
    )
}

export default Header;