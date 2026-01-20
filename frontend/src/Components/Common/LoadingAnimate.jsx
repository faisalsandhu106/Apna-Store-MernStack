import React from 'react'

const LoadingAnimate = () => {
    return (
        <>
            <div id='loading-animation-container' className='flex items-center justify-center gap-x-2 w-full min-h-[100vh] text-xl'>
                <div id='loading-animation' className='w-[6px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[6px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[6px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[6px] h-8 bg-blue-700'></div>
                <div id='loading-animation' className='w-[6px] h-8 bg-blue-700'></div>
            </div>
        </>
    )
}

export default LoadingAnimate