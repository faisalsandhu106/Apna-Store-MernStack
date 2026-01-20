import React from 'react'
import CountUp from 'react-countup';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegEye } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { LuShoppingBag } from "react-icons/lu";

const detailCards = [
    {
        icon: <FaRegEye />,
        iconText: '#635BFF',
        bgIconColor: '#e1d4f1',
        title: 'Creativitiy Fuel',
        count: '22070',
        bgColor: '#8338ec'
    },
    {
        icon: <LuShoppingBag />,
        iconText: '#e45e86',
        bgIconColor: '#FFEEF3',
        title: 'Happy Clients',
        count: '500',
        bgColor: '#ff6b6b'
    },
    {
        icon: <AiOutlineProduct />,
        iconText: '#cc890d',
        bgIconColor: '#fff1d6',
        title: 'All Products',
        count: '30',
        bgColor: '#fdc500'
    },
    {
        icon: <IoTimeOutline />,
        iconText: '#0b8d73',
        bgIconColor: '#d0fbf3',
        title: 'Hours Spent',
        count: '22115',
        bgColor: '#00a8e8'
    },
]

const ReviewSec = () => {
    return (
        <div className='header-theme grid xs:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 md:justify-items-center xs:px-6 md:px-4 lg:px-5 xl:px-20 2xl:px-44 xs:gap-y-5 md:gap-4 xl:gap-x-10 xs:py-12 lg:py-16 xs:mt-12 sm:mt-8 md:mt-0 lg:mt-5 xl:mt-20 w-full min-h-[10vh] overflow-hidden'>
            {
                detailCards.map((items, index) => {
                    const { icon, iconText, bgIconColor, title, count, bgColor } = items
                    return (
                        <div key={index} style={{ backgroundColor: bgColor }} className='ProductComp flex items-center justify-center flex-col xs:pl-6 md:pl-4 lg:pl-6 py-4 xl:p-6 gap-y-2 md:w-[180px] md:min-h-[100px] lg:w-[234px] xl:w-[290px] rounded-lg shadow-sm duration-100 text-white'>
                            <div className='flex w-full'>
                                <div style={{ color: iconText, backgroundColor: bgIconColor }} className='flex items-center justify-center w-11 h-11 text-[1.4em] rounded-full'>
                                    {icon}
                                </div>
                            </div>

                            <div className='flex mt-2 w-full'>
                                <p className='xs:text-[1em] md:text-[0.96em] xl:text-[1.1em] font-medium uppercase'>
                                    {title}
                                </p>
                            </div>
                            <div className='flex w-full'>
                                <h1 className='xs:text-[1em] xl:text-[1.2em] font-semibold'>
                                    <CountUp
                                        end={count}
                                        separator=','
                                        suffix='+'
                                        duration={4}
                                        enableScrollSpy={true}
                                        scrollSpyOnce={true}
                                    />
                                </h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReviewSec