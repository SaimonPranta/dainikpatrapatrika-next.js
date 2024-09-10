import "./style.scss";
import Header from "@/shared/components/header/header";
import Footer from '@/shared/components/Footer/Footer';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Image from "next/Image";
import Link from 'next/link';
import getImageUrl from '@/shared/functions/getImageUrl';
import textSlicer from "@/shared/functions/textSlicer";


const getCategory = async (category, subCategory) => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/categories/${category}?subCategory=${subCategory}`)).json()
        if (response.data) {
            return response.data
        }
        return {}
    } catch (error) {
        return {}
    }
}
const getNews = async (categoryLabel, subCategoryLabel) => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${12}&category=${categoryLabel}&subcategory=${subCategoryLabel}`, { next: { revalidate: 300 } })).json();


        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }
}
const Page = async ({ params: { category }, searchParams: { subCategory } }) => {
    const { categoryLabel, subCategoryLabel } = await getCategory(category, subCategory)
    const newsList = await getNews(categoryLabel, subCategoryLabel)

    return (
        <div className="news-topic-container">
            <Header />
            <div className="container main-section">
                <div className="top-section">
                    <div className="title-section">
                        {
                            categoryLabel && <h3>{categoryLabel}</h3>
                        }
                        {
                            subCategoryLabel && <p>{subCategoryLabel}</p>
                        }

                    </div>
                    <div className="news-list">
                        {
                            newsList.map((newsInfo, index) => {
                                return <Link href={`/news/${newsInfo._id}`} key={index} className="news-cart"  >
                                    <Image src={getImageUrl(newsInfo.img)} alt="" height={100} width={100} />
                                    <h2>{textSlicer(newsInfo.title, 70)}</h2>
                                    {
                                        index === 0 ? <p>{textSlicer(newsInfo.description, 350, true)}</p> : <p>{textSlicer(newsInfo.description, 130, true)}</p>
                                    }
                                </Link>

                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Page;