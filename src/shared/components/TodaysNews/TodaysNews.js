import React from 'react';
import "./style.scss"
import Image from 'next/image';
import Link from 'next/Link';
import getImageUrl from '@/shared/functions/getImageUrl';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import textSlicer from '@/shared/functions/textSlicer';



const getNews = async (id) => {
    try {
        let response = await (await fetch(`${BACKEND_URL}/public/news?limit=6`)).json()

        if (response.data.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}
const TodaysNews = async () => {
    const newsList = await getNews() 
    return (
        <div className='today-news'>
            <div className='title-container'>
                <h3>আজকের সর্বশেষ</h3>
            </div>
            <div className='news-list'>
                {
                    newsList.map((news, index) => {
                        return <Link href={`/news/${news._id}`} key={index} className='news-cart'>
                            <Image src={getImageUrl(news.img)} alt='' height={100} width={100} />
                            <h2>{textSlicer(news.title, 60)}</h2>
                        </Link>
                    })
                }
            </div>
        </div>
    );
};

export default TodaysNews;