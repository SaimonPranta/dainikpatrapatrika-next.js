"use client"
import "./style.scss"
import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {BACKEND_URL} from "../../../shared/constants/ulrList"
import {addCategories} from "../../../store/categories/reducer"

const Index = () => {
const {categories} = useSelector((state) => state)
const dispatch = useDispatch()
  

 useEffect(() => {
    if(categories.value.lenght){
        return 
    }
       fetch(`${BACKEND_URL}/public/categories`)
       .then((res) => res.json())
       .then((data) => { 
        if(data.data) {
            dispatch(addCategories(data.data))
        }
       })
 }, [])


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
                            <button>
                                Video
                            </button>
                        </div>
                        <div className="search-container">
                            <button>
                                <IoIosSearch />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="logo-container">
                <Image width="100" height="100" src="https://campuslive24.com/photos/2022-04-10-03-logo-logo.png" alt="" />
            </div>
            <nav className="container navigation-container" >
                <ul>
                    {
                        categories?.value?.length > 0 && [...categories.value].map((routeInfo, index) => { 
                            return <li key={routeInfo._id}>
                                <Link href={`/${routeInfo.route}`} >
                                    {routeInfo.label}
                                </Link>
                                {
                                    routeInfo?.subCategories?.length > 0 && <>
                                        <button> <MdOutlineKeyboardArrowDown /> </button>
                                        <ul>
                                            {
                                                routeInfo?.subCategories.map((subRouteInfo, subIndex) => {
                                                    return <li key={subRouteInfo._id} >
                                                        <Link href={`/${routeInfo.route}/${subRouteInfo.route}`} >
                                                            {routeInfo.label}
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