import React from 'react'
import AdminSideBar from '../Components/AdminComps/AdminSideBar';
import { Outlet } from 'react-router-dom';

const AdminPanel = () => {
    return (
        <>
            <div className='Admin-bgColor absolute top-0 z-[100] pt-24 pb-10 w-full min-h-[100vh] '>
                <AdminSideBar />
                <Outlet />
            </div>
        </>
    )
}

export default AdminPanel