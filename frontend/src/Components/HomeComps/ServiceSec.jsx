import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const ServiceSec = () => {
    return (
        <>
            <div className="grid xs:grid-cols-1 md:grid-cols-3 justify-items-center xs:pt-5 sm:pt-7 lg:pt-10 xl:pt-16 pb-10 xs:gap-y-4 w-full h-auto capitalize text-[0.92em] font-medium text-amber-50">
                <div className='flex items-center xs:justify-center md:justify-end w-full'>
                    <div style={{ backgroundColor: "#8338ec" }} className="ProductComp flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[220px] md:h-[180px] lg:w-[280px] lg:h-[200px] xl:w-[300px] xl:h-[230px] rounded-lg">
                        <TbTruckDelivery className='text-3xl' />
                        <p>super fast and free delivrey</p>
                    </div>
                </div>
                <div className="grid grid-rows-2 justify-items-center gap-y-4 w-full">
                    <div style={{ backgroundColor: "#ff6b6b" }} className="ProductComp flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[240px] md:h-[140px] lg:w-[300px] lg:h-[165px] xl:w-[400px] xl:h-[180px] rounded-lg">
                        <MdSecurity className='text-3xl' />
                        <p>non-contact shipping</p>
                    </div>
                    <div style={{ backgroundColor: "#fdc500" }} className="ProductComp flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[240px] md:h-[140px] lg:w-[300px] lg:h-[165px] xl:w-[400px] xl:h-[180px] rounded-lg">
                        <GiReceiveMoney className='text-3xl' />
                        <p>money-back guaranteed</p>
                    </div>
                </div>
                <div className='flex items-center xs:justify-center md:justify-start w-full'>
                    <div style={{ backgroundColor: "#00a8e8" }} className='ProductComp flex flex-col items-center justify-center gap-y-3 xs:w-[320px] xs:h-[120px] md:w-[220px] md:h-[180px] lg:w-[280px] lg:h-[200px] xl:w-[300px] xl:h-[230px] rounded-lg'>
                        <RiSecurePaymentFill className='text-3xl' />
                        <p>super secure payment system</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSec