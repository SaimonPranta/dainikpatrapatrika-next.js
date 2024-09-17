import React from 'react';
import "./style.scss";
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


const navList = [
    {
        label: "Categories",
        path: "/admin/categories"
    },
    {
        label: "News",
        path: "/admin/news"
    },
    {
        label: "Ads",
        path: "/admin/ads"
    },
    {
        label: "Employ",
        path: "/admin/employ"
    },
]



const AdminSideNav = () => {
    const router = useRouter()
    const removeCooki = () => {
        Cookies.remove('adminAuthToken');
       router.push("/")
    }

    return (
        <div className='admin-side-nav'>
            <div className="inner-container" >

            <div className='title' ><h6>Admin Panel</h6></div>
            <div className='navigation-container'>
                <ul>
                    {
                        [...navList].map((item, index) => {
                            return <li key={index} >
                                <Link href={item.path} >{item.label}</Link>
                            </li>
                        })
                    }
                </ul>

            </div>
            <div className='logout-container'>
                <ul>
                   <li  >
                       <a onClick={removeCooki}>Log Out</a>
                            </li>
                </ul>

            </div>
            </div>
        </div>
    );
};

export default AdminSideNav;