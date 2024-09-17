"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import NavItem from '@/shared/components/header/Modules/NavItem';
import SubCategory from '@/shared/components/header/Modules/SubCategory';


const Index = ({categories}) => {
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
        <nav className="container navigation-container others-navigation" id="others-navigation"  onMouseOver={addOtherNavigation} >
                <ul>
                    {
                        categories?.length > 0 && categories.map((routeInfo, index) => {
                            return <li key={routeInfo._id}>
                                <NavItem currentPath={`/topic/${routeInfo.route}`} currentLabel={routeInfo.label} />
                                {
                                    routeInfo?.subCategories?.length > 0 && <>
                                        <SubCategory subCategories={routeInfo?.subCategories} routeInfo={routeInfo} />
                                    </>
                                }
                            </li>
                        })
                    }
                </ul>
          </nav>
    );
};

export default Index;