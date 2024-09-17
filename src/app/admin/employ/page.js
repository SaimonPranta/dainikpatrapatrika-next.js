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
            fetch(`${BACKEND_URL}/admin/employ?page=${page}&search=${search}`)
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

    const handleDeleteNews = (id) => {
        fetch(`${BACKEND_URL}/admin/employ?id=${id}`, {
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
    const handleAddNewsNavigation = () => {
        router.push("/admin/employ/add")
    }

    return (
        <AdminLayouts>
            <div className='admin-news-page'>
                <div className="add-news-container">
                    <button onClick={handleAddNewsNavigation}>Add Employ</button>
                </div>

                <div className="search-container" >
                    <div>
                        <IoSearch />
                        <input type="text" placeholder="Search news" value={input} onChange={(e) => {
                            setInput(e.target.value)
                            setPage(1)
                            setCurrentPage(0)
                        }} />
                        <button onClick={() => setSearch(input)}>Search</button>
                    </div>

                </div>
                <div className="news-container" >
                    <div className="inner-container" >
                        {
                            news.map((news, index) => {
                                return <div key={index} className="new-cart">
                                    <Link href="" className="image-container"> <Image height={100} width={100} alt=''  src={getImageUrl(news.profilePicture)}   /> </Link>
                                    <div>
                                        <Link href={`/news/${news._id}`} className="des-container">
                                            <h6> {news.name}  </h6>
                                            <p>{`Position: ${news.position}`}</p>
                                            <p>{`ID Number: ${news.idNumber}`}</p>
                                            <p>{`Father's Name: ${news.fatherName}`}</p>
                                            <p>{`Mother's Name: ${news.motherName}`}</p>
                                            <p>{`Email: ${news.email}`}</p>
                                            <p>{`Date of Birth: ${news.dateOfBirth}`}</p>
                                            <p>{`Join Date: ${news.joinDate}`}</p>
                                            <p>{`ID Cart Expire Date: ${news.idCardExpDate}`}</p>
                                            <p>{`Password: ${news.address}`}</p>

                                        </Link>
                                        <div className="action-btn-container" >
                                            < Link href={`/admin/employ/edit/${news._id}`}><button> Edit </button></Link>
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