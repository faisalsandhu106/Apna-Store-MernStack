import React from 'react'
import RatingProduct from '../Common/RatingProduct'
import { UseProductContext } from '../ContextAPI/ProductContext';
import LoadingAnimate from '../Common/LoadingAnimate';
import { NavLink } from 'react-router-dom';
import { PiEmptyLight } from 'react-icons/pi';

const FeaturedSec = () => {
    const { isLoading, featureProducts } = UseProductContext();
    if (isLoading) {
        return (
            <LoadingAnimate />
        )
    };

    if (featureProducts.length === 0) {
        return <p className='flex items-center justify-center gap-x-2 w-full min-h-screen text-[1.4em]'>
            No Feature Product Avaliable <PiEmptyLight />
        </p>
    };

    return (
        <>
            <div className='xs:px-2 sm:px-5 lg:px-6 xs:pt-20 sm:pt-16 lg:pt-24 xl:pt-28 pb-10 w-full min-h-[300px] overflow-hidden'>
                <div className='flex flex-col items-center justify-center w-full h-auto'>
                    <p className='text-[0.88rem] underline'>
                        Click Me
                    </p>
                    <h1 className='capitalize xs:text-[1.7rem] md:text-[1.6rem] lg:text-[1.8rem] font-semibold'>
                        our feature products
                    </h1>
                </div>
                <div className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 justify-items-center xs:pt-8 sm:pt-12 xs:gap-x-2 sm:gap-x-3 xs:gap-y-6 sm:gap-y-8 lg:gap-x-3 lg:gap-y-10 w-full h-auto'>
                    {featureProducts.map((items, index) => {
                        const { _id, images, price, shortDescription, rating, category } = items
                        return (
                            <div key={index} className='w-full h-auto'>
                                <NavLink to={`/shop`} className='ProductComp flex items-start justify-between flex-col p-2 w-full xs:pt-[6px] xs:text-[0.86em] lg:text-[0.9em] rounded-md shadow-sm overflow-hidden'>
                                    <div className='flex items-center justify-center flex-col w-full'>
                                        <figure className='relative flex items-center justify-center w-[80%] h-[120px] overflow-hidden'>
                                            <img className='w-full h-full bg-cover' src={images[0]} alt="product_img" />
                                            <figcaption className='capitalize absolute top-0 right-0 z-10 px-[4px] text-[0.72em] rounded-sm text-white bg-[#7700ffbd]'>
                                                {category}
                                            </figcaption>
                                        </figure>
                                        <div className='pt-[4px] w-full'>
                                            {shortDescription.length > 30 ? shortDescription.slice(0, 30) + '....' : shortDescription}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between w-full py-1'>
                                        <div className='text-[0.8em]'>
                                            <RatingProduct rating={rating} />
                                        </div>
                                        <div>
                                            ${price.toLocaleString()}
                                        </div>
                                    </div>
                                    <button className='flex items-center justify-center gap-x-1 w-full p-[6px] text-[0.85em] tracking-[0.2px] font-semibold '>
                                        Read More
                                    </button>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default FeaturedSec