import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PhoneIcon from '@material-ui/icons/Phone'
import HomeIcon from '@material-ui/icons/Home';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav_left">
                <h3>NiDar 💪👊</h3>
            </div>
            <div className="nav_home">
                <HomeIcon />
                <Link to="/">Home</Link>
            </div>
            <div className="nav_portfolio">
                <Link to="/about">About</Link>
            </div>
            <div className="nav_certificates">
                <Link to="/gallery">Gallery</Link>
            </div>
            <div className="nav_contact">
                <PhoneIcon />
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar