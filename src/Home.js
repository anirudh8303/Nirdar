import React from 'react'
import "./Home.css"
import home from "./logo.jpg"
import { Button } from "@material-ui/core"
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { useState } from "react"
import { useStateValue } from './StateProvider';
import Geocode from "react-geocode";
import db from './firebase';

function Home() {
    const [{ user }, dispatch] = useStateValue();
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const getCoordinates = (e) => {
        e.preventDefault();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        alert("Location added. Select help you require")
    }
    const showPosition = (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
    }
    const addPolicia = () => {
        db.collection('policia').add({
            name: user.displayName,
            locationla: latitude,
            locationlo: longitude,
        })
        window.alert("Police is comming to assist you in 2 minutes")
    }
    const addAmbulance = () => {
        db.collection('medical').add({
            name: user.displayName,
            locationla: latitude,
            locationlo: longitude,
        })
        window.alert("Ambulance is comming to assist you in 2 minutes")
    }
    const addFireDepartment = () => {
        db.collection('firedepartment').add({
            name: user.displayName,
            locationla: latitude,
            locationlo: longitude,
        })
        window.alert("FireBrigade is comming to assist you in 2 minutes")
    }
    return (
        <div className="home">
            <div className="home_loc">
                <center>
                    <AddLocationIcon fontSize="50px" />
                    <Button onClick={getCoordinates} variant="outlined"> Add Location</Button>
                </center>
            </div>
            <div className="btun" >
                <Button variant="outlined" onClick={addPolicia}> Police</Button>
                <Button variant="outlined" onClick={addAmbulance}> Ambulance </Button>
                <Button variant="outlined" onClick={addFireDepartment}> FireDepartment</Button>
            </div>
            <center>
                <img className="logo" src={home} />
            </center>
        </div>
    )
}

export default Home
