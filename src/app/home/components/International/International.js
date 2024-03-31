import React from 'react';
import "./style.scss"
import Link from 'next/link';
import Image from 'next/image';


const newsArray = [
    {
        img: "https://campuslive24.com/feature_img_mini/file-campuslive_2023-05-27-15-37-06.jpg",
        title: "বুয়েটের ডাস্টবিন থেকে নবজাতকের লাশ উদ্ধার",
        description: "বাংলাদেশ প্রকৌশল বিশ্ববিদ্যালয়ের (বুয়েট) ডাস্টবিন থেকে এক ছেলে নবজাতকের লাশ উদ্ধার করা হয়েছে। শনিবার দুপুর ১২টার দিকে",
        path: "/"
    },
    {
        img: "https://campuslive24.com/feature_img_mini/ju%20student%20politices_2023-05-27-11-50-56.jpg",
        title: "জাবিতে ছাত্ররাজনীতি নিয়ে ভিন্ন আলাপন",
        description: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে (জাবি) ‘বাংলাদেশের ছাত্ররাজনীতি এবং নীতিনির্ধারণী পর্যায়ে তরুণদের অংশগ্রহণ’ শীর্ষক সম্পূরক...",
        path: "/"
    },
    {
        img: "https://campuslive24.com/feature_img_mini/jnulive_2023-05-25-23-50-44.jpg",
        title: "রাতের আধারে জবিতে কাটা হলো ৫০ বছরের পুরনো গাছ!",
        description: "জগন্নাথ বিশ্ববিদ্যালয়ের (জবি) শিক্ষা ও গবেষণা ইনস্টিটিউট (আইইআর) এবং পোগোজ ল্যাবরেটরি স্কুল এন্ড কলেজের প্রধান ফটকের পাশ...",
        path: "/"

    }
]
const adsList = [
    { link: "https://facebook.com", img: "https://campuslive24.com/uploads/shares/output_zaq6Yp-2016-11-07-10-44-51.gif" },
    { link: "https://facebook.com", img: "https://campuslive24.com/uploads/shares/IBN_SINA-2016-11-07-10-50-29.gif" },
    { link: "https://facebook.com", img: "https://campuslive24.com/uploads/Janata%20Bank%20Online-AD-01.gif" },
]

const International = () => {
    return (
        <div className='container dhaka-campus'>
            <div className='title'>
                <h4>আন্তর্জাতিক</h4>
            </div>
            <div className='bottom-container'>
                <div className='news-container'>
                    {[...newsArray].slice(0, 3).map((newsInfo, index) => {
                        return <Link key={index} href={newsInfo.img} >
                            <Image src={newsInfo.img} height={100} width={100} alt='' />
                            <h2>{newsInfo.title}</h2>
                            <p>{newsInfo.description}</p>
                        </Link>
                    })}
                </div>
                <div className='ads-section'>
                    {
                        [...adsList].map((newsInfo, index) => {
                            return <a href={newsInfo.link} key={index} >
                                <Image src={newsInfo.img} height={100} width={100} alt='' />
                            </a>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default International;