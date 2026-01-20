import React from 'react'

const ImgProduct = ({ picture = [{ url: [0] }] }) => {
    // const [MainImage, setMainimage] = useState(img[0])

    return (
        <>
            <div className='flex items-center justify-around flex-wrap xs:pt-10 w-full h-auto overflow-hidden'>
                {picture.map((curElem, index) => {
                    return (
                        <img
                            key={index}
                            src={curElem}
                            alt='Product_Img'
                            className='xs:w-[45%] md:w-[30%] lg:w-[35%] xl:w-[35%] h-auto object-cover cursor-pointer hover:scale-105 duration-200'
                        />
                    )
                })}

            </div>
        </>
    )
}

export default ImgProduct