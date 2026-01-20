import React, { useEffect, useState } from 'react'
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import { MdDeleteSweep } from 'react-icons/md';
import { PiEmptyLight } from 'react-icons/pi';
import { UseCartContext } from '../Components/ContextAPI/CartContext';
import { ToastContainer } from 'react-toastify';
import { TfiBackLeft } from "react-icons/tfi";
import { AiOutlineClear } from 'react-icons/ai';

const CartList = () => {
    const [loginUser, setLoginUser] = useState('');
    const { cart, updateCartData, cartClear, shipping_fee, total_price } = UseCartContext();
    // console.log(cart)

    useEffect(() => {
        setLoginUser(localStorage.getItem("UserName"))
    }, [])

    if (cart.length <= 0) {
        return <div className='flex items-center justify-center gap-x-2 w-full min-h-screen text-[1.6em]'>
            Your Cart Empty <PiEmptyLight className='text-[#A258FE]'/>
        </div>
    };

    return (
        <>
            <div className='xs:p-4 sm:p-6 md:p-10 lg:p-12 xl:p-16 w-full min-h-screen overflow-hidden'>
                <div className='flex items-center xs:mt-14 md:mt-10 xl:mt-4 gap-x-1 py-5 text-xl capitalize font-semibold'>
                    {loginUser} / Your Cart <TiShoppingCart className='text-2xl'/>
                </div>
                <div className='cart-header xs:hidden md:inline-grid grid xs:grid-cols-3 md:grid-cols-6 justify-items-center w-full h-auto py-5 capitalize xs:text-[0.9em] sm:text-[0.92em] font-medium shadow-md rounded-md'>
                    <p className='flex items-center w-full pl-6 col-span-2'>
                        Product
                    </p>
                    <p>
                        Quantity
                    </p>
                    <p>
                        Status
                    </p>
                    <p>
                        price
                    </p>
                    <p>
                        Remove
                    </p>
                </div>
                <div className='flex flex-col xs:gap-y-5 md:gap-y-3 xs:mt-1 md:mt-5'>
                    {cart?.map((curItem, index) => {
                        const { id, title, amount, images, price, status } = curItem;
                        return (
                            <div key={index} className='w-full h-auto'>
                                <div className='xs:hidden md:inline-grid grid xs:grid-cols-3 md:grid-cols-6 justify-items-center w-full h-auto py-2 capitalize xs:text-[0.9em] sm:text-[0.9em] font-medium shadow-md rounded-md ProductComp'>
                                    <div className='flex items-center w-full md:pl-3 lg:pl-5 gap-x-2 col-span-2'>
                                        <figure className='w-[45px] h-[45px] object-cover rounded-md overflow-hidden'>
                                            <img className='w-full h-full object-cover' src={images} alt='Cart-List-Img' />
                                        </figure>
                                        <h3 className='font-semibold md:inline-flex xl:hidden text-[0.9em]'>
                                            {title.length > 16 ? title.slice(0, 16) + '...' : title}
                                        </h3>
                                        <h3 className='font-semibold xs:hidden xl:inline-flex text-[0.92em]'>
                                            {title}
                                        </h3>
                                    </div>
                                    <p className='flex items-center justify-center'>
                                        {amount}
                                    </p>
                                    <div className='flex items-center justify-center'>
                                        {status < false ? "Confirm" : 'Pending'}
                                    </div>
                                    <div className='flex items-center justify-center xs:hidden md:inline-flex'>
                                        Rs:{amount * price}
                                    </div>

                                    <div onClick={() => updateCartData(id)} className='flex items-center justify-center text-[2em] text-red-500 hover:text-red-400 duration-100 rounded-full'>
                                        <MdDeleteSweep className='cursor-pointer' />
                                    </div>
                                </div>

                                {/* --------------Responsive Cart Menu--------------- */}
                                <div className='header-theme flex w-full h-auto capitalize rounded-md shadow-md overflow-hidden md:hidden'>
                                    <div className='flex flex-col gap-y- w-full h-auto font-medium'>
                                        <div className='flex items-center'>
                                            <p className='cart-header flex items-center pl-2 py-2 w-24 text-[0.9em]'>
                                                Product
                                            </p>
                                            <div className='flex items-center  w-full'>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center gap-x-2 pl-3'>
                                                        <figure className='w-[30px] h-[30px] object-cover rounded-md overflow-hidden'>
                                                            <img className='w-full h-full object-cover' src={images} alt='Cart-List-Img' />
                                                        </figure>
                                                        <h1 className='text-[0.86em]'>
                                                            {title.length > 20 ? title.slice(0, 20) + '...' : title}
                                                        </h1>
                                                    </div>
                                                    <div className='pr-3'>
                                                        <p className='text-[0.9em]'>
                                                            {amount}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='cart-header flex items-center pl-2 py-[1px] w-24 text-[0.9em]'>
                                                Price
                                            </p>
                                            <div className='flex items-center w-full'>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center gap-x-2'>
                                                    </div>
                                                    <div className='pr-3'>
                                                        <p className='text-[0.88em]'>
                                                            Rs: {price.toLocaleString()}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='cart-header flex items-center pl-2 py-[1px] w-24 text-[0.9em]'>
                                                Status
                                            </p>
                                            <div className='flex items-center w-full'>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center gap-x-2'>
                                                    </div>
                                                    <div className='pr-3'>
                                                        <p className='text-[0.88em]'>
                                                            {`${status || "pending"}`}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='cart-header flex items-center pl-2 py-[1px] pb-[4px] w-24 text-[0.9em]'>
                                                Remove
                                            </p>
                                            <div className='flex items-center w-full'>
                                                <div className='flex items-center justify-between w-full'>
                                                    <div className='flex items-center gap-x-2'>
                                                    </div>
                                                    <div className='pr-3'>
                                                        <p onClick={() => updateCartData(id)} className='flex items-center justify-center text-[1.4em] text-red-500 hover:text-red-400 duration-100 rounded-full'>
                                                            <MdDeleteSweep className='cursor-pointer' />
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                <div className='flex items-center justify-between xs:py-7 md:py-9 xl:py-10 w-full h-auto xs:text-[0.7em] md:text-[0.83em] font-semibold'>
                    <NavLink to={`/shop`}>
                        <button className='flex items-center gap-x-1 px-[8px] py-2'>
                            <TfiBackLeft className='text-xl' />
                            <p>Continue Shopping</p>
                        </button>
                    </NavLink>
                    <div onClick={() => cartClear()} className='flex items-center gap-x-1 px-[9px] py-2 rounded-md cursor-pointer text-amber-50 bg-red-600 hover:bg-red-500 duration-100'>
                        <p>Clear Cart</p>
                        <AiOutlineClear className='text-xl' />
                    </div>
                </div>

                <div className='flex items-center justify-end py-10 mt-10 w-full h-auto'>
                    <div className='contact-form ProductComp p-4 xs:w-[80%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[22%] min-h-[10vh] xs:text-[0.9em] md:text-[0.95em] rounded-md shadow-sm text-amber-50 duration-100'>
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>SubTotal</p>
                            <p>Rs: {total_price.toLocaleString()}</p>
                        </div>
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>Shipping Fee</p>
                            <p>Rs: {shipping_fee}</p>
                        </div>
                        <hr className='mt-3 w-full border-gray-500' />
                        <div className='flex items-center justify-between py-[6px] w-full h-auto'>
                            <p>Total Price</p>
                            <p>Rs: {total_price + 50} </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default CartList