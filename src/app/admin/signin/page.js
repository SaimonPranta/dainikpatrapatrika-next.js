'use client'
import React, { useState } from 'react'
import "./style.scss"
// import Header from "@/shared/components/header/header"
import loginImg from '../../../assets/images/signin/signin.jpg'
import { BACKEND_URL } from '@/shared/constants/ulrList';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';



const Index = () => {
    const [input, setInput] = useState({})
    const router = useRouter()

    const onSubmit = (e) => { 
        e.preventDefault()
        fetch(`${BACKEND_URL}/admin/auth`, {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify({ ...input})
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.data) {
                    router.push("/admin/news")
                }
                if (data.token) {
                    Cookies.set('adminAuthToken', data.token, { expires: 3, path: '/' });
                }
            }).catch((error) => {})


    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log("name ==>>", name)
        console.log("value ==>>", value)

        setInput((state) => {
            return {
                ...state,
                [name]: value
            }
        })
    }

    return (
        <div>
            {/* <Header /> */}
            <div className="signin-container">
                <form className="contact2-form validate-form" autoComplete='false' onSubmit={onSubmit}>
                    <span className="contact2-form-title">
                        Admin Singin
                    </span>

                    <div className="validate-input">
                        <input className={`input2 ${input.mail ? "fill" : ""}`} type="text" value={input.mail || ""} name="mail" onChange={handleChange} />
                        <span className="focus-input2">Mail</span>
                    </div>
                    <div className="validate-input" >
                        <input className={`input2 ${input.password ? "fill" : ""}`} type="password" value={input.password || ""} name="password" onChange={handleChange} />
                        <span className="focus-input2">Password</span>
                    </div>
                    <div className="container-contact2-form-btn">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Index