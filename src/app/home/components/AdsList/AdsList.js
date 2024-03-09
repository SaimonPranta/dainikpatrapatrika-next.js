import React from 'react';
import "./style.scss"
import Image from 'next/image';

const ads = [{
    img: "https://www.campuslive24.com/uploads/shares/ads/bactrol-2022-05-17-20-53-20.jpg",
    link: "https://www.facebook.com"
}, {
    img: "https://campuslive24.com/public/photos/South+A+U+Add.gif",
    link: "https://www.facebook.com"
}, {
    img: "https://www.campuslive24.com/uploads/shares/ads/BHBFC-2022-05-17-21-05-58.jpg",
    link: "https://www.facebook.com"
}, {
    img: "https://campuslive24.com/uploads/shares/dbbl-2016-11-07-10-54-27.jpg",
    link: "https://www.facebook.com"
}]
const AdsList = () => {
    return (
        <div className='container ads-list'>
            {[...ads].map((adsInfo, index) => {
                return <a href={adsInfo.link} key={index}>
                    <Image src={adsInfo.img} height={100} width={100} alt='' />
                </a>
            })}
        </div>
    );
};

export default AdsList;