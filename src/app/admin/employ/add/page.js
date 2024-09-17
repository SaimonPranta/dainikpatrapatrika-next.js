"use client"
import React, { useEffect, useState } from 'react';
import "./style.scss"
import AdminLayouts from '@/shared/layouts/AdminLayouts/AdminLayouts';
import { useDispatch, useSelector } from 'react-redux';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Image from 'next/image';
import { MdArrowBackIosNew } from "react-icons/md";
import { useRouter } from 'next/navigation';


const Page = () => {
    const [input, setInput] = useState({})
    const router = useRouter();
    const handleBackNavigation = () => {
        router.push("/admin/employ")
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
        if(!input.name || !input.fatherName ||  !input.motherName || !input.password || !input.dateOfBirth || !input.email || !input.position || !input.idNumber ||!input.joinDate || !input.idCardExpDate || !input.address || !input.img){
            return 
        }
        const formData = new FormData()
        formData.append("data", JSON.stringify(input))
        formData.append("img", input.img) 
        fetch(`${BACKEND_URL}/admin/employ`, {
            method: 'POST', 
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
                    <button onClick={handleBackNavigation}><MdArrowBackIosNew/> <span>Back</span></button>
                    <h6>Add Employ</h6>
                </div>
                <div className='add-news'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type='text' name='name' value={input.name || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>{`Father's Name`}</label>
                            <input type='text' name='fatherName' value={input.fatherName || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>{`Mother's Name`}</label>
                            <input type='text' name='motherName' value={input.motherName || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='text' name='email' value={input.email || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Date of Birth</label>
                            <input type='date' name='dateOfBirth' value={input.dateOfBirth || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Position</label>
                            <input type='text' name='position' value={input.position || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>ID Number</label>
                            <input type='text' name='idNumber' value={input.idNumber || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Joining Date</label>
                            <input  type='date' name='joinDate' value={input.joinDate || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>ID Card Expire Date</label>
                            <input type='date'  name='idCardExpDate' value={input.idCardExpDate || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Address</label>
                            <input type='text' name='address' value={input.address || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='text' name='password' value={input.password || ""} placeholder='type here...' onChange={handleInputChange} />
                        </div>
                        <div>
                           <label>Profile Picture</label>
                           <input type='file' accept="image/*"  placeholder='chose' name="img" onChange={handleInputChange} />
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