import React, { useState } from 'react'
import { FiMinus } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { UseCartContext } from '../ContextAPI/CartContext';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Utils';

const AddProductButton = ({ product }) => {

    const { addToCart } = UseCartContext();
    const { _id, stock, status } = product;
    // console.log(product)

    const [amount, setAmount] = useState(1);

    const decreaseAmount = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    };

    const increaseAmount = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    };

    const AddcartMsg = () => {
        return hendleSuccess('Add To Your CartList')
    }

    const AddcartMsgError = () => {
        return hendleError('Not Available in Stock')
    }

    return (
        <>
            <div className='flex items-center gap-x-3 py-4 w-full h-auto'>
                <span>Quantities:</span>
                <button className='p-[4px] text-lg rounded-full'
                    onClick={decreaseAmount}>
                    <FiMinus />
                </button>
                <span>
                    {amount}
                </span>
                <button className='p-[4px] text-xl rounded-full'
                    onClick={increaseAmount}>
                    <IoAdd />
                </button>
            </div>
            <div></div>
            <div className='w-full h-auto xs:mt-2 xl:mt-4'>
                <NavLink onClick={stock ? AddcartMsg : AddcartMsgError}>
                    <button className='rounded-[2px] text-[0.9em] font-semibold' onClick={() => addToCart(_id, amount, status, product)}>
                        Add to Cart
                    </button>
                </NavLink>
            </div>
        </>
    )
}

export default AddProductButton