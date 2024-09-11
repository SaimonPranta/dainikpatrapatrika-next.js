import React from 'react';
import "./style.scss";
import Link from 'next/link';
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import textSlicer from '@/shared/functions/textSlicer';
import getImageUrl from '@/shared/functions/getImageUrl'; 
 

const getInternalNews = async () => {
    try { 
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${3}&category=আন্তর্জাতিক`, { 'cache': 'no-store'})).json();

        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }

}
const getAds = async () => {
    try { 
        const response = await (await fetch(`${BACKEND_URL}/admin/ads?page=1`, { 'cache': 'no-store'})).json();

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
    const adsList = await getAds();
    
    return (
        <div className='container international-container'>
            <div className='title'>
                <h4>আন্তর্জাতিক</h4>
            </div>
            <div className='bottom-container'>
                <div className='news-container'>
                    {internationalNews.map((newsInfo, index) => {
                        return <Link key={index} href={`/news/${newsInfo._id}`}   >
                            <Image src={getImageUrl(newsInfo.img)} height={100} width={100} alt='' />
                            <h2>{newsInfo.title}</h2>
                            <p>{textSlicer(newsInfo.description, 160, true)}</p>

                        </Link>
                    })}
                </div>
                <div className='ads-section'>
                    {
                        adsList.slice(4, 7).map((newsInfo, index) => {
                            return <Link href={newsInfo.targetLink} key={index} >
                                <Image src={getImageUrl(newsInfo.img)} height={100} width={100} alt='' />
                            </Link>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default International;