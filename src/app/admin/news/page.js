"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/Link"
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import textSlicer from '@/shared/functions/textSlicer';
import { BACKEND_URL } from "@/shared/constants/ulrList"
import getImageUrl from '@/shared/functions/getImageUrl';
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";


const Index = () => {
    const [search, setSearch] = useState("")
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(false) 
    const [initialSearch, setInitialSearch] = useState(false) 
    const router = useRouter();

    useEffect(() => {
        const callApi = () => {
            if (loading) {
                return
            } 
            setLoading(true)
            fetch(`${BACKEND_URL}/admin/news?page=${page}&search=${search}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.data) {
                        console.log("data.data", data.data)
                        setCurrentPage(page - 1)
                 setLoading(false)
                 
                 if(search && !initialSearch){
                    setInitialSearch(true)
                    setNews( data.data)
                 }else if(!search && initialSearch){
                    setInitialSearch(false)
                    setNews( data.data)
                 } else{
                    setNews((state) => {
                        return [...state, ...data.data]
                    })
                 }
                        
                    }
                })
        }

        const timeTaskContainer = setTimeout(callApi, 0);

        return () => {
            clearTimeout(timeTaskContainer);
        };

    }, [page, search])
    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            Number(document.documentElement.offsetHeight - 1)
        ) {
            console.log("currentPage", currentPage)
            console.log("page", page - 1)
            if (currentPage === page - 1) {
                console.log("Enter to the function")
                setPage((state) => state + 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDeleteNews = (id) => {
        fetch(`${BACKEND_URL}/admin/news?id=${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    const newList = news.filter((item) => item._id !== id)
                    setNews(newList)
                }
            })
    }
    const handleAddNewsNavigation = () => {
        router.push("/admin/news/add")
    }
    return (
        <AdminLayouts>
            <div className='admin-news-page'>
                <div className="add-news-container">
                    <button onClick={handleAddNewsNavigation}>Add News</button>
                </div>
                <div className="search-container" >
                    <div>
                        <input type="text" placeholder="Search news" value={search} onChange={(e) => {
                            setSearch(e.target.value)
                            setPage(1)
                            setCurrentPage(0)
                        }} />
                        <button><FaSearch /> </button>
                    </div>

                </div>
                <div className="news-container" >
                    <div className="inner-container" >
                        {
                            news.map((news, index) => {
                                return <div key={index} className="new-cart">
                                    <Link href="" className="image-container"> <img src={getImageUrl(news.img)} alt="" /> </Link>
                                    <div>

                                        <Link href="/" className="des-container">
                                            <h6> {textSlicer(news.title, 42, true)}  </h6>
                                            <p>{textSlicer(news.description, 99, true)}</p>

                                        </Link>
                                        <div className="action-btn-container" >
                                            < Link href={`/admin/news/edit/${news._id}`}><button> Edit </button></Link>
                                            <button onClick={() => handleDeleteNews(news._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </div>
            </div>
        </AdminLayouts >
    );
};

export default Index;