import React from 'react'

const trustCompanie = [
    {
        'id': 1,
        'pic': './pic/commerce-1.png'
    },
    {
        'id': 2,
        'pic': './pic/commerce-2.png'
    },
    {
        'id': 3,
        'pic': './pic/commerce-3.png'
    },
    {
        'id': 4,
        'pic': './pic/commerce-4.png'
    },
    {
        'id': 5,
        'pic': './pic/commerce-5.png'
    },
    {
        'id': 6,
        'pic': './pic/commerce-6.png'
    },
    {
        'id': 7,
        'pic': './pic/commerce-7.png'
    },
];

const TrustedSec = () => {

    return (
        <>
            <div className='header-theme flex flex-col items-center justify-center xs:pt-20 sm:pt-24 lg:pt-28 xl:pt-32 pb-10 w-full h-auto overflow-hidden duration-150'>
                <div className='capitalize xs:text-[1.4em] sm:text-[1.5em] lg:text-[1.65em] xl:text-[1.55em] text-center font-semibold'>
                    <h2>Trusted By 50+ Companies</h2>
                </div>
                <div className='marqueeAnimatonleft flex items-center justify-between pt-20 pb-8 xs:gap-x-12 w-full h-auto overflow-hidden'>
                    {trustCompanie.map((item, index) => {
                        const { pic } = item
                        return (
                            <div key={index} className='ProductComp px-[1px] min-w-[140px] rounded-md overflow-hidden'>
                                <img className='w-full h-full bg-cover rounded-sm' src={pic} alt="companies_logo" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TrustedSec