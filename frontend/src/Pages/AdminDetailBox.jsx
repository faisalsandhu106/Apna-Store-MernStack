import React from 'react'
import CountUp from 'react-countup';
import { FaUsers } from 'react-icons/fa';
import { TbBrandProducthunt } from 'react-icons/tb';
import { LiaSalesforce } from "react-icons/lia";
import { FaBoxArchive } from 'react-icons/fa6';

const detailCards = [
    {
        icon: <TbBrandProducthunt />,
        iconText: '#635BFF',
        bgIconColor: '#e1d4f1',
        title: 'Products Sold',
        description: 'Number of items sold',
        count: '30',
        bgColor: '#8338ec'
    },
    {
        icon: <LiaSalesforce />,
        iconText: '#e45e86',
        bgIconColor: '#FFEEF3',
        title: 'Total Sales',
        description: 'Cumulative sales revenue',
        count: '500',
        bgColor: '#ff6b6b'
    },
    {
        icon: <FaBoxArchive />,
        iconText: '#cc890d',
        bgIconColor: '#fff1d6',
        title: 'Monthly Sales',
        description: 'Sales generated',
        count: '2000',
        bgColor: '#fdc500'
    },
    {
        icon: <FaUsers />,
        iconText: '#0b8d73',
        bgIconColor: '#d0fbf3',
        title: 'Total Customers',
        description: 'Customers acquired',
        count: '2115',
        bgColor: '#00a8e8'
    },
]

const AdminDetailBox = () => {
    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xs:px-6 md:px-4 lg:px-10 xl:px-24 2xl:px-24 xs:gap-4 md:gap-3 lg:gap-5 xl:gap-5 w-full h-auto overflow-hidden'>
                {
                    detailCards.map((items, index) => {
                        const { icon, iconText, bgIconColor, title, description, count, bgColor } = items;
                        return (
                            <div key={index} style={{ backgroundColor: bgColor }} className='flex items-start justify-center flex-col px-4 py-4 gap-y-4 rounded-lg shadow-md text-amber-50'>
                                <div className='flex items-center justify-between gap-x-4 w-full h-auto'>
                                    <div className='flex flex-col items-start gap-y-[1px]'>
                                        <h1 className='text-[1em] font-medium'>
                                            {title}
                                        </h1>
                                        <p className='text-[0.9em]'>
                                            {description}
                                        </p>
                                    </div>
                                    <div style={{ backgroundColor: bgIconColor, color: iconText }} className='flex items-center justify-center w-10 h-10 text-[1.2em] rounded-full'>
                                        {icon}
                                    </div>
                                </div>
                                <h1 className='w-full text-[1.1em] font-semibold'>
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
                        )
                    })
                }
            </div>
        </>
    )
}

export default AdminDetailBox