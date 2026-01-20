import React from 'react'
import RatingProduct from '../Common/RatingProduct';
import { NavLink } from 'react-router-dom';
import { UseProductContext } from '../ContextAPI/ProductContext';

const ListProductSec = ({ curElem, index }) => {
  // const { getIndividualProducts } = UseProductContext()
  const { _id, title, stock, images, price, category, rating, shortDescription } = curElem;
  return (
    // onClick={() => getIndividualProducts(_id)}
    <div key={index} className='w-auto h-auto'>
      <NavLink to={`/shop/${_id}`} className='ProductComp grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-4 p-3 gap-y-2 w-full h-auto rounded-lg'>
        <figure className='flex xs:items-center md:items-star justify-center w-full'>
          <img className='xs:w-[40%] sm:w-[50%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto bg-cover bg-center rounded-md' src={images[0]} alt="product_img" />
        </figure>
        <div className='flex flex-col justify-start md:col-span-4 lg:col-span-3 gap-y-1 w-full text-[0.92em]'>
          <div className='flex justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Name:</p>
            <div>
              {title}
            </div>
          </div>
          <div className='flex justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Price:</p>
            <div>
              {price.toLocaleString()}
            </div>
          </div>
          <div className='flex justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Stock:</p>
            <div>
              {stock}
            </div>
          </div>
          <div className='flex items-center justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Category:</p>
            <div>
              {category}
            </div>
          </div>
          <div className='flex items-center justify-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Rating:</p>
            <div>
              <RatingProduct rating={rating} />
            </div>
          </div>
          <div className='xs:hidden md:inline-flex flex items-start gap-x-[6px] capitalize'>
            <p className='font-medium'>Description:</p>
            <div>
              {shortDescription}
            </div>
          </div>
          <div className='pt-3 w-full'>
            <button className='flex items-center justify-center gap-x-1 p-[0px] px-[10px] py-[6px] text-[0.84em] font-semibold rounded-[3px] hover:bg-[#A96AFC]'>
              Read More
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default ListProductSec