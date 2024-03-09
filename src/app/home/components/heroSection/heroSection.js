import Link from 'next/link';
import React from 'react';
import "./style.scss"
import Image from 'next/image';

const titleList = [
    "রাজিবপুরে দুই দিনব্যাপী বৃক্ষরোপণ কর্মসূচি ",
    "হেনা ফাউন্ডেশন এর কেন্দ্রীয় নতুন কমিটি গঠন ",
    "সাংবাদিক হত্যার বিচারের দাবিতে মানববন্ধন ও প্রতিবাদ সভা ",
    "রাজের সঙ্গে তিশা-সুনেরাহর গোপন ভিডিও ফাঁস ",
    "খুকৃবি'র সিন্ডিকেট সদস্য মনোনীত হলেন পবিপ্রবির প্রফেসর সফিকুল ",
    "ঈদে ট্রেনের অগ্রিম টিকিট বিক্রি শুরু ১৪ জুন "
]

const topImage = [
    {
        img: "https://www.campuslive24.com/news/rabi-proxy-cl_2023-05-30-15-47-43.jpg",
        title: "রাবির ভর্তি পরীক্ষায় প্রক্সি দিতে গিয়ে আটক ২",
        description: "রাজশাহী বিশ্ববিদ্যালয়ের (রাবি) ভর্তি পরীক্ষায় প্রক্সি দিতে এসে দুই ব্যক্তি আটক হয়েছেন। মঙ্গলবার সকালে ‘এ’ ইউনিটের প্রথম শিফটের পরীক্ষা চলাকালে সন্দেহভাজন হিসেবে"
    },
    {
        img: "https://campuslive24.com/news/201_2023-06-17-15-16-47.jpg",
        title: "সাংবাদিক হত্যার বিচারের দাবিতে মানববন্ধন ও প্রতিবাদ সভা",
        description: "রাজশাহী বিশ্ববিদ্যালয়ের (রাবি) ভর্তি পরীক্ষায় প্রক্সি দিতে এসে দুই ব্যক্তি আটক হয়েছেন। মঙ্গলবার সকালে ‘এ’ ইউনিটের প্রথম শিফটের পরীক্ষা চলাকালে সন্দেহভাজন হিসেবে"
    },
    {
        img: "https://campuslive24.com/news/00000_2023-07-06-10-54-28.jpg",
        title: "রাজিবপুরে দুই দিনব্যাপী বৃক্ষরোপণ কর্মসূচি",
        description: "রাজশাহী বিশ্ববিদ্যালয়ের (রাবি) ভর্তি পরীক্ষায় প্রক্সি দিতে এসে দুই ব্যক্তি আটক হয়েছেন। মঙ্গলবার সকালে ‘এ’ ইউনিটের প্রথম শিফটের পরীক্ষা চলাকালে সন্দেহভাজন হিসেবে"
    },
]
 
const Index = () => {
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
                            titleList.length > 0 && titleList.map((title, index) => {
                                return <li key={index}>
                                    <Link href="/" >
                                        {title}
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
                        topImage.length > 0 && topImage.map((newsInfo, index) => {
                            return <div key={index * Math.random() * Math.random()} className="cart">
                                <Image src={newsInfo.img} height={100} width={100} alt='' />
                                <h2>{newsInfo.title}</h2>
                                <p>{newsInfo.description.substring(0, 160)}</p>
                            </div>
                            // 160
                        })
                    }
                </div>
                <div className="middle-section">
                    {[...topImage, ...topImage].splice(0, 5).map((newsInfo, index) => {
                        return <div key={index * Math.random() * Math.random()} className="cart" >
                            <h2>{newsInfo.title}</h2>
                            <div className="inner-cart" >
                                <p>{`${newsInfo.description.substring(0, 64)}...`}</p> <Image height={100} width={100} src={newsInfo.img} alt='' />
                            </div>
                        </div>
                    })}
                </div>
                <div className="right-section">
                    <div className='job-news' >
                        <h3>চাকরি বাজার</h3>
                         
                        {
                            [...topImage].splice(0, 1).map((newsInfo, index) => {
                                return <div key={index * Math.random() * Math.random()} className='news-cart' >
                                    <Image height={100} width={100} src={newsInfo.img} alt='' />
                                    <h2>{newsInfo.title}</h2>
                                </div>
                            })
                        }
                    </div>
                    <div className='all-news'>
                        <div className='navigation-container'><button>সর্বশেষ </button> <button>জনপ্রিয় </button></div>
                        <div className='news-list'>
                            {
                                [...topImage, ...topImage, ...topImage, ...topImage, ...topImage, ...topImage].map((newsInfo, index) => {
                                    return <div key={index} className='cart'>
                                        <Image height={100} width={100} src={newsInfo.img} alt='' />
                                        <h2>{newsInfo.title}</h2>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;