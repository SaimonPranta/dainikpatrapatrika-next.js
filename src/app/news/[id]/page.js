import "./style.scss";
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Link from "next/Link"
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "@/shared/components/header/header"
import Image from "next/Image"
import getImageUrl from '@/shared/functions/getImageUrl';
import convertedToBanglaDate from '@/shared/functions/convertedToBanglaDate';
import { WiTime8 } from "react-icons/wi";

const adsContainer = [
    "https://tpc.googlesyndication.com/simgad/9816891373495023339",
    "https://tpc.googlesyndication.com/simgad/9816891373495023339"
]

const getNews = async (id) => {
    try {
        let response = await (await fetch(`${BACKEND_URL}/public/news/${id}`)).json()

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
        let response = await (await fetch(`${BACKEND_URL}/public/news`)).json()

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

            <div className='container news-details'>
                <div className="main-news-container">
                    <div className="categories-container">
                        <Link href="/" >
                            <FaHome />
                        </Link>
                        <span>
                            <MdKeyboardArrowRight />
                        </span>
                        {newsDetails.category && <Link href={`/news/${newsDetails.categoriesRoute}`} >
                            <p>{newsDetails.category}</p>
                        </Link>}
                        {newsDetails.subcategory && <>
                            <span>
                                <MdKeyboardArrowRight />
                            </span>
                            <Link href={`/news/${newsDetails.subCategoriesRoute}`} >
                                <p>{newsDetails.subcategory}</p>
                            </Link>
                        </>}
                    </div>
                    <div className="news-container">
                        <h2>{newsDetails.title}</h2>
                        <Image src={getImageUrl(newsDetails.img)} height="100" width="100" alt="" />
                        <p>{newsDetails.description}</p>
                        <div> <WiTime8 /> <p>প্রকাশিত: {convertedToBanglaDate(newsDetails.createdAt)}</p></div>

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
                                      <h6>{newsInfo.title}</h6>
                                       <Image src={getImageUrl(newsInfo.img)} height="100" width="100" alt="" />
                                    </Link>
                                })
                            }
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;