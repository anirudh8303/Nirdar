import React from 'react'
import "./About.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function About({
    img,
    title,
    description, }) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default About
