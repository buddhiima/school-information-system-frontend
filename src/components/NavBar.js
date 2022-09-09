import React from "react";

import '../common.css'

export default function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><img src="logo.png" alt="logo"></img></li> 
                {/* <li>STUDENTS</li> 
                <li>TEACHERS</li>
                <li>STUDENTS</li> 
                <li><button id="changepsw-btn">CHANGE<br></br>PASSWORD</button></li> */}
                <li><button id="logout-btn">LOGOUT</button></li>
            </ul>
        </nav>
    )  
}       