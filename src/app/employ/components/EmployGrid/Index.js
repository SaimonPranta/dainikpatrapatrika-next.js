"use client"
import React, { useState, useEffect } from 'react';
import './style.scss'
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import textSlicer from '@/shared/functions/textSlicer';
import { BACKEND_URL } from "@/shared/constants/ulrList"
import getImageUrl from '@/shared/functions/getImageUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import ProfileCart from "@/app/employ/components/ProfileCart"
import { FaSearch } from 'react-icons/fa';


const Index = () => {
    const [search, setSearch] = useState("")
    const [input, setInput] = useState({})
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [initialSearch, setInitialSearch] = useState(false)
    const router = useRouter();

    // useEffect(() => {
    //     const callApi = () => {
    //         if (loading) {
    //             return
    //         }
    //         setLoading(true)
    //         fetch(`${BACKEND_URL}/admin/employ?page=${page}&search=${search}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.data) {
    //                     setCurrentPage(page - 1)
    //                     setLoading(false)

    //                     if (search && !initialSearch) {
    //                         setInitialSearch(true)
    //                         setNews(data.data)
    //                     } else if (search && initialSearch) {
    //                         setInitialSearch(false)
    //                         setNews(data.data)
    //                     } else {
    //                         setNews((state) => {
    //                             return [...state, ...data.data]
    //                         })
    //                     }

    //                 }
    //             }).catch((error) => { })
    //     }

    //     const timeTaskContainer = setTimeout(callApi, 0);

    //     return () => {
    //         clearTimeout(timeTaskContainer);
    //     };

    // }, [page, search])
    // const handleScroll = () => {
    //     if (
    //         window.innerHeight + document.documentElement.scrollTop >=
    //         Number(document.documentElement.offsetHeight - 1)
    //     ) {
    //         if (currentPage === page - 1) {
    //             setPage((state) => state + 1);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    
    const handleSearchNavigation = (id) => {
        router.push(`/employ/${id}`)
    }

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }
    const handleFormSubmit = () => {
        fetch(`${BACKEND_URL}/public/employ`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(input)
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.data) {
                setNews(data.data)
            }else{
                setNews([])
            }
        })
    }
   

    return (
        <div className='container employ-grid '>
            <div className="search-box-container">
                {/* <div className="inner-container"> */}
                    {/* <label>অনুসন্ধান</label>  <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> <button onClick={() => setSearch(input)}><FaSearch /></button> */}
                {/* </div> */}
                <div className="inner-container"> 
                <div>
                    <label>Full Name</label>
                    <input type="text" value={input.name || "" } name="name" onChange={handleInputChange} />
                </div>
                <div>
                    <label>ID Number</label>
                    <input type="text" value={input.idNumber || "" } name="idNumber"  onChange={handleInputChange} />
                </div>
                <div className="search" >
                     <button onClick={handleFormSubmit}>Search</button>
                </div>
                </div>
            </div>
            <div className='title-section'>
                {/* <h4>Employs</h4> */}
            </div>
            <div className='grid-section'>
                {
                    news.map((employInfo, index) => {
                        return <ProfileCart profileInfo={employInfo} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Index