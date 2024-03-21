
import React from 'react';
import "./style.scss";
import AdminSideNav from '@/shared/components/AdminSideNav/AdminSideNav';

const AdminLayouts = ({ children }) => {
    return (
        <div className="admin-layouts">
            <div className='admin-side-nav-container'>
                <AdminSideNav />
            </div>
            <div className='admin-page-body'>
                {children}
            </div>
        </div>
    );
};

export default AdminLayouts;