import "./style.scss";
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import Header from "@/shared/components/header/header";
import Image from "next/image";
import Footer from '@/shared/components/Footer/Footer';
import palyIcons from "../../assets/images/home/video-play-icon-11397.png";
import textSlicer from "@/shared/functions/textSlicer";
import getImageUrl from "@/shared/functions/getImageUrl";

const getNews = async (search) => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?search=${search}`, { 'cache': 'no-store',})).json();
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}

const Index = async ({searchParams: {search}}) => { 
    const vidList = await getNews(search)
    return (
        <>
            <Header />
            <div className="container all-news-container">
                <div className="categories-container">
                    <Link href="/" >
                        <FaHome />
                    </Link>
                    <span>
                        <MdKeyboardArrowRight />
                    </span>
                    {
                     !search ? <a >  খবর </a> :   search === "undefine" ? <a >  খবর </a> : <a >  ফলাফল </a>
                    }
                    
                </div>
                <div className="video-section" >
                    {
                        [...vidList].map((news, index) => {
                            return <Link className='news-cart' href={`/news/${news?._id}`} key={index} >
                                <Image src={getImageUrl(news?.img)} alt='' height={100} width={100} />
                                <h2>{textSlicer(`${news?.title}`, 105, true)}</h2>
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