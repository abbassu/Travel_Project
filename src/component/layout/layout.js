import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/nav";
function Layout(){

    return(
        <div >
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Layout