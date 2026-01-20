import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';

const SigupUpdated = () => {

    const [isUser, setIsuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        address: "",
        password: ""
    });

    const { id } = useParams();
    // console.log('params single product', id);

    // *---------------------------------------------
    // *Get Allproduct Individual Data In Admin Panel
    // *---------------------------------------------
    const getSingleProductData = async () => {
        const res = await fetch(`http://localhost:3000/admin/user/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        setIsuser(data)

        // if (res.ok) {
        //     hendleSuccess(data.message)
        // } else {
        //     hendleError(data.message)
        // }

    };

    const handleInputValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setIsuser({
            ...isUser,
            [name]: value
        })
    };

    // TODO--------------------------
    // *Product Update In admin Penal
    // TODO--------------------------
    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const res = await fetch(`http://localhost:3000/admin/user/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(isUser)
        });

        if (res.ok) {
            hendleSuccess("Updated data Successfully")
        } else {
            hendleError("Not Updated Data")
        }
    };

    useEffect(() => {
        getSingleProductData()
    }, [])



    return (
        <>
            <form onSubmit={handleUpdateUser} className='grid grid-cols-1 xl:grid-cols-1 gap-4 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-32 w-full h-auto'>
                <div className='grid grid-cols-1 justify-items-center py-10 w-full h-auto gap-5 text-[0.91em] capitalize'>
                    <div className='flex items-center gap-x-2 mb-2 w-full'>
                        <span className='font-medium'>First Name:</span>
                        <input type="text" placeholder='' name='firstname' value={isUser.firstname} onChange={handleInputValue} />
                    </div>
                    <div className='flex items-center gap-x-2 mb-2 w-full'>
                        <span className='font-medium'>last name:</span>
                        <input type="text" placeholder='' name='lastname' value={isUser.lastname} onChange={handleInputValue} />
                    </div>

                    <div className='flex items-center gap-x-2 w-full'>
                        <p className='font-medium'>email:</p>
                        <input type="email" placeholder='' name='email' value={isUser.email} onChange={handleInputValue} />
                    </div>
                    <div className='flex items-center gap-x-2 w-full'>
                        <p className='font-medium'>address:</p>
                        <input type="text" placeholder='address' name='address' value={isUser.address} onChange={handleInputValue} />
                    </div>
                    <div className='flex items-center gap-x-2 w-full'>
                        <p className='font-medium'>password:</p>
                        <input type="text" placeholder='password' name='password' value={isUser.password} onChange={handleInputValue} />
                    </div>
                </div>
                <button type='submit'>
                    Update profile
                </button>
            </form>
            <ToastContainer />
        </>
    )
}

export default SigupUpdated