import React from "react";

function Footer( {message} ) {
    return (
        <div className="footercontainer" >
          <h3 className="message" >{message}</h3>

        <div className="button_form_container" >
          <form>
              <label>
                  Your mail:
                  <input type="text" name="mail"/>
              </label>
          </form>
          <button type="button"
          >Join
          </button>
        </div>

        </div>
    )
}

export default Footer;