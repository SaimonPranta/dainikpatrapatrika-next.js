"use client"
import React, { useEffect, useState } from 'react';
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import { useDispatch, useSelector } from 'react-redux';
import { addCategories } from '@/store/categories/reducer';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Image from 'next/image';
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter, useParams } from 'next/navigation';


const page = () => {
    const [input, setInput] = useState({})
    const [subcategories, setSubcategories] = useState([])
    const { categories } = useSelector(state => state)
    const dispatch = useDispatch()
    const router = useRouter();
    const { id } = useParams()


    useEffect(() => {
        fetch(`${BACKEND_URL}/admin/news?id=${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    setInput(data.data)
                }
            }).catch((error) => {})
    }, [])
    useEffect(() => {
        if (categories.value.lenght) {
            return
        }
        fetch(`${BACKEND_URL}/public/categories`)
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    dispatch(addCategories(data.data))
                }
            }).catch((error) => {})
    }, [])


    const handleBackNavigation = () => {
        router.push("/admin/news")
    }

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "category") {
            const findCategoriess = categories.value.find((cateInfo) => cateInfo.label === value)
            setSubcategories(findCategoriess?.subCategories || [])
        }
        if (name === "newImg") {
            value = e.target.files[0]
        }
        setInput((state) => {
            if (name === "category") {
                delete state["subcategory"]
            }
            return {
                ...state,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input.title || !input.description || !input.category) {
            return
        }

        const formData = new FormData()
        formData.append("data", JSON.stringify(input))
        if(input.newImg){
            formData.append("img", input.newImg)
        }
        fetch(`${BACKEND_URL}/admin/news`, {
            method: 'PUT',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    handleBackNavigation()
                }
            }).catch((error) => {})
    }

    return (
        <AdminLayouts>
            <div className='add-news-page'>
                <div className='title-container'>
                    <button onClick={handleBackNavigation}><MdArrowBackIosNew /> <span>Back</span></button>
                    <h6>Edit News</h6>
                </div>
                <div className='add-news'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input type='text' name='title' value={input.title || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name='description' value={input.description || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Category</label>
                            <select value={input.category || ""} name="category" onChange={handleInputChange}>
                                <option hidden>---Select---</option>

                                {
                                    categories.value.map((routeInfo) => {
                                        return <option key={routeInfo._id}   >{routeInfo.label}</option>
                                    })
                                }
                            </select>

                        </div>
                        {
                            subcategories.length > 0 && <div>
                                <label>Subcategory</label>
                                <select value={input.subcategory || ""} name="subcategory" onChange={handleInputChange}>
                                    <option hidden>---Select---</option>
                                    {
                                        subcategories.map((routeInfo) => {

                                            return <option key={routeInfo._id}   >{routeInfo.label}</option>
                                        })
                                    }
                                </select>

                            </div>
                        }

                        <div>
                            <label>Chose Image</label>
                            <input type='file' accept="image/*" placeholder='chose' name="newImg" onChange={handleInputChange} />
                        </div>
                        {/* <div>
                            <Image src={URL.createObjectURL(input.img || "")} alt="" height="100"  />
                        </div> */}

                        <div className="action-btn-container">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayouts>
    );
};

export default page;