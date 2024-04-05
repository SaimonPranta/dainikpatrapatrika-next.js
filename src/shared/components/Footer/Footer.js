import React from 'react';
import "./style.scss"
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assets/images/home/dainikpatropatrika.jpg"

const socialList = [
    {
        svg: <FaFacebookF />,
        link: "https://www.facebook.com/dainikpatrapatrika24",
        color: "#216ed3"
    },
    {
        svg: <FaTwitter />,
        link: "https://twitter.com/i/flow/login?redirect_after_login=%2FPatraPatrika",
        color: "#1c9bf1"

    },
    {
        svg: <FaYoutube />,
        link: "https://www.youtube.com/@dainikpatrapatrika",
        color: "#ff0000"

    },
    {
        svg: <FaInstagram />,
        link: "https://www.youtube.com/@dainikpatrapatrika",
        color: "#c038be"

    },
    {
        svg: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/dainik-patra-patrika?fbclid=IwAR3-7tvynhHE4zQe3Ijt0XiFm0shlNrd-86C7KLJ8O5hOeRWsaPJfcdKb_E_aem_AWGAF9iyC59I307z3h5cE2BgLCpVwOucLYLEwl0YWfl0voNDfHsNKcB_JjkP11Ch7it9dyJaVjxKYuTiCJelMO4e",
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
                        <h6>প্রকাশক : আই এম আরিফুল্লাহ</h6>
                        <h6>সম্পাদক : মোঃ আমিমুল এহসান </h6>
                    </div>
                    
                    <div className="links">
                        <Link href={"/"} >Home</Link>
                    </div>
                    <div className='copy-right'>
                        <p>© ২০২৪ <strong>দৈনিক পত্র পত্রিকা </strong>  | সর্বস্বত্ব স্বত্বাধিকার সংরক্ষিত</p>
                    </div>
                </div>
                <div className='logo-section'>
                   <div className="contacts">
                        <p>ফোন : +৮৮০১৯২২১৪০৫৯২ </p>
                        <p>বিজ্ঞাপন : +৮৮০১৫১৫২১৬২৭১</p>
                        <p>ই-মেইল: dainikpatrapatrika@gmail.com</p>
                        <p>ই-মেইল: dainikpatrapatrika24@gmail.com</p>
                        <p>ক-১৬১/এ, মধ্যপাড়া, খিলক্ষেত বাজার, ঢাকা- ১২২৯, বাংলাদেশ ।</p>
                     </div>
                    <Image src={logo} alt='' height={100} width={100} />
                </div>
            </dvi>
        </section>
    );
};

export default Footer;