import React from 'react';
import "./style.scss"
import Link from 'next/link';
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import getImageUrl from '@/shared/functions/getImageUrl';
import textSlicer from '@/shared/functions/textSlicer';

 
const getSportsNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${7}&category=খেলা`)).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}
const getDebatesNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${5}&category=খেলা`)).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}


const Sports = async () => {
    const sportNews = await getSportsNews()
    const debateNews = await getDebatesNews()

    return (
        <section className="container sport-debate-container">
            <div className='sports-section'>
                <div className='title'>
                    <h4> খেলা </h4>
                </div>
                <div className='news-container'>
                    {
                        [...sportNews].map((news, index) => {
                            return <Link className='news-cart' href={`/news/${news._id}`}  key={index}>
                                <Image src={getImageUrl(news.img)} height={100} width={100} alt='' />
                                <div>
                                    <h2> {news.title}</h2>
                                    {
                                        index === 0 ? <p>{textSlicer(news.description, 130, true)}</p> : <p>{textSlicer(news.description, 65, true)}</p>
                                    }

                                </div>
                            </Link>
                        })
                    }
                </div>

            </div>
            <div className="debate-section">
                <div className='title'>
                    <h4>মত-দ্বিমত </h4>
                </div>
                <div className='news-container'>
                    {
                        [...debateNews].map((news, index) => {
                            return <Link className='news-cart' href={`/news/${news._id}`}  key={index}>
                                <div>
                                    <h2> {news.title}</h2>
                                    <p>{textSlicer(news.description, 100, true)}</p>
                                </div>
                                <Image src={getImageUrl(news.img)} height={100} width={100} alt='' />
                            </Link>
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Sports;