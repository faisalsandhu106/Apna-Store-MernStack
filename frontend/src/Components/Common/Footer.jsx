import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { IoBagHandleSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear(); //* For Current Year

    const GoMoveToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }

    return (
        <>
            <footer className='contact-form flex flex-col text-amber-50 overflow-hidden'>
                <div className='grid xs:grid-cols-1 md:grid-cols-5 xs:gap-y-10 md:justify-items-center py-10 px-4 w-full h-auto'>
                    <div className='flex flex-col items-start'>
                        <p className='text-[1em] font-semibold'>
                            Talk to us today
                        </p>
                        <div className='mt-1 text-[0.8em] capitalize'>
                            Get Started
                        </div>
                    </div>
                    <div className='flex flex-col md:col-span-2'>
                        <h3 className='text-[1em] font-semibold'>
                            Apna Store
                        </h3>
                        <p className='mt-1 text-[0.9em] tracking-[0.05px]'>
                            Stay updated with the latest deals, new arrivals, and exclusive offers. Join our newsletter and never miss a great deal again!
                        </p>
                        <div className="flex flex-col mt-4">
                            <p className='mb-2 text-[0.9em]'>
                                Subscribe to get important updates
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 text-[0.9em]'>
                        <p>Follow Us</p>
                        <div className='flex items-center gap-x-3'>
                            <a href="#">
                                <FaFacebookF className='text-xl rounded-md hover:bg-gray-300 hover:text-black duration-100' />
                            </a>
                            <a href="#">
                                <FaInstagram className='text-xl rounded-md hover:bg-gray-300 hover:text-black duration-100' />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-1 text-[0.9em]'>
                        <p>Call Us</p>
                        <a href="tel:3046594966" className='hover:text-[#8080fc] duration-100'>
                            +92 3046594966
                        </a>
                    </div>
                </div>
                <div className='flex items-center justify-between xs:px-3 md:px-8 lg:px-16 py-4 text-wrap xs:text-[0.75em] md:text-[0.85em] border-t-2 border-gray-500'>
                    <p className='xs:hidden md:inline-flex'>
                        <NavLink to='/home' className='flex items-start gap-x-[2px] text-[0.99em] text-amber-50 font-semibold text-nowrap tracking-[0.4px] rounded-sm cursor-pointer'>
                            <IoBagHandleSharp className='text-[2.2em]' />
                            APNA-STORE
                        </NavLink>
                    </p>
                    <p className='xs:w-[80%] md:w-auto'>
                        Copyright &copy; {currentYear} Apna Store || Code By Faisal Nazir
                    </p>
                    <div onClick={GoMoveToTop} className='flex items-center justify-center w-[32px] h-[32px] text-lg cursor-pointer text-black bg-white rounded-full animate-bounce'>
                        <FaLongArrowAltUp />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer