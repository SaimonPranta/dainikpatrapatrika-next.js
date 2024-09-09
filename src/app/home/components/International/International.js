import React from 'react';
import "./style.scss"
import Link from 'next/link';
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import textSlicer from '@/shared/functions/textSlicer';
import getImageUrl from '@/shared/functions/getImageUrl';
import AdsOne from '@/assets/images/ads/9816891373495023339.gif';
import AdsTwo from '@/assets/images/ads/17843484186255185549.gif';
import AdsThree from '@/assets/images/ads/12236601381561371666.jpeg';




const adsList = [
    { link: "https://facebook.com", img: AdsOne },
    { link: "https://facebook.com", img: AdsTwo },
    { link: "https://facebook.com", img: AdsThree },
]

const getInternalNews = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${3}&category=আন্তর্জাতিক`)).json();
      
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }

}
const International = async () => {
    const internationalNews = await getInternalNews();

    return (
        <div className='container international-container'>
            <div className='title'>
                <h4>আন্তর্জাতিক</h4>
            </div>
            <div className='bottom-container'>
                <div className='news-container'>
                    {internationalNews.map((newsInfo, index) => {
                        return <Link key={index}  href={`/news/${newsInfo._id}`}   >
                            <Image src={getImageUrl(newsInfo.img)} height={100} width={100} alt='' />
                            <h2>{newsInfo.title}</h2>
                            <p>{textSlicer(newsInfo.description, 160, true)}</p>

                        </Link>
                    })}
                </div>
                <div className='ads-section'>
                    {
                        [...adsList].map((newsInfo, index) => {
                            return <Link  href={`/news/${newsInfo._id}`}  key={index} >
                                <Image src={newsInfo.img} height={100} width={100} alt='' />
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default International;