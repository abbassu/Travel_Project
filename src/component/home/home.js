import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
function Home(){
    return(
        <div className="home">
            <div className="home-text">
                <h1>Your Journey Your Story</h1>
                <p>Choose Your Favourite Destination.</p>
                <Link to="/" className="button_in"> Travel Plan </Link>
            </div>
        </div>
    )
}
export default Home