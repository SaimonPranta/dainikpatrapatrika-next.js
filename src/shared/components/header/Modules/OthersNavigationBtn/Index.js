"use client"
import React from 'react'
import { TiThMenu } from "react-icons/ti";


const Index = () => {
    const toggleOtherNavigation = () => {
        const nav = document.getElementById("others-navigation");
        const navBtn = document.getElementById("navigation-btn");
        if (nav) {
            nav.classList.toggle("active");
            navBtn.classList.toggle("active");
        }
    }

    return (
        <div className="others-section">
            <button onClick={toggleOtherNavigation} id="navigation-btn" ><TiThMenu /></button>
        </div>
    )
}

export default Index