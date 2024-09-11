"use client"
import React, { useEffect, useState } from 'react';
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Image from 'next/image';
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from 'next/navigation';


const Page = () => {
    const [input, setInput] = useState({})
    const router = useRouter();

   
    const handleBackNavigation = () => {
        router.push("/admin/ads")
    }

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

       
        if (name === "img") {
            value = e.target.files[0]
        }
        setInput((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!input.title || !input.targetLink || !input.img) {
            return
        }

        const formData = new FormData()
        formData.append("data", JSON.stringify(input))
        formData.append("img", input.img)
        fetch(`${BACKEND_URL}/admin/ads`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    handleBackNavigation()
                }
            }).catch((error) => { })
    }

    return (
        <AdminLayouts>
            <div className='add-news-page'>
                <div className='title-container'>
                    <button onClick={handleBackNavigation}><MdArrowBackIosNew /> <span>Back</span></button>
                    <h6>Add Ads</h6>
                </div>
                <div className='add-news'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div>
                            <label>Title</label>
                            <input type='text' name='title' value={input.title || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Target Link</label>
                            <input type="link" name='targetLink' value={input.targetLink || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        {/* <div>
                            <label>Category</label>
                            <select value={input.category || ""} name="category" onChange={handleInputChange}>
                                <option hidden>---Select---</option>

                                {
                                    categories.value.map((routeInfo) => {
                                        return <option key={routeInfo._id}   >{routeInfo.label}</option>
                                    })
                                }
                            </select>

                        </div> */}
                        {/* {
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
                        } */}

                        <div>
                            <label>Chose Image</label>
                            <input type='file' accept="image/*" placeholder='chose' name="img" onChange={handleInputChange} />
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

export default Page;