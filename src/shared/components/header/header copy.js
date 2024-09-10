"use client"
import "./style.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BACKEND_URL } from "../../../shared/constants/ulrList";
import { addCategories } from "../../../store/categories/reducer";
import { TiThMenu } from "react-icons/ti";
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import logo from "@/assets/images/home/dainikpatropatrika.jpg";
import { usePathname } from 'next/navigation';

const Index = () => {
    const [search, setSearch] = useState("")
    const { categories } = useSelector((state) => state)
    const dispatch = useDispatch()
    const router = useRouter();
    const pathname = usePathname();
    

    useEffect(() => {
        if (categories.value.length) {
            return
        }
        fetch(`${BACKEND_URL}/public/categories`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    dispatch(addCategories(data.data))
                }
            }).catch((error) => {})
    }, [])

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
    const hangleSearchNavigation = () => {
        router.push(`/news?search=${search}`)
    }
    const setSearchEnable = () => {
        const searchBtn = document.getElementById("search-btn")
        const searchBoxContainer = document.getElementById("search-box-container")
        searchBtn.classList.toggle("disable")
        searchBoxContainer.classList.toggle("active")
    }

    return (
        <header className="header">
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
                        <label>অনুসন্ধান</label>  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> <button onClick={hangleSearchNavigation}><FaSearch /></button>
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

            <nav className="container navigation-container" id="navigation" >
                <ul>
                    <li >
                        <Link href="/" className={`/` === pathname  ? "active" : ""}>
                            প্রচ্ছদ
                        </Link>
                    </li>
                    {
                        categories?.value?.length > 0 && [...categories.value].map((routeInfo, index) => {
                            return <li key={routeInfo._id}>
                                <Link href={`/topic/${routeInfo.route}`} className={`/topic/${routeInfo.route}` === pathname  ? "active" : ""} >
                                    {routeInfo.label}
                                </Link>
                                {
                                    routeInfo?.subCategories?.length > 0 && <>
                                        <button> <MdOutlineKeyboardArrowDown /> </button>
                                        <ul>
                                            {
                                                routeInfo?.subCategories.map((subRouteInfo, subIndex) => {
                                                    return <li key={subRouteInfo._id} >
                                                        <Link href={`/topic/${routeInfo.route}?subCategory=${subRouteInfo.route}`} >
                                                            {subRouteInfo.label}
                                                        </Link> </li>
                                                })
                                            }
                                        </ul>
                                    </>
                                }

                            </li>
                        })
                    }

                </ul>
            </nav>
        </header >

    );
};



export default Index;