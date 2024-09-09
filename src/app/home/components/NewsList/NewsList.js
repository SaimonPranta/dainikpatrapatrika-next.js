"use client"
import getImageUrl from '@/shared/functions/getImageUrl';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { BACKEND_URL } from "@/shared/constants/ulrList"
import Link from 'next/link';


const NewsList = () => {
    const [newsList, setNewsList] = useState([])
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const [currentNews, setCurrentNews] = useState("সর্বশেষ")
    const debounceState = useRef(null)


    const resetTimeout = () => {
        if (debounceState.current) {
            clearTimeout(debounceState.current)
        }
    }

    useEffect(() => {
        resetTimeout()

        debounceState.current = setTimeout(() => {
            fetch(`${BACKEND_URL}/public/news/sort?sort=${currentNews}&page=${page}`)
                .then(res => res.json())
                .then(data => {
                    if (data.data) {
                        setNewsList((state) => {
                            return [...state, ...data.data]
                        })
                    }
                    if (data.page) {
                        setCurrentPage(Number(data.page) - 1)
                    }
                    if (data.total) {
                        setTotal(Number(data.total))
                    }
                })
                .finally(() => {
                    setLoading(false)

                })
        }, 3000)


        return () => {
            resetTimeout()
        }

    }, [page, currentNews])

    const handleScroll = () => {
        if (loading) {
            return
        }
        if(total && total <= newsList.length){
            return 
        }
        const container = document.getElementById("news-list")
        const scrollTop = container?.scrollTop || 0
        const offsetHeight = container?.offsetHeight || 0
        const scrollHeight = container?.scrollHeight || 0

        if (
            scrollHeight <= Number(scrollTop + offsetHeight) + 1
        ) {

            if (currentPage === page - 1) {
                setPage((state) => state + 1);
                setLoading(true)
            }
        }
    };

    const handleChangeTab = (tab) => {
        setCurrentNews(tab)
        setPage(1)
        setCurrentPage(0)
        setNewsList([])
        setLoading(true)
        setTotal(null)
    }


    return (
        <>
            <div className='navigation-container'><button className={currentNews === "সর্বশেষ" ? "active" : ""} onClick={() => handleChangeTab("সর্বশেষ")} >সর্বশেষ </button> <button className={currentNews === "জনপ্রিয়" ? "active" : ""} onClick={() => handleChangeTab("জনপ্রিয়")}>জনপ্রিয় </button></div>
            <div className='news-list' id="news-list" onScroll={handleScroll}>

                {
                    newsList.map((newsInfo, index) => {
                        return <Link href={`/news/${newsInfo._id}`} key={index} className='cart'>
                            <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                            <h2>{newsInfo.title}</h2>
                        </Link>
                    })
                }
                {
                    loading && new Array(6).fill("").map((item, index) => {
                        return <div className="skeleton" key={index}>
                            <span className="img" />
                            <div>
                                <span className="h2" />
                                <span className="h2" />
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default NewsList;