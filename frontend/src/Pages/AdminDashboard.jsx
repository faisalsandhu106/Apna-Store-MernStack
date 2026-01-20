import React, { useEffect, useState } from 'react'
import RatingProduct from '../Components/Common/RatingProduct';
import { GrUserAdmin } from 'react-icons/gr';
import AdminDetailBox from './AdminDetailBox';

const cart = [
    {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        title: "Ergonomic Office Chair",
        description: "Comfortable ergonomic chair for office use",
        rating: 3.4,
        price: "3500",
        stock: "200",
    },
    {
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        title: "Gaming Mechanical Keyboard",
        description: "RGB mechanical keyboard for gamers.",
        rating: 2.4,
        price: "2000",
        stock: "420",
    },
    {
        url: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        title: "4K Ultra HD Smart TV 55",
        description: "Comfortable ergonomic chair for office use",
        rating: 4.4,
        price: "2200",
        stock: "150",
    },
    {
        url: "https://eveen.pk/cdn/shop/files/95BE0D69-880F-4000-B80A-5CE0F7239025.jpg?v=1714151941",
        title: "Wall Self-adhesive Storage",
        description: "Wall Self-adhesive Storage Rack Toothpaste Holder Brush Holder Cactus Storage Toothbrush Holder Wall Bathroom Accessorie",
        rating: 4.8,
        price: "400",
        stock: "200",
    },
    {
        url: "data:image/jpeg;base64,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",
        title: "Wireless Earphones",
        description: "M10 TWS Bluetooth Air buds 3500mAh Power Bank Wireless Earphones with Microphone 9D",
        rating: 1,
        price: "1500",
        stock: "350",
    },
    {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
        title: "Ergonomic Office Chair",
        description: "Comfortable ergonomic chair for office use",
        rating: 3.4,
        price: "3500",
        stock: "200",
    },
    {
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        title: "Gaming Mechanical Keyboard",
        description: "RGB mechanical keyboard for gamers.",
        rating: 2.4,
        price: "2000",
        stock: "420",
    },
    {
        url: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
        title: "4K Ultra HD Smart TV 55",
        description: "Comfortable ergonomic chair for office use",
        rating: 4.4,
        price: "2200",
        stock: "150",
    },
]

const AdminDashboard = () => {
    const [isId, setIsId] = useState(); // *State to hold logged-in user's id   

    useEffect(() => {
        setIsId(localStorage.getItem("id"))
    }, [])

    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-3 xs:px-4 overflow-hidden'>
                <div className='xs:px-2 sm:px-4 lg:px-6 md:pt-2 lg:pt-4 py-5 rounded-md overflow-hidden col-span-2 xs:order-2 md:order-1'>
                    <div className='grid xs:grid-cols-3 md:grid-cols-4 justify-items-center w-full h-auto py-4 capitalize xs:text-[0.98em] sm:text-[1em] font-medium shadow-sm rounded-md text-amber-50 bg-[#1aaea9]'>
                        <p className='flex items-center justify-start w-full pl-14 col-span-2'>
                            Product
                        </p>
                        <p className='xs:hidden md:inline-flex'>
                            stock
                        </p>
                        <p>
                            price
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-3 mt-5'>
                        {cart.map((curItem, index) => {
                            const { url, description, rating, price, stock } = curItem;
                            return (
                                <div key={index} className='header-theme ProductComp grid xs:grid-cols-3 md:grid-cols-4 w-full h-auto p-2 capitalize xs:text-[0.88em] sm:text-[0.9em] rounded-md shadow-sm overflow-hidden'>
                                    <div className='flex gap-x-2 col-span-2'>
                                        <figure className='w-[40px] h-[40px] object-cover rounded-sm overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={url} alt='Cart-List-Img' />
                                        </figure>
                                        <div>
                                            {/* -----For lg Sreen------  */}
                                            <h3 className='flex text-wrap font-semibold xs:hidden lg:inline-flex'>
                                                {description.length > 30 ? description.slice(0, 30) + '...' : description}
                                            </h3>
                                            {/* -----For xs Sreen------  */}
                                            <h3 className='flex text-wrap font-semibold lg:hidden'>
                                                {description.length > 15 ? description.slice(0, 15) + '...' : description}
                                            </h3>
                                            <span className='text-[0.85em]'>
                                                <RatingProduct rating={rating} />
                                            </span>
                                            <div className='flex items-center mt-2 gap-x-2 font-medium md:hidden'>
                                                <span className='font-medium'>Stock</span>
                                                {stock}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center font-medium xs:hidden md:inline-flex'>
                                        {stock}
                                    </div>
                                    <div className='flex items-center justify-center font-medium'>
                                        Rs:{price}
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                <div className='flex flex-col items-center xs:pb-6 sm:pb-0 xs:order-1'>
                    {/*-----------Welcome Admin Box----------- */}
                    <div className='flex flex-col p-3 gap-y-2 xs:w-[100%] sm:w-[260px] lg:w-[310px] xl:w-[380px] rounded-lg shadow-sm text-amber-50 bg-[#635BFF] duration-100'>
                        <div className='flex flex-col w-full h-auto'>
                            <h1 className='text-[0.97em] font-medium'>  
                                Welcome To Admin Dashboard
                            </h1>
                            <p className='text-[0.88em]'>
                                {`${isId ? "Hi, Admin" : "Please, Login"}`}
                            </p>
                        </div>
                        <div className='flex items-center justify-between w-full h-auto'>
                            <h1 className='w-full text-[0.94em]'>
                                You
                            </h1>
                            <div className='flex items-center justify-center w-[33px] h-[33px] text-[1em] rounded-full text-[#7E3BE2] bg-[#F1EAFB]'>
                                <GrUserAdmin />
                            </div>
                        </div>
                    </div>

                    {/*-----------Dashboard Marquee 1----------- */}
                    <div className='header-theme mt-5 w-full xs:h-[550px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden'>
                        <div className='Dashboard-Marquee w-full h-auto'>
                            <img className='w-full h-full bg-cover' src="/pic/bannerimg1-CISwt5ZE.png" alt="banner-img" />
                            <img className='w-full h-full bg-cover' src="/pic/bannerimg1-CISwt5ZE.png" alt="banner-img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid xs:grid-cols-1 md:grid-cols-4 gap-y-3 w-full h-auto overflow-hidden'>
                {/*-----------Dashboard Marquee 2----------- */}
                <div className='header-theme xs:mt-3 w-full xs:h-[550px] md:h-[380px] lg:h-[500px] rounded-lg overflow-hidden'>
                    <div className='Dashboard-Marquee w-full h-auto'>
                        <img className='w-full h-full bg-cover' src="/pic/bannerimg2-CaLPzz6v.png" alt="banner-img" />
                        <img className='w-full h-full bg-cover' src="/pic/bannerimg2-CaLPzz6v.png" alt="banner-img" />
                    </div>
                </div>

                <div className='md:col-span-3 flex items-center justify-start py-5 w-full h-auto'>
                    <AdminDetailBox />
                </div>
            </div>
        </>
    )
}

export default AdminDashboard