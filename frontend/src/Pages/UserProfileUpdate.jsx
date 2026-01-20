import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify'
import { FaLongArrowAltLeft, FaUserEdit } from 'react-icons/fa';

const UserProfileUpdate = () => {
    // const { id } = useParams();
    // const API = "http://localhost:3000";
    // // console.log(id)

    // const [isUserUpdate, setUserUpdate] = useState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     address: "",
    // });

    // // *------------------------
    // // *Get Individual User Data
    // // *------------------------
    // const getUserIndividual = async () => {
    //     const res = await fetch(`${API}/auth/user/${id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });

    //     const data = await res.json();
    //     // console.log(data)
    //     setUserUpdate(data)

    //     // if (res.ok) {
    //     //     hendleSuccess(data.message)
    //     // } else {
    //     //     hendleError(data.message)
    //     // }
    // };

    // const handleInputValue = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setUserUpdate({
    //         ...isUserUpdate,
    //         [name]: value
    //     })
    // };

    // // TODO----------------
    // // *Update User Profile
    // // TODO----------------
    // const handleUpdateUser = async (event) => {
    //     event.preventDefault();
    //     const res = await fetch(`${API}/auth/user/update/${id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(isUserUpdate)
    //     });

    //     if (res.ok) {
    //         hendleSuccess("Updated Your Profile Successfully")
    //     } else {
    //         hendleError("Not Updated Profile")
    //     }
    // };

    // useEffect(() => {
    //     getUserIndividual()
    // }, []);

    return (
        <>
            {/* <div className='Sign-up-im relative w-full min-h-screen'>
                <div className='absolute top-0 left-0 z-10 flex flex-col items-center justify-between pt-16 xs:px-4 sm:px-6 lg:px-8 pb-10 w-full h-full'>
                    <div className='flex items-center justify-end w-full h-auto text-[0.94em]'>
                        <NavLink to="/user/profile" className='flex items-center gap-x-2 my-4 font-semibold hover:text-gray-300 duration-100'>
                            <FaLongArrowAltLeft /> Back to Products
                        </NavLink>
                    </div>
                    <form onSubmit={handleUpdateUser} className='contact-form ProductComp flex flex-col items-center justify-center py-8 w-full xs:px-[8px] sm:px-[21px] lg:px-[25px] xs:w-[100%] sm:w-[420px] lg:w-[440px] rounded-md xs:text-[0.98em] xl:text-[0.94em] text-amber-50'>
                        <h2 className='flex items-center gap-x-1 text-[1.35em] font-medium '>
                            Profile <FaUserEdit className='text-2xl' />
                        </h2>
                        <div className='flex flex-col gap-y-6 mt-10 w-full'>
                            <div className='grid grid-cols-2 gap-x-3 w-full'>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    autoComplete='off'
                                    name='firstname'
                                    onChange={handleInputValue}
                                    value={isUserUpdate.firstname}
                                    className='custom-input' />
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    autoComplete='off'
                                    name='lastname'
                                    onChange={handleInputValue}
                                    value={isUserUpdate.lastname}
                                    className='custom-input' />
                            </div>
                            <input
                                type="email"
                                placeholder='Email Address'
                                autoComplete='off'
                                name='email'
                                onChange={handleInputValue}
                                value={isUserUpdate.email}
                                className='custom-input' />

                            <input
                                type="text"
                                placeholder='Address, City'
                                autoComplete='off'
                                name='address'
                                onChange={handleInputValue}
                                value={isUserUpdate.address}
                                className='custom-input' />

                        </div>
                        <div className='flex items-center justify-center flex-col mt-8 w-full'>
                            <button type='submit' className='w-full py-[7px] text-[0.96em] tracking-[0.3px] font-medium rounded-md bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                                Update Profile
                            </button>
                        </div>
                    </form>
                    <div></div>
                </div>
            </div>
            <ToastContainer /> */}
        </>
    )
}

export default UserProfileUpdate