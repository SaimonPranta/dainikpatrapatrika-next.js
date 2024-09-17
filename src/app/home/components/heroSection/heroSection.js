import Link from 'next/link';
import React from 'react';
import "./style.scss";
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import { MdOutlineCommentsDisabled } from 'react-icons/md';
import getImageUrl from '@/shared/functions/getImageUrl';
import NewsList from '../NewsList/NewsList';
import textSlicer from '@/shared/functions/textSlicer';

const getHeroNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit={10}`, {
            'cache': 'no-store',
        })).json();
        if (response.data?.length) {
            return response.data
        }


        return []
    } catch (error) {
        return []
    }
}
const getJobsNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${1}&category=চাকরি বাজার`, {
            'cache': 'no-store',
        })).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}
const getSlidingNews = async () => {
    try {

        const response = await (await fetch(`${BACKEND_URL}/public/news/sort?sort=সর্বশেষ&page=1`, {
            'cache': 'no-store',
        })).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}

const Index = async () => {
    const news = await getHeroNews()
    const jobsNews = await getJobsNews()
    const slidingNews = await getSlidingNews()

    return (
        <div className='container hero-section'>
            <div className='top-section'>
                <div className='left'>
                    <p>
                        সর্বশেষ:
                    </p>
                </div>
                <marquee>
                    <ul>
                        {
                            slidingNews.map((newInfo, index) => {
                                return <li key={index}>
                                    <Link href={`/news/${newInfo._id}`} >
                                        {newInfo.title}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </marquee>
            </div>
            <div className='bottom-section'>
                <div className="left-section">
                    {
                        news.length > 0 && news.splice(0, 3).map((newsInfo, index) => {
                            return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className="cart" >
                                <Image src={getImageUrl(newsInfo.img)} height={100} width={100} alt='' />
                              {
                                index === 0 ?   <h2>{newsInfo.title.substring(0, 58)}</h2> :   <h2>{newsInfo.title.substring(0,42)}</h2>
                              }
                                {
                                    index === 0 ?
                                    <p>{newsInfo?.description?.substring(0, 170)}</p> :  <p>{newsInfo?.description?.substring(0, 140)}</p>
                                     }
                            </Link>
                        })
                    }
                </div>
                <div className="middle-section">
                    {news.length > 0 && news.splice(3, 4).map((newsInfo, index) => {
                        return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className="cart" >
                            <h2>{newsInfo.title.substring(0, 78)}</h2>
                            <div className="inner-cart" >
                                <p>{`${newsInfo.description.substring(0, 180)}...`}</p> 
                                <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                            </div>
                        </Link>

                    })}
                </div>
                <div className="right-section">
                    <div className='job-news' >
                        <h3>চাকরি বাজার</h3>

                        {
                            jobsNews.splice(0, 1).map((newsInfo, index) => {
                                return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className='news-cart' >
                                    <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                                    <h2>{textSlicer(newsInfo.title, 35)}</h2>
                                </Link>
                            })
                        }
                    </div>
                    <div className='all-news'>
                        <NewsList />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Index;
