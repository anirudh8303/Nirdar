import React from 'react'
import "./Contact.css"
import { Button } from "@material-ui/core"
import { useState } from "react"
import db from "./firebase"
import contact from "./Contact.png"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [query, setQuery] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('contact').add({
            email: email,
            name: name,
            phone: number,
            query: query,
        })
        setName("");
        setEmail("");
        setNumber("");
        setQuery("");
        window.alert("Submiited your message our team will contact you soon !")
    }
    return (
        <div className="contact_top">
            <center><h2>Any Queries ? Would you like to Contact Us ?</h2></center>
            <div className="contact">
                <div className="contact_left">
                    <img src={contact} />
                </div>
                <div className="contact_right">
                    <form className="contact_form">
                        <label>Full Name :</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name.." required></input>
                        <label>Email :</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email.." required></input>
                        <label>Contact Number :</label>
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter your contact number.." required></input>
                        <label>Query ?</label>
                        <textarea rows="10" cols="50" value={query} onChange={(e) => setQuery(e.target.value)} required placeholder="Enter your detailed query here.."></textarea>
                        <Button type="submit" onClick={sendMessage} variant="outlined"> Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
