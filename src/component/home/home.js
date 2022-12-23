import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
function Home(){
    return(
        <div>
            <img src= "./images/12.jpg"  alt="car in desert" />
            <div className="hero-text">
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination.</p>
                <Link to="/"> Travel Plan </Link>
            </div>
        </div>
    )
}
export default Home