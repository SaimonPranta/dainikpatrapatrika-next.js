"use client"
import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Index = ({subCategories, routeInfo}) => {
    return (
        <>
            <button> <MdOutlineKeyboardArrowDown /> </button>
            <ul>
                {
                    subCategories.map((subRouteInfo, subIndex) => {
                        return <li key={subRouteInfo._id} >
                            <Link href={`/topic/${routeInfo.route}?subCategory=${subRouteInfo.route}`} >
                                {subRouteInfo.label}
                            </Link> 
                            </li>
                    })
                }
            </ul>
        </>
    )
}

export default Index