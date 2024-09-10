import React from 'react';
import "./style.scss";
import Link from 'next/link';

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
        label: "Categories",
        path: "/admin/categories"
    },
]

const AdminSideNav = () => {


    return (
        <div className='admin-side-nav'>
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
        </div>
    );
};

export default AdminSideNav;