
import "./style.scss";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BACKEND_URL } from "../../../shared/constants/ulrList";
import { TiThMenu } from "react-icons/ti";
import logo from "@/assets/images/home/dainikpatropatrika.jpg";
import { headers } from "next/headers";
import NavItem from '@/shared/components/header/Modules/NavItem';
import TopHeader from '@/shared/components/header/Modules/TopHeader';

const getCategories = async () => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/categories`)).json();

        if (response.data?.length) {
            return response.data
        }
        return []
    } catch (error) {
        return []
    }

} 

const Index = async () => { 
    const headersList = headers(); 
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
                                        <button> <MdOutlineKeyboardArrowDown /> </button>
                                        <ul>
                                            {
                                                routeInfo?.subCategories.map((subRouteInfo, subIndex) => {
                                                    return <li key={subRouteInfo._id} >
                                                        <Link href={`/topic/${routeInfo.route}?subCategory=${subRouteInfo.route}`} >
                                                            {subRouteInfo.label}
                                                        </Link> </li>
                                                })
                                            }
                                        </ul>
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