import { NextResponse } from 'next/server';
import { BACKEND_URL } from '@/shared/constants/ulrList';


export const middleware = async (request) => {

    try {
        const token = await request.cookies.get("adminAuthToken")?.value || null
        if (!token) {

        }
        const res = await fetch(`${BACKEND_URL}/admin/auth/check-token`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`, // Add this if you have the token available
            },
        });

        // Check for response.ok or handle status errors
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }

        const data = await res.json();
        if (request.nextUrl.pathname === "/admin/signin") {
            if (data.verified) {
                return NextResponse.redirect(new URL('/admin/news', request.url))
            } else {
                return NextResponse.next();
            }
        }

        if (data.verified) {
            return NextResponse.next();
        }

    } catch (error) {
        console.error("Error in middleware ==>", error);
    }
    return NextResponse.redirect(new URL('/admin/signin', request.url))

};

export const config = {
    matcher: ['/admin/signin', '/admin/:path*'],
};
