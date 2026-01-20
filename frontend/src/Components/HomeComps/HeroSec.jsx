import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import HeroSilder from './HeroSilder';

const HeroSec = () => {
    return (
        <>
            <div className='grid xs:grid-cols-1 md:grid-cols-2 px-4 xs:pt-28 md:pt-6 lg:pt-10 xl:pt-24 gap-y-10 w-full xs:min-h-[65vh] md:min-h-[540px] lg:min-h-[520px] xl:min-h-[500px] duration-150'>
                <div className='flex flex-col justify-center items-start md:pl-5 lg:pl-8 xl:pl-20'>
                    <h4>
                        welcome to
                    </h4>
                    <h1 className='xs:text-[2.22em] md:text-[2.2em] lg:text-[2.4em] xl:text-[3em] font-semibold'>
                        Apna Store
                    </h1>
                    <p className='py-2 xs:text-[0.89em] md:text-[0.93em] lg:text-[0.96em] leading-[1.47]'>
                        Welcome to ApnaStore, your trusted online marketplace offering a wide range of high-quality products at unbeatable prices. Whether you're shopping for fashion, electronics, home essentials, beauty products, or daily groceries, ApnaStore brings everything you need right to your doorstep.
                    </p>
                    <NavLink to={'/shop'}>
                        <button className='flex items-center gap-x-2 mt-5 px-5 text-[0.85em] rounded-md'>
                            SHOW NOW <FaLongArrowAltRight className='text-lg ' />
                        </button>
                    </NavLink>
                </div>
                <div className='flex items-center justify-center w-full overflow-hidden'>
                    <div className='xs:w-[400px] xs:h-[220px] sm:w-[340px] sm:h-[300px] lg:w-[460px] lg:h-[300px] xl:w-[560px] xl:h-[360px] rounded-[4px] overflow-hidden'>
                        <HeroSilder />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSec