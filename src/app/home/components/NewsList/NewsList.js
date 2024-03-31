"use client"
import getImageUrl from '@/shared/functions/getImageUrl';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import {BACKEND_URL} from "@/shared/constants/ulrList"
import Link from 'next/link';

 

const NewsList = () => {
    const [newsList, setNewsList] = useState([])
   useEffect(()=> {
    fetch(`${BACKEND_URL}/public/news?limit=${20}`)
    .then(res => res.json())
    .then(data => {
     if(data.data){
        setNewsList(data.data)
     }
    })
   }, [])

    return (
        <>
            <div className='navigation-container'><button>সর্বশেষ </button> <button>জনপ্রিয় </button></div>
            <div className='news-list'>
                {
                    newsList.map((newsInfo, index) => {
                        return <Link href={`/news/${newsInfo._id}`} key={index} className='cart'>
                            <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                            <h2>{newsInfo.title}</h2>
                        </Link>
                    })
                }
            </div>
        </>
    );
};

export default NewsList;