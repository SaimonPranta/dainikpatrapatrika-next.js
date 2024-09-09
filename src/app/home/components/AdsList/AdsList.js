import React from 'react';
import "./style.scss"
import Image from 'next/image';
import AdsOne from '@/assets/images/ads/3576327368700285170.jpeg'
import AdsTwo from '@/assets/images/ads/7571834189285230854.jpeg'
import AdsThree from '@/assets/images/ads/12236601381561371666.jpeg'
import AdsFour from '@/assets/images/ads/Maggi facebook ad sample.jpeg'

const ads = [{
    img: AdsOne,
    link: "https://www.facebook.com"
}, {
    img:AdsTwo,
    link: "https://www.facebook.com"
}, {
    img: AdsThree,
    link: "https://www.facebook.com"
}, {
    img: AdsFour,
    link: "https://www.facebook.com"
}]
const AdsList = () => {
    return (
        <div className='container ads-list'>
            {ads.map((adsInfo, index) => {
                return <a href={adsInfo.link} key={index}>
                    <Image src={adsInfo.img} height={100} width={100} alt='' />
                </a>
            })}
        </div>
    );
};

export default AdsList;