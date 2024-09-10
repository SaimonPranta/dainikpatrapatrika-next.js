"use client"
import { useState } from "react";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link"; 
import { TiThMenu } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import logo from "@/assets/images/home/dainikpatropatrika.jpg";


const Index = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();

    const toggleNavigation = () => {
        const nav = document.getElementById("navigation");
        const navBtn = document.getElementById("navigation-btn");
        if (nav) {
            nav.classList.toggle("active");
            navBtn.classList.toggle("active");
        }
    }
    const handleVideoNavigation = () => {
        router.push("/video")
    }
    const handleSearchNavigation = () => {
        router.push(`/news?search=${search}`)
    }
    const setSearchEnable = () => {
        const searchBtn = document.getElementById("search-btn")
        const searchBoxContainer = document.getElementById("search-box-container")
        searchBtn.classList.toggle("disable")
        searchBoxContainer.classList.toggle("active")
    }

    return (
        <>
            <div className="top-section">
                <div className="top-inner-container container">
                    <div className="left">
                        <p>ঢাকা | শনিবার, ২রা মার্চ ২০২৪, ১৯শে ফাল্গুন ১৪৩০</p>
                    </div>
                    <div className="right">
                        <div>
                            <a href="/" />
                            <a href="/" />
                            <a href="/" />
                            <a href="/" />
                        </div>
                        <div className="language-btn">
                            <button>
                                English
                            </button>
                            <button onClick={handleVideoNavigation}>
                                Video
                            </button>
                        </div>
                        <div className="search-container" id="search-btn">
                            <button onClick={setSearchEnable}>
                                <IoIosSearch />
                            </button>
                        </div>

                    </div>
                </div>
                <div className="container search-box-container" id="search-box-container">
                    <div className="inner-container">
                        <label>অনুসন্ধান</label>  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <button onClick={handleSearchNavigation}><FaSearch /></button>
                    </div>
                </div>
            </div>
            <div className="container middle-container">
                <Link href="/" className="logo-container">
                    <Image width="100" height="100" src={logo} alt="" />
                </Link>
                <div className="menu-btn-container">
                    <button onClick={toggleNavigation} id="navigation-btn" ><TiThMenu /></button>
                </div>
            </div>
        </>
    );
};

export default Index;