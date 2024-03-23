"use client"
import React, {useState} from 'react';
import Link from "next/Link"
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';

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
   const [search, setSearch] = useState([])

    return (
        <AdminLayouts>
        <div className='admin-news-page'>
            <div className="add-news-container">
                <button>Add News</button>
            </div>
            <div className="search-container" > 
               <div>
                <input type="text" value={search || ""} />
                <button>Search </button>
               </div>

            </div>
            <div className="news-container" >
             <div className="inner-container" >
                {
                [...topImage, ...topImage].map((news, index) => {
                return <Link href="/" key={index} className="new-cart">
                   <div className="image-container"> <img src={news.img} alt="" /> </div>
                   <div>

                   <div className="des-container">
                        <h6> {news.title}  </h6>
                        <p>{news.description}</p>

                   </div>
                   </div>
                </Link>
                }) 
                }

             </div>
            </div>
        </div>
        </AdminLayouts>
    );
};

export default Index;