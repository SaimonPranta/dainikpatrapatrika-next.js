
import "./style.scss"; 
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BACKEND_URL } from "../../../shared/constants/ulrList";
import NavItem from '@/shared/components/header/Modules/NavItem';
import SubCategory from '@/shared/components/header/Modules/SubCategory';
import TopHeader from '@/shared/components/header/Modules/TopHeader/Index';

const getCategories = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/categories`, { 'cache': 'no-store'})).json();

        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }

} 

const Index = async () => { 
    const categories = await getCategories()

    // useEffect(() => {
    //     if (categories.value.length) {
    //         return
    //     }
    //     fetch(`${BACKEND_URL}/public/categories`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.data) {
    //                 dispatch(addCategories(data.data))
    //             }
    //         }).catch((error) => {})
    // }, [])




    return (
        <header className="header">
            <TopHeader />
            <nav className="container navigation-container" id="navigation" >
                <ul>
                    <li >
                        <NavItem currentPath="/"  currentLabel="প্রচ্ছদ" />
                    </li>
                    {
                        categories?.length > 0 && categories.map((routeInfo, index) => {
                            return <li key={routeInfo._id}>
                                <NavItem currentPath={`/topic/${routeInfo.route}`}  currentLabel={routeInfo.label} />
                                {
                                    routeInfo?.subCategories?.length > 0 && <>
                                    <SubCategory subCategories={routeInfo?.subCategories} routeInfo={routeInfo}/>
                                    </>
                                }
                            </li>
                        })
                    }
                </ul>
            </nav>
        </header >

    );
};



export default Index;