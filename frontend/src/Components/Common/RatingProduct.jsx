import React from 'react'
import { AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';

const RatingProduct = ({ rating }) => {
    // console.log(rating);
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {rating >= index + 1 ?
                    <FaStar />
                    : rating >= number ? <FaStarHalfAlt />
                        : <AiOutlineStar className='text-gray-400' />
                }
            </span>
        )
    });

    return (
        <>
            <div className='flex items-center gap-x-[2px] text-yellow-400'>
                {ratingStar}
            </div>
        </>
    )
}

export default RatingProduct