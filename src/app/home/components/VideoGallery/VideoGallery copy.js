import React from 'react';
import "./style.scss"
import Link from 'next/link';
import Image from 'next/image';
const videoArray = [
    {
        title: "ইবিতে গুচ্ছভুক্ত ‘বি’ ইউনিটের ভর্তি পরীক্ষা সম্পন্ন",
        img: "https://campuslive24.com/photos/36/admission%20test.jpg",
    },
    {
        title: "প্রতিবন্ধকতাকে জয় করে শিক্ষক হওয়ার স্বপ্ন দেখেন যবিপ্রবি ভর্তিচ্ছু সাইফ",
        img: "https://campuslive24.com/photos/36/just%20admission%20test.jpg",
    },
    {
        title: "সাতক্ষীরার নলতা রওজায় মাসব্যাপী অন্যরকম ইফতার",
        img: "https://campuslive24.com/photos/26/youtube-cl24.jpg",
    },
    {
        title: "রভিটা সরকারি প্রাথমিক বিদ্যালয় এখন দেশসেরা ",
        img: "https://img.youtube.com/vi/Jvn6UYQ9uSI/maxresdefault.jpg",
    },
    {
        title: "রোকেয়া বিশ্ববিদ্যালয়ে যোগ হচ্ছে দৃষ্টিনন্দন ফটক ও মাঠ",
        img: "https://campuslive24.com/photos/26/youtube-cl.jpg",
    },
]

const VideoGallery = () => {
    return (
        <div className='video-gallery-section'>
            <div className='container inner-gallery'>
                <div className='title-section'>
                    <h5>ভিডিও গ্যালারী</h5>
                </div>
                <div className="video-section" >
                    {/* <div className="left-section"> */}
                        {
                            [...videoArray].map((news, index) => {
                                return <Link className='news-cart' href={"/"}  key={index} >
                                    <Image src={news.img} alt='' height={100} width={100} />
                                    <h2>{news.title}</h2>
                                </Link>
                            })
                        }
                    {/* </div> */}
                    {/* <div className="right-section">
                        {
                            [...videoArray].slice(1, 5).map((news, index) => {
                                return <Link className='news-cart' href={"/"} key={index} >
                                    <Image src={news.img} alt='' height={100} width={100} />
                                    <h4>{news.title}</h4>
                                </Link>
                            })
                        }
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;