import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { FaUserEdit } from 'react-icons/fa';
import { BsFillSendPlusFill } from 'react-icons/bs';

const UserProfile = () => {
    const [isId, setIsId] = useState();
    const API = "https://apna-store-backend-two.vercel.app";
    
    const [isUserProfileData, setUserProfileData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
    });

    const {
        firstname,
        lastname,
        email,
        address
    } = isUserProfileData;

    const handleInputValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserProfileData({
            ...isUserProfileData,
            [name]: value
        })
    };

    //* ---------------------
    //* Get User Profile Data
    //* ---------------------
    const getUserData = async () => {
        const res = await fetch(`${API}/auth/user/${isId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        setUserProfileData(data)
    };

    //TODO----------------------
    //* Update User Profile Data
    //TODO----------------------
    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const res = await fetch(`${API}/auth/user/update/${isId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(isUserProfileData)
        });

        if (res.ok) {
            hendleSuccess("Updated Your Profile Successfully")
        } else {
            hendleError("Please, Login Your Account")
        }
    };

    useEffect(() => {
        setIsId(localStorage.getItem("id"))
        getUserData()
    }, [isId])

    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 items-start xs:px-4 md:px-6 lg:px-10 xl:px-5 pt-24 gap-y-8 w-full min-h-screen overflow-hidden'>
                <div className='ProductCom contact-form text-amber-50 flex flex-col xs:px-3 sm:px-5 lg:px-5 py-4 gap-y-6 w-full h-auto rounded-md capitalize'>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-x-2'>
                            <div className='w-14 h-14 rounded-full overflow-hidden'>
                                <img className='w-full h-full bg-cover' src="/pic/profile.png" alt="user-profile-img" />
                            </div>
                            <div>
                                <p className='text-[0.94em] font-medium'>
                                    {firstname ? `${'Hi, ' + firstname}` : 'Please, Login'}
                                </p>
                                <p className='text-[0.82em] lowercase'>
                                    {email}
                                </p>
                            </div>
                        </div>
                        <div>
                            {
                                isId && (
                                    <div className='px-[8px] py-[6px] text-[0.76em] tracking-[0.3px] font-medium rounded-md cursor-pointer bg-[#db319d] hover:bg-[#a41570]'>
                                        Change Picture
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 text-[0.88em]'>
                        <div className='flex justify-between w-full'>
                            <p className='min-w-[100px] font-medium'>First Name:</p>
                            <div>
                                {firstname ? `${firstname}` : '--- ---'}
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='min-w-[100px] font-medium'>last name:</p>
                            <div>
                                {lastname ? `${lastname}` : '--- ---'}
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='min-w-[100px] font-medium'>email:</p>
                            <div className='lowercase'>
                                {email ? `${email}` : '--- ---'}
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <p className='min-w-[100px] font-medium'>address:</p>
                            <div className='text-end'>
                                {address ? `${address}` : '--- ---'}
                            </div>
                        </div>
                        {/* <div className='flex mt-4 w-full'>
                            {
                                isId && (
                                    <NavLink to={`/user/profile/edit/${isId}`} className='flex items-center gap-x-1 px-[8px] py-[5px] text-[0.9em] font-extrabold tracking-[0.3px] rounded-md bg-[#db319d] hover:bg-[#a41570]'>
                                        <p>Edit</p>
                                        <MdEdit className='text-[1.2em]' />
                                    </NavLink>
                                )
                            }
                        </div> */}
                    </div>
                </div>
                <div className='flex items-start justify-center xl:col-span-2 w-full min-h-[10vh]'>
                    <form onSubmit={handleUpdateUser} className='ProductComp relative flex flex-col items-center justify-center py-8 w-full xs:px-[10px] sm:px-[21px] lg:px-[25px] xs:w-[100%] sm:w-[420px] lg:w-[440px] rounded-md xs:text-[0.98em] lg:text-[0.96em] overflow-hidden'>
                        <div className='contact-form absolute top-0 right-[-30px] w-24 h-12 rounded-b-full'></div>
                        <h2 className='flex items-center gap-x-1 text-[1.35em] font-medium '>
                            Profile Edit <FaUserEdit className='text-2xl' />
                        </h2>
                        <div className='flex flex-col gap-y-5 mt-10 w-full capitalize'>
                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="firstname" className='font-medium'>firstname <span className='text-red-500'>*</span> </label>
                                <input
                                    type="text"
                                    placeholder={isUserProfileData.firstname ? 'First Name' : '--- ---'}
                                    autoComplete='off'
                                    name='firstname'
                                    onChange={handleInputValue}
                                    value={isUserProfileData.firstname}
                                    className='userProfile-input' />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="lastname" className='font-medium'>lastname <span className='text-red-500'>*</span> </label>
                                <input
                                    type="text"
                                    placeholder={lastname ? `Last Name` : '--- ---'}
                                    autoComplete='off'
                                    name='lastname'
                                    onChange={handleInputValue}
                                    value={isUserProfileData.lastname}
                                    className='userProfile-input' />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="email" className='font-medium'>email address <span className='text-red-500'>*</span> </label>
                                <input
                                    type="email"
                                    placeholder={email ? `Email Address` : '--- ---'}
                                    autoComplete='off'
                                    name='email'
                                    onChange={handleInputValue}
                                    value={isUserProfileData.email}
                                    className='userProfile-input' />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <label htmlFor="address" className='font-medium'>address <span className='text-red-500'>*</span> </label>
                                <input
                                    type="text"
                                    placeholder={address ? `Address, City` : '--- ---'}
                                    autoComplete='off'
                                    name='address'
                                    onChange={handleInputValue}
                                    value={isUserProfileData.address}
                                    className='userProfile-input' />
                            </div>
                        </div>
                        <div className='mt-6 w-full'>
                            <button type='submit' className='flex items-center justify-center gap-x-1 w-full py-[8px] text-[0.98em] tracking-[0.1px] font-medium rounded-md bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                                Update <BsFillSendPlusFill />
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default UserProfile
