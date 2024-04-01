import "./style.scss"
import Header from "@/shared/components/header/header"
import Footer from '@/shared/components/Footer/Footer';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Image from "next/Image"
import getImageUrl from '@/shared/functions/getImageUrl';


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
       
        const response = await (await fetch(`${BACKEND_URL}/public/news?limit=${6}&category=${categoryLabel}&subcategory=${subCategoryLabel}`)).json();
       console.log("response ==>>", response.data.length)
        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        console.log("error ==>>", error)
        return []
    }
}
const Page = async ({ params: { category }, searchParams: { subCategory } }) => {
    const {categoryLabel, subCategoryLabel} = await getCategory(category, subCategory)
    const newsList = await getNews(categoryLabel, subCategoryLabel) 
    console.log("newsList ==>>", newsList.length)

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
                                return <div key={index} className="news-cart" >
                                <Image src={getImageUrl(newsInfo.img)} alt="" height={100} width={100} />
                                <h2>{newsInfo.title}</h2>
                                <p>{newsInfo.description}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;