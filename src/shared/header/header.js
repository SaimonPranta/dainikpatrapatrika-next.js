import Image from "next/image";
import "./style.scss"
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const navigationArray = [
    {
        label: "প্রচ্ছদ",
        path: "",
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "প্রচ্ছদ",
        path: "",
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },
    {
        label: "ক্যাম্পাস",
        path: "",
        subPagesList: [
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
            {
                label: "প্রচ্ছদ",
                path: "",
            },
        ]
    },

]

const Index = () => {
    return (
        <header className="header">
            <div className="top-section">
                <div className="top-inner-container container">
                    <div className="left">
                        <p>ঢাকা | শনিবার, ২রা মার্চ ২০২৪, ১৯শে ফাল্গুন ১৪৩০</p>
                    </div>
                    <div className="right">
                        <div>
                            <a href="/" />
                            <a href="/" />
                            <a href="/" />
                            <a href="/" />
                        </div>
                        <div className="language-btn">
                            <button>
                                English
                            </button>
                            <button>
                                Video
                            </button>
                        </div>
                        <div className="search-container">
                            <button>
                                <IoIosSearch />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="logo-container">
                <Image width="100" height="100" src="https://campuslive24.com/photos/2022-04-10-03-logo-logo.png" alt="" />
            </div>
            <nav className="container navigation-container" >
                <ul>
                    {
                        navigationArray.length > 0 && navigationArray.map((routeInfo, index) => {
                            return <li key={index}>
                                <Link href={`/${routeInfo.path}`} >
                                    {routeInfo.label}
                                </Link>
                                {
                                    routeInfo?.subPagesList?.length > 0 && <>
                                        <button> <MdOutlineKeyboardArrowDown /> </button>
                                        <ul>
                                            {
                                                routeInfo?.subPagesList.map((subRouteInfo, subIndex) => {
                                                    return <li key={index} >
                                                        <Link href={`/${routeInfo.path}/${subRouteInfo.path}`} >
                                                            {routeInfo.label}
                                                        </Link> </li>
                                                })
                                            }
                                        </ul>
                                    </>
                                }

                            </li>
                        })
                    }

                </ul>
            </nav>
        </header >

    );
};

export default Index;