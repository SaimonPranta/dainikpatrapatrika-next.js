import "./style.scss";
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "@/shared/components/header/header";
import Image from "next/image";
import Footer from '@/shared/components/Footer/Footer';
import palyIcons from "../../assets/images/home/video-play-icon-11397.png"
import textSlicer from "@/shared/functions/textSlicer";

const getVideos = async () => {
    try {
        let response = await (await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUewt9x2hSiEn1rhlrBMuz1A&key=AIzaSyCnjHwqOkXQo1gNW-VR9uTdR4soiC9IAnc`, { 'cache': 'no-store'})).)).json()
        if (response.items) {
            return response.items
        }
        return []

    } catch (error) {
        return []
    }

}

const Index = async () => {
    const vidList = await getVideos()
    return (
        <>
            <Header />
            <div className="container all-video-container">
                <div className="categories-container">
                    <Link href="/" >
                        <FaHome />
                    </Link>
                    <span>
                        <MdKeyboardArrowRight />
                    </span>
                    <Link href={`/video`} > ভিডিও </Link>
                </div>
                <div className="video-section" >
                    {
                        [...vidList].map((news, index) => {
                            return <Link className='news-cart' href={`/video/${news?.snippet?.resourceId?.videoId}`} key={index} >
                                <Image src={news?.snippet?.thumbnails?.default?.url} alt='' height={100} width={100} />
                                <h2>{textSlicer(`${news?.snippet?.title}`, 105, true)}</h2>
                                <Image className='paly-icon' src={palyIcons} alt='' height={100} width={100} />
                            </Link>
                        })
                    }
                </div>

                {/* <TodaysVideos /> */}
            </div>
            <Footer />
        </>
    );
};

export default Index;