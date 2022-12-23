import React,{useState} from "react";
import "./nav.css"
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee,faHouseUser} from "@fortawesome/free-solid-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import { MenuItems } from "../menuitems/menuitems";


function Navbar(){
    const [clicked,setclicked]=useState(false)
    function clicked_handel(){
        setclicked(!clicked)
    }
    return(
        <div className="nav">
            <h1 className="nav-logo">Trip</h1>
            <div className="menu-icon" onClick={clicked_handel}>
                <i className={ clicked ? "fa-solid fa-xmark":"fa-solid fa-bars"  }></i>
            </div>
            <ul className={ clicked ? "nav-menu active" :  "nav-menu"}>
                {MenuItems.map((elements,index)=>{
                    return(
                        <div key={index} className="nav-link">
                            <li>
                                <i className={elements.icon}></i>
                                <Link to={elements.url} className="item">{elements.title}</Link>
                            </li>
                        </div>
                    )
                })}
                <button>Login</button>
            </ul>
        </div>
    )
}
export default Navbar