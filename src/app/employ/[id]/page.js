import React from 'react'
import './style.scss'
import Header from '@/shared/components/header/header';
import Link from 'next/link';
import Image from 'next/image';
import { BACKEND_URL } from '@/shared/constants/ulrList';
import getImageUrl from '@/shared/functions/getImageUrl';
import dateToDateString from '@/shared/functions/dateToDateString';


const getProfileInfo = async (id) => {
    try {
        const response = await (await fetch(`${BACKEND_URL}/public/employ/${id}`, { 'cache': 'no-store' })).json();
        if (response.data) {
            return response.data
        }
        return {}
    } catch (error) {
        return {}
    }

}

const Page = async ({ params, searchParams },) => {
    const id = params.id
    const profileInfo = await getProfileInfo(id)

    if (!profileInfo._id) {
        return <h1>Not Found</h1>
    }

    return (
        <>
            <Header />
            <div className='employ-profile'>
                <div className="container inner-container">
                    <div className='nav'>
                        <Link href={"/"} >Home </Link>
                        <span>/</span>
                        <Link href={"/employ"} >Employ </Link>
                        <span>/</span>
                        <span> Employ Profile </span>
                    </div>
                    <div className='head-section'>
                        <div className="img-container">
                            <Image height={100} width={100} alt='' src={getImageUrl(profileInfo.profilePicture)} />
                        </div>
                        <h3>{profileInfo.name}</h3>
                        <p>{profileInfo.position}</p>
                        <p>Dainik Patrapatrika, Moddopara, Dhaka 1201</p>
                    </div>
                    <div className='details-section'>
                        <ul>
                            <li><p>Full Name: </p> <p>{profileInfo.name}</p></li>
                            <li> <p>ID Number: </p> <p>{profileInfo.idNumber}</p></li>
                            <li><p>Email: </p> <p>{profileInfo.email}</p></li>
                            <li><p>{`Father's Name:`} </p> <p>{profileInfo.fatherName}</p></li>
                            <li><p>{`Mother's Name: `}</p> <p>{profileInfo.motherName}</p></li>
                            <li><p>Date of Birth: </p> <p>{dateToDateString(profileInfo.dateOfBirth)}</p></li>
                            <li><p>Join Date: </p> <p>{dateToDateString(profileInfo.joinDate)}</p></li>
                            <li><p>ID Card Expire Date: </p> <p>{dateToDateString(profileInfo.idCardExpDate)}</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page