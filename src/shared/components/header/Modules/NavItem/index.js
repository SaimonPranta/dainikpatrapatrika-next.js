"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Index = ({currentPath, currentLabel}) => {
        const pathname = usePathname();
    return (
        <Link href={currentPath} className={currentPath === pathname ? "active" : ""} >
            {currentLabel}
        </Link>
    );
};

export default Index;