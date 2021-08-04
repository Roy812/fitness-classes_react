import React from "react";
import lockpicture from "../assets/Lock(final).svg";
import cuppicture from "../assets/Cup(final).svg";
import playpicture from "../assets/Play(final).svg";
import checkpicture from "../assets/check.svg";

function Quotes( {quote_1, quote_2, quote_3} ) {
    return (
        <>
          <div className="extra_quote_container" >
              <img className="lock" src={lockpicture} alt="lock_image"/>
              <img className="cup" src={cuppicture} alt="cup_image"/>
              <img className="play" src={playpicture} alt="play_image"/>
           <div className="quote_container" >
            <h2 className="quote" >{quote_1}</h2>
            <h2 className="quote" >{quote_2}</h2>
            <h2 className="quote" >{quote_3}</h2>
            <div className="button_inquotes_container" >
                   <h2>Made Up Your Mind</h2>
                   <button className="button_one" type="button"
                   >Sign Me Up
                   </button>
                    <img className="check" src={checkpicture} alt="check_image"/>
            </div>

           </div>
          </div>
        </>
    )
}

export default Quotes;