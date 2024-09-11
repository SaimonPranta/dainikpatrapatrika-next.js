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
        let response = await (await fetch(`${BACKEND_URL}/public/news`, { 'cache': 'no-store', })).json()

        if (response.data.length) {
            return response.data
        }
        return {}
    } catch (error) {
        return {}
    }
}
export const generateMetadata = async ({ params, searchParams }, parent) => {
    const id = params.id
    const newsDetails = await getNews(id)
    const previousImages = (await parent).openGraph?.images || []
    const currentImg = getImageUrl(newsDetails?.img)

    return {
        title: newsDetails?.title,
        description: newsDetails?.description,
        openGraph: {
            images: [currentImg, ...previousImages],
        },
    }
}
const Index = async ({ params: { id } }) => {

    const newsDetails = await getNews(id)
    const newsList = await getNewsList()
    const adsList = await getAds()



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
                                adsList.slice(7, 9).map((adsInfo, index) => {
                                    return <Link href={adsInfo.targetLink} key={index} >
                                        <Image src={getImageUrl(adsInfo.img)} height={100} width={100} alt="" />
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