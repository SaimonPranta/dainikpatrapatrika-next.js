import React from 'react';
import "./style.scss"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const socialList = [
    {
        svg: <FaFacebookF />,
        link: "https://facebook.com",
        color: "#216ed3"
    },
    {
        svg: <FaTwitter />,
        link: "https://facebook.com",
        color: "#1c9bf1"

    },
    {
        svg: <FaYoutube />,
        link: "https://facebook.com",
        color: "#ff0000"

    },
    {
        svg: <FaInstagram />,
        link: "https://facebook.com",
        color: "#c038be"

    },
    {
        svg: <FaLinkedinIn />,
        link: "https://facebook.com",
        color: "#0177b5"

    },
]


const Footer = () => {
    return (
        <section className='footer-section'>
            <dvi className="container inner-container">
                <div className='social-container'>
                    {
                        [...socialList].map((socialInfo, index) => {
                            return <a key={index} href={socialInfo.link} style={{ background: socialInfo.color }}>
                                {socialInfo.svg}
                            </a>
                        })
                    }
                </div>
                <div className='chief-editor-section'>
                    <div className='editor'>
                        <h6>প্রধান সম্পাদক: আজহার মাহমুদ</h6>
                    </div>
                    <div className="links">
                        <Link href={"/"} >Home</Link>
                        <Link href={"/"} >Contact us</Link>
                    </div>
                    <div className='copy-right'>
                        <p>© ২০২৪ <strong>ক্যাম্পাসলাইভ</strong>  | সর্বস্বত্ব স্বত্বাধিকার সংরক্ষিত</p>
                    </div>
                </div>
                <div className='logo-section'>
                    <Image src="https://campuslive24.com/photos/2022-04-10-03-logo-logo.png" alt='' height={100} width={100} />
                    <Image src="https://www.campuslive24.com/img/logo2.png" alt='' height={100} width={100} />
                </div>
            </dvi>
        </section>
    );
};

export default Footer;