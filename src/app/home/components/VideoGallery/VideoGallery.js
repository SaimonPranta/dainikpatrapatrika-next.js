import React from 'react';
import "./style.scss";
import Link from 'next/link';
import Image from 'next/image';
import palyIcons from "../../../../assets/images/home/video-play-icon-11397.png";


const getVideos = async () => {
    try {
        let response = await (await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUw0CEllkYUTZqVkYgEBZw4Q&key=AIzaSyCnjHwqOkXQo1gNW-VR9uTdR4soiC9IAnc`, { 'cache': 'no-store'})).json()
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
                        vidList.map((news, index) => {
                            return <Link className='news-cart' href={`/video/${news?.snippet?.resourceId?.videoId}`} key={index} >
                                <Image src={news?.snippet?.thumbnails?.maxres?.url || news?.snippet?.thumbnails?.standard?.url || news?.snippet?.thumbnails?.medium?.url} alt='' height={100} width={100} />
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