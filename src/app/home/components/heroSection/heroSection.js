import Link from 'next/link';
import React from 'react';
import "./style.scss"
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import { MdOutlineCommentsDisabled } from 'react-icons/md';
import getImageUrl from '@/shared/functions/getImageUrl';
import NewsList from '../NewsList/NewsList';

const titleList = [
    "রাজিবপুরে দুই দিনব্যাপী বৃক্ষরোপণ কর্মসূচি ",
    "হেনা ফাউন্ডেশন এর কেন্দ্রীয় নতুন কমিটি গঠন ",
    "সাংবাদিক হত্যার বিচারের দাবিতে মানববন্ধন ও প্রতিবাদ সভা ",
    "রাজের সঙ্গে তিশা-সুনেরাহর গোপন ভিডিও ফাঁস ",
    "খুকৃবি'র সিন্ডিকেট সদস্য মনোনীত হলেন পবিপ্রবির প্রফেসর সফিকুল ",
    "ঈদে ট্রেনের অগ্রিম টিকিট বিক্রি শুরু ১৪ জুন "
]



const getNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news`)).json();
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
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${1}&category=চাকরি বাজার`)).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}

const Index = async () => {
    const news = await getNews()
    const jobsNews = await getJobsNews()



    return (
        <div className='container hero-section'>
            <div className='top-section'>
                <div className='left'>
                    <p>
                        BGIC সর্বশেষ:
                    </p>
                </div>
                <marquee>
                    <ul>
                        {
                            [...news, ...jobsNews].map((newInfo, index) => {
                                return <li key={index}>
                                    <Link href="/" >
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
                        news.length > 0 && [...news].splice(0, 3).map((newsInfo, index) => {
                            return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className="cart" >
                                <Image src={getImageUrl(newsInfo.img)} height={100} width={100} alt='' />
                                <h2>{newsInfo.title}</h2>
                                <p>{newsInfo.description.substring(0, 160)}</p>
                            </Link>
                            // 160
                        })
                    }
                </div>
                <div className="middle-section">
                    {[...news].splice(3, 5).map((newsInfo, index) => {
                        return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className="cart" >
                            <h2>{newsInfo.title}</h2>
                            <div className="inner-cart" >
                                <p>{`${newsInfo.description.substring(0, 64)}...`}</p> <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                            </div>
                        </Link>
                    })}
                </div>
                <div className="right-section">
                    <div className='job-news' >
                        <h3>চাকরি বাজার</h3>

                        {
                            [...jobsNews].splice(0, 1).map((newsInfo, index) => {
                                return <Link href={`/news/${newsInfo._id}`} key={index * Math.random() * Math.random()} className='news-cart' >
                                    <Image height={100} width={100} src={getImageUrl(newsInfo.img)} alt='' />
                                    <h2>{newsInfo.title}</h2>
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
