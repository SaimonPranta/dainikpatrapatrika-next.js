import "./style.scss";
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "@/shared/components/header/header";
import Image from "next/image";
import getImageUrl from '@/shared/functions/getImageUrl';
import convertedToBanglaDate from '@/shared/functions/convertedToBanglaDate';
import { WiTime8 } from "react-icons/wi";
import textSlicer from "@/shared/functions/textSlicer";
import TodaysVideos from "@/shared/components/TodaysVideos/TodaysVideos"
import Footer from '@/shared/components/Footer/Footer';


const adsContainer = [
    "https://tpc.googlesyndication.com/simgad/9816891373495023339",
    "https://tpc.googlesyndication.com/simgad/9816891373495023339"
]



const getVideoDetails = async (id) => {
    try {
        // let response = await (await fetch(`${BACKEND_URL}/public/news/${id}`)).json()
        let response = await (await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=AIzaSyCnjHwqOkXQo1gNW-VR9uTdR4soiC9IAnc`, { 'cache': 'no-store',})).json() 
        if (response?.items[0]?.snippet) {
            return response?.items[0]?.snippet
        }
        return {}
    } catch (error) {
        return {}
    }
}
const getNewsList = async () => {
    try {
        let response = await (await fetch(`${BACKEND_URL}/public/news`, { 'cache': 'no-store',})).json()

        if (response.data.length) {
            return response.data
        }
        return {}
    } catch (error) {
        return {}
    }
}

const Index = async ({ params: { id } }) => {
    const videoDetails = await getVideoDetails(id)
    const newsList = await getNewsList()
    return (
        <>
            <Header />
            <div className="container single-video-container">
                <div className='news-details'>
                    <div className="main-news-container">
                        <div className="categories-container">
                            <Link href="/" >
                                <FaHome />
                            </Link>
                            <span>
                                <MdKeyboardArrowRight />
                            </span>
                            <Link href={`/video`} > ভিডিও </Link>
                        </div>
                        <div className="news-container">
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}?si=pk1YWhsj7ueTdcmi`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <h2>{videoDetails.title}</h2>
                            {
                                videoDetails?.description && <p>{videoDetails.description}</p>
                            }

                            <div> <WiTime8 /> <p>প্রকাশিত: {convertedToBanglaDate(videoDetails.publishedAt)}</p></div>

                        </div>
                    </div>
                    <div className="related-news-container">
                        <div className="ads-section">
                            {
                                [...adsContainer].map((img, index) => {
                                    return <Link href="/" key={index} >
                                        <Image src={img} height={100} width={100} alt="" />
                                    </Link>
                                })
                            }

                        </div>
                        <div className="news-section">
                            <div className="title">
                                <p>এ সম্পর্কিত খবর</p>
                            </div>
                            <div className="new-list">
                                {
                                    [...newsList].slice(0, 5).map((newsInfo, index) => {
                                        return <Link href="" key={index} className="cart">
                                            <h6>{textSlicer(newsInfo.title, 79)}</h6>
                                            <Image src={getImageUrl(newsInfo.img)} height="100" width="100" alt="" />
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <TodaysVideos />
            </div>
            <Footer />
        </>
    );
};

export default Index;