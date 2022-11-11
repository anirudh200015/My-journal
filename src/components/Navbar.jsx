import React from "react"
import navLogo from "../assets/worldwide.png"

function Navbar(){
    
    return (
        <nav className="navbar">
            <img className="nav--logo"src={navLogo}/>
            <p>my travel Journel </p>
        </nav>
    )
}
export default Navbar;
