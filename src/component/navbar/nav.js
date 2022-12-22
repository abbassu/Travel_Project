import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee,faHouseUser} from "@fortawesome/free-solid-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import { MenuItems } from "../menuitems/menuitems";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar(){

    return(
        <div className="nav">
            <h1>Trip</h1>
            {/* <Link to={"/"}>uu</Link> */}
            <ul>
                {MenuItems.map((elements,index)=>{
                    return(
                        <div key={index}>
                        
                        <li>
                            <i className={elements.icon}></i>
                            {/* <Link to={elements.url}>elements.title</Link> */}
                        </li>
                        </div>

                    )

                })}
            </ul>
        </div>
    )

}
export default Navbar