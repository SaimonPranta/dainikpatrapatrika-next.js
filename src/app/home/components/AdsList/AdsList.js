import React from 'react';
import "./style.scss"
import Image from 'next/image';
import getImageUrl from '@/shared/functions/getImageUrl';
import { BACKEND_URL } from '@/shared/constants/ulrList';

 

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
const AdsList = async () => {
    const ads = await getAds()

    return (
        <div className='container ads-list'>
            {ads.slice(0, 4).map((adsInfo, index) => {
                return <a href={adsInfo.targetLink} key={index}>
                    <Image src={getImageUrl(adsInfo.img)} height={100} width={100} alt='' />
                </a>
            })}
        </div>
    );
};

export default AdsList;