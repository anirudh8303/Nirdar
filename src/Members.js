import React from 'react'
import About from "./About"
import a from "./Anirudh.jpeg"
import s from "./Simran.jpeg"
import h from "./Harshit.jpeg"
import p from "./Prazzy.jpeg"
import "./Members.css";


function Members() {
    return (
        <div className="about">
            <p>Our project includes a safety website which automatically takes your location on a single tag and then we have to select the type of helpline like police ,ambulance, etc you need. after that without any further delay nearest helper will reach you at your location for your help.
So, basically with two taps,i.e, in 2 seconds helping hand will be there for you.</p>
            <center><h3>OUR TEAM</h3></center>
            <div className="project_results">
                <About
                    img={a}
                    title="Anirudh Sharma"
                    description="React and Firebase expert"
                />
                <About
                    img={s}
                    title="Simran Singla"
                    description="Front-end expert"
                />
                <About
                    img={p}
                    title="Prazzy Jindal"
                    description="Front-end expert"
                />
                <About
                    img={h}
                    title="Harshit Goyal"
                    description="Front-end expert"
                />

            </div>
        </div>
    )
}

export default Members
