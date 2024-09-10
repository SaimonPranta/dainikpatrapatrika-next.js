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
import TodaysNews from "@/shared/components/TodaysNews/TodaysNews";
import Footer from '@/shared/components/Footer/Footer';
import Share from "@/app/news/[id]/Modal/Share/Share"
// import Share from "@//Share/Share"
import { RiShareLine } from "react-icons/ri";
import { GrPrint } from "react-icons/gr";



const adsContainer = [
    "https://tpc.googlesyndication.com/simgad/9816891373495023339",
    "https://tpc.googlesyndication.com/simgad/9816891373495023339"
]

const getNews = async (id) => {
    try {
        let response = await (await fetch(`${BACKEND_URL}/public/news/${id}`, {
            'cache': 'no-store',
        })).json()
        if (response.data._id) {
            return response.data
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
    const newsDetails = await getNews(id)
    const newsList = await getNewsList() 
    return (
        <>
            <Header />
            <div className="container news-details-container">
                <div className=' news-details'>
                    <div className="main-news-container">
                        <div className="categories-container">
                            <Link href="/" >
                                <FaHome />
                            </Link>
                            <span>
                                <MdKeyboardArrowRight />
                            </span>
                            {newsDetails.category && <Link href={`/topic/${newsDetails.categoriesRoute}`} >
                                <p>{newsDetails.category}</p>
                            </Link>}
                            {newsDetails.subcategory && <>
                                <span>
                                    <MdKeyboardArrowRight />
                                </span>
                                <Link href={`/topic/${newsDetails.categoriesRoute}?subCategory=${newsDetails.subCategoriesRoute}`} >
                                    <p>{newsDetails.subcategory}</p>
                                </Link>
                            </>}
                        </div>
                        <div className="news-container" id="news-container">
                            <div className="title-container">
                                <h2>{newsDetails.title}</h2>
                                {/* <div className="share-container">
                                    <button>
                                    <RiShareLine />
                                    </button>
                                    <button>
                                    <GrPrint />
                                    </button>    
                                    <Share/>   
                                </div> */}
                                <Share />

                            </div>

                            <Image src={getImageUrl(newsDetails.img)} height="100" width="100" alt="" />
                            <p>{newsDetails.description}</p>
                            {newsDetails?.createdAt && <div> <WiTime8 /> <p>প্রকাশিত: {convertedToBanglaDate(newsDetails.createdAt)}</p></div>}

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
                                        return <Link key={index} href={`/news/${newsInfo._id}`} className="cart" >
                                            <h6>{textSlicer(newsInfo.title, 79)}</h6>
                                            <Image src={getImageUrl(newsInfo.img)} height="100" width="100" alt="" />
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <TodaysNews />
            </div>
            {/* <Share/> */}
            <Footer />
        </>
    );
};

export default Index;