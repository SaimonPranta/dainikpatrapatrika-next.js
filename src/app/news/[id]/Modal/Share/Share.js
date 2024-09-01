"use client"
import React, { useState, useEffect } from 'react';
import "./style.scss"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiLink } from "react-icons/hi";
import { RiShareLine } from "react-icons/ri";
import { GrPrint } from "react-icons/gr";


const Share = () => {
    const [show, setShow] = useState(false)
    const [copyBtn, setCopyBtn] = useState("Copy")
    const [link, setLink] = useState("")


    useEffect(() => {
        setLink(window.location.href)
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText(link)
        setCopyBtn("Copied")
        setTimeout(() =>{
        setCopyBtn("Copy")
        }, 3000)
    }
    const printShareModalContent = () => {  
        const element = document.getElementById("news-container");
        const printWindow = window.open('');

        if (printWindow) {
            const printDocument = printWindow.document;
            printDocument.open();
            printDocument.write(`
                <html>
                <head>
                    <title>Print</title>
                    <style>
                    .news-container {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        margin-top: 20px;
                      
                        .title-container {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            color: #000;
                      
                            h2 {
                                font-size: 28px;
                      
                            }
                            .share-container {
                                position: relative;
                                display: none;
                                align-items: center;
                                gap: 15px;
                                button{
                                    padding: 5px;
                                    border-radius: 4px;
                                    cursor: pointer;
                                    svg {
                                        height: 25px;
                                        width: 25px;
                                    }
                                } 
                            }
                      
                        }
                      
                      
                        img {
                            height: 400px;
                            width: 100%;
                        }
                      
                        p {
                            color: #0F0F0F;
                        }
                      }
                    </style>
                </head>
                <body>
                    ${element.outerHTML}
                </body>
                </html>
            `);
            printDocument.close();
            printWindow.focus();
            printWindow.print();
        } else {
            console.error("Failed to open print window");
        }
    }
  

    return (
        <div className="share-container">

            <button onClick={() => { setShow((state) => !state) }}>
                <RiShareLine />
            </button>
            <button onClick={() => {
                printShareModalContent()
            }}>
                <GrPrint />
            </button>
            {
                show && <div className="share-modal ">
                    <header>
                        <span>Share Modal</span>
                        <div className="close" onClick={() => { setShow(false) }}>
                            <RxCross2 />
                        </div>
                    </header>
                    <div className="content">
                        <p>Share this link via</p>
                        <ul className="icons">
                            <a href={`https://www.facebook.com/share.php?u=${link}`}>
                                <FaFacebook />
                            </a>
                            <a href={`https://twitter.com/intent/tweet?url=${link}`}>
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/your_username/" target="_blank">
                                <FaInstagram />
                            </a>
                            <a href={`https://wa.me/?text=${encodeURIComponent(`Check out this link: ${link}`)}`}>
                                <FaWhatsapp />
                            </a>
                        </ul>
                        <p>Or copy link</p>
                        <div className="field">
                            <HiLink />
                            <input
                                type="text"
                                readOnly=""
                                defaultValue={link}
                                value={link}

                            /> 

                            <button onClick={handleCopy}>{copyBtn}</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Share;