import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee,faHouseUser} from "@fortawesome/free-solid-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar(){

    return(
        <div className="nav">
            <h1>Trip</h1>

            <ul>
                <li> abbas
                <FontAwesomeIcon icon={faHouseUser}/>
                <FontAwesomeIcon icon={faYoutube} size="6x"/>

                <i class="fa-regular fa-house"></i>
                <FontAwesomeIcon icon={faCoffee}/>
                
                </li>
            </ul>
        </div>
    )

}
export default Navbar