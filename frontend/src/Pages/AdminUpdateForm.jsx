import React from 'react'
import { useEffect } from 'react';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BsFillSendPlusFill } from 'react-icons/bs';
import { GrFormEdit } from 'react-icons/gr';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const AdminUpdateForm = () => {
    const [isForm, setIsform] = useState({
        name: "",
        email: "",
        address: "",
        message: ""
    });

    const { id } = useParams();
    const API = "http://localhost:3000";

    // *---------------------------------------------
    // *Get ContactForm Individual Data In Admin Panel
    // *---------------------------------------------
    const getSingleProductData = async () => {
        const res = await fetch(`${API}/admin/contactform/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        setIsform(data)
        // console.log(data)

    };

    const handleInputValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setIsform({
            ...isForm,
            [name]: value
        })
    };

    // TODO------------------------------
    // *ContactForm Update In admin Penal
    // TODO------------------------------
    const handleUpdateUser = async (event) => {
        event.preventDefault();
        const res = await fetch(`${API}/admin/contactform/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(isForm)
        });

        if (res.ok) {
            hendleSuccess("Form Updated Successfully, Please Refresh Your Page")
            getSingleProductData()
        } else {
            hendleError("Not Updated Form")
        }
    };

    useEffect(() => {
        getSingleProductData()
    }, [])

    return (
        <div className='flex items-center justify-between flex-col xs:px-4 sm:px-5 lg:px-6 w-full h-[100vh]'>
            <div className='flex items-center justify-end w-full h-auto md:text-[0.88em] xl:text-[0.9em]'>
                <NavLink to="/admin/contactForm" className='flex items-center gap-x-2 font-semibold text-inherit hover:text-gray-500 duration-100'>
                    <FaLongArrowAltLeft /> Back to Products
                </NavLink>
            </div>
            <div className='flex items-center justify-center py-10 w-full'>
                <form onSubmit={handleUpdateUser} className='contact-form ProductComp flex flex-col items-start justify-center xs:px-[10px] sm:px-[21px] lg:px-[25px] sm:w-[400px] lg:w-[460px] py-8 w-full text-[0.96em] rounded-md xs:order-2 md:order-1 text-amber-50'>
                    <div className='flex items-center justify-center w-full h-auto'>
                        <h1 className='flex items-center text-[1.34em] font-semibold'>
                            Update Form
                            <GrFormEdit className='text-3xl' />
                        </h1>
                    </div>
                    <div className='flex flex-col gap-y-5 mt-9 w-full h-auto'>
                        <input
                            type="text"
                            placeholder='Full Name *'
                            name='name'
                            value={isForm.name}
                            onChange={handleInputValue}
                            className='custom-input capitalize' />

                        <input
                            type="email"
                            placeholder='Email Address *'
                            name='email'
                            value={isForm.email}
                            onChange={handleInputValue}
                            className='custom-input' />

                        <input
                            type="text"
                            placeholder='Your City *'
                            name='address'
                            value={isForm.address}
                            onChange={handleInputValue}
                            className='custom-input' />

                        <textarea
                            type="text"
                            placeholder='Enter Your Message *'
                            name="message"
                            value={isForm.message}
                            onChange={handleInputValue}
                            className='custom-textarea rounded-sm xs:min-h-[200px] md:min-h-[180px] lg:min-h-[190px] max-h-[400px] leading-[21px] overflow-hidden'>
                        </textarea>
                    </div>
                    <button type='submit' className='flex items-center justify-center py-[6px] gap-x-1 mt-4 w-full text-[0.92em] tracking-[0.3px] bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                        Update
                        <BsFillSendPlusFill />
                    </button>
                </form>
                <ToastContainer />
            </div>
            {/* --------Empty Div For Center Form-------- */}
            <div>
            </div>
        </div>
    )
}

export default AdminUpdateForm