"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Index = ({currentPath, currentLabel}) => {
        const pathname = usePathname();

        const toggleOtherNavigation = () => {
            const nav = document.getElementById("others-navigation");
            const navBtn = document.getElementById("navigation-btn");
            if (nav) {
                nav.classList.toggle("active");
                navBtn.classList.toggle("active");
            }
        }
        const addOtherNavigation = () => {
            return 

            const nav = document.getElementById("others-navigation");
            const navBtn = document.getElementById("navigation-btn");
            if (nav) {
                nav.classList.add("active");
                navBtn.classList.add("active");
            }
        }
        const removeOtherNavigation = () => {

            const nav = document.getElementById("others-navigation");
            const navBtn = document.getElementById("navigation-btn");

            if (nav) {
                // nav.classList.remove("active");
                // navBtn.classList.remove("active");
            }
        }
    return (
        <a className={currentPath === pathname ? "active" : ""} onMouseOver={addOtherNavigation} onClick={toggleOtherNavigation} >
            অন্যান্য
        </a>
    );
};

export default Index;