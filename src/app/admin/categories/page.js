
"use client"
import React, { useEffect, useState } from 'react';
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import Image from 'next/image';
import { IoDuplicate } from "react-icons/io5"
import AddCategories from "./Modal/AddCategories"
import { RiDeleteBin5Line } from 'react-icons/ri';
// import { getCookie } from '../../../Hooks/cookies';


const Index = () => {
    const [categories, setCategories] = useState([])
    const [select, setSelect] = useState({
        categoriesID: "",
        activeCategories: ""
    })

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/categories`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setCategories(data.data)
                }
            });
    }, [])

    const handleAddCategoriesToggle = () => {
        const element = document.getElementById("add-categories-modal")

        if (element) {
            element.classList.toggle("active-modal")
        }
    }
    const handleDeleteSubCategories = (mainID, subID) => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/categories/privet/subcategories`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${getCookie()}`,
            },
            body: JSON.stringify({ mainID, subID })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setCategories(data.data)
                }
            });
    }
    const handleDeleteCategories = (mainID) => {
        fetch(`${process.env.REACT_APP_SERVER_HOST_URL}/categories/privet`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                authorization: `Bearer ${getCookie()}`,
            },
            body: JSON.stringify({ mainID })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setCategories(data.data)
                }
            });
    }



    return (
        <AdminLayouts>
            <div className='categories-container'>
                <div className='categories-warper'>
                    <ul>
                        {
                            categories.length > 0 && categories.map((item, index) => {
                                return <li key={item._id}>
                                    <button >
                                        <div className='element-container' onClick={() => {
                                            setSelect({ activeCategories: item._id })
                                        }}>
                                            <Image src={`${process.env.REACT_APP_SERVER_HOST_URL}/${item.img}`} height={100} width={100} alt='' />
                                            {item.label}
                                        </div>
                                        <div className='action-container'>
                                            <span className='add' onClick={() => {
                                                setSelect((state) => {
                                                    return { ...state, categoriesID: item._id }
                                                })
                                                handleAddCategoriesToggle()
                                            }}><IoDuplicate /></span>
                                            <span className='delete' onClick={() => handleDeleteCategories(item._id)}><RiDeleteBin5Line /></span>

                                        </div>

                                    </button>
                                    {
                                        select.activeCategories === item._id && item.subCategories.length > 0 && <ul>
                                            {
                                                item.subCategories.map((subCate, subIndex) => {
                                                    return <li key={subCate._id}>
                                                        {subCate.label}

                                                        <span onClick={() => handleDeleteSubCategories(item._id, subCate._id)}><RiDeleteBin5Line /></span>
                                                    </li>
                                                }

                                                )}
                                        </ul>
                                    }
                                </li>
                            })
                        }
                        <li>
                            <button className='add-btn' onClick={handleAddCategoriesToggle}>< IoDuplicate /> Add Categories</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <AddCategories setSelect={setSelect} select={select} setCategories={setCategories} close={handleAddCategoriesToggle} />
                </div>
            </div>
        </AdminLayouts>
    );
};

export default Index;