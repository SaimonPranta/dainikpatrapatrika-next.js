"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import textSlicer from '@/shared/functions/textSlicer';
import { BACKEND_URL } from "@/shared/constants/ulrList"
import getImageUrl from '@/shared/functions/getImageUrl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";

const Index = () => {
    const [search, setSearch] = useState("")
    const [input, setInput] = useState("")
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
            fetch(`${BACKEND_URL}/admin/ads?page=${page}&search=${search}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.data) {
                        setCurrentPage(page - 1)
                        setLoading(false)

                        if (search && !initialSearch) {
                            setInitialSearch(true)
                            setNews(data.data)
                        } else if (search && initialSearch) {
                            setInitialSearch(false)
                            setNews(data.data)
                        } else {
                            setNews((state) => {
                                return [...state, ...data.data]
                            })
                        }

                    }
                }).catch((error) => {})
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
            if (currentPage === page - 1) {
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

    const handleDeleteAds = (id) => {
        fetch(`${BACKEND_URL}/admin/ads?id=${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    const newList = news.filter((item) => item._id !== id)
                    setNews(newList)
                }
            }).catch((error) => {})
    }
    const handleAddAdsNavigation = () => {
        router.push("/admin/ads/add")
    }

    return (
        <AdminLayouts>
            <div className='admin-ads-page'>
                <div className="add-ads-container">
                    <button onClick={handleAddAdsNavigation}>Add Ads</button>
                </div>

                <div className="search-container" >
                    <div>
                        <IoSearch />
                        <input type="text" placeholder="Search ads" value={input} onChange={(e) => {
                            setInput(e.target.value)
                            setPage(1)
                            setCurrentPage(0)
                        }} />
                        <button onClick={() => setSearch(input)}>Search</button>
                    </div>

                </div>
                <div className="ads-container" >
                    <div className="inner-container" >
                        {
                            news.map((news, index) => {
                                return <div key={index} className="ads-cart">
                                    <a href={news.targetLink} className="image-container"> <Image height={100} width={100} alt=''  src={getImageUrl(news.img)}   /> </a>
                                    <div>

                                        <a href={news.targetLink} className="des-container">
                                            <h6> {textSlicer(news.title, 42, true)}  </h6>

                                        </a>
                                        <div className="action-btn-container" >
                                            < Link href={`/admin/ads/edit/${news._id}`}><button> Edit </button></Link>
                                            <button onClick={() => handleDeleteAds(news._id)}>Delete</button>
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