import React from 'react'
import { NavLink } from 'react-router-dom';
import RatingProduct from '../Common/RatingProduct';
import { UseProductContext } from '../ContextAPI/ProductContext';

const GridProductSec = ({ curElem, index }) => {
    // const { getIndividualProducts } = UseProductContext()
    const { _id, images, price, category, rating, shortDescription } = curElem;

    return (
        // onClick={() => getIndividualProducts(_id)}
        <div className='w-auto h-auto'>
            <NavLink to={`/shop/${_id}`} key={index} className='ProductComp flex items-start justify-between flex-col p-2 xs:min-w-[160px] md:min-w-[175px] lg:min-w-[190px] xl:min-w-[205px] xs:text-[0.9em] sm:text-[0.84em] lg:text-[0.85em] rounded-md shadow-sm overflow-hidden'>
                <div className='flex items-center justify-center flex-col w-full h-auto'>
                    <figure className='relative w-[85%] h-[120px] overflow-hidden'>
                        <img className='w-full h-full bg-cover' src={images[0]} alt="product_img" />
                        <figcaption className='capitalize absolute top-0 right-0 z-10 px-[4px] text-[0.72em] rounded-sm text-white bg-[#7700ffbd]'>
                            {category}
                        </figcaption>
                    </figure>
                    <div className='flex items-center w-full h-[60px] overflow-hidden'>
                        {shortDescription.length > 35 ? shortDescription.slice(0, 35) + '...' : shortDescription}
                    </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='text-[0.82em]'>
                        <RatingProduct rating={rating} />
                    </div>
                    <div>
                        Rs: {price.toLocaleString()}
                    </div>
                </div>
                <button className='flex items-center justify-center mt-2 gap-x-1 w-full p-[6.8px] text-[0.84em] tracking-[0.2px] font-semibold '>
                    Read More
                </button>
            </NavLink>
        </div>
    )
}


export default GridProductSec