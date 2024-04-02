import React from 'react';
import "./style.scss"
import Link from 'next/link';
import Image from 'next/image';
import palyIcons from "../../../../assets/images/home/video-play-icon-11397.png"
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

const getVideos = async () => {
    try {
        let response = await (await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUewt9x2hSiEn1rhlrBMuz1A&key=AIzaSyCnjHwqOkXQo1gNW-VR9uTdR4soiC9IAnc`)).json()
        if (response.items) {
            return response.items
        }
        return []

    } catch (error) {
        return []
    }

}

const VideoGallery = async () => {

    const vidList = await getVideos()

    return (
        <div className='video-gallery-section'>
            <div className='container inner-gallery'>
                <div className='title-section'>
                    <h5>ভিডিও গ্যালারী</h5>
                </div>
                <div className="video-section" >
                    {
                        [...vidList].map((news, index) => {
                            return <Link className='news-cart' href={"/"} key={index} >
                                <Image src={news?.snippet?.thumbnails?.default?.url} alt='' height={100} width={100} />
                                <h2>{news?.snippet?.title}</h2>
                                <Image className='paly-icon' src={palyIcons} alt='' height={100} width={100} />
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;