import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import RatingProduct from '../Components/Common/RatingProduct';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';
import AddProductButton from '../Components/ShopComps/AddProductButton';
import { ToastContainer } from 'react-toastify';

const SingleProduct = () => {
  const { id } = useParams();
  // console.log(singleProduct)

  const [isdata, setIsData] = useState({
    // _id: alise: "",
    title: "",
    longDescription: "",
    shortDescription: "",
    category: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    tags: "",
    brand: "",
    sku: "",
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    deliveryFree: "",
    securePayment: "",
    minimumOrderQuantity: "",
    images: "",
    // feature,
    // status,
  })

  const getAllproductIndividual = async () => {
    const res = await fetch(`https://apna-store-backend-two.vercel.app/api/allproducts/${id}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })

    const data = await res.json();
    setIsData(data)
    // console.log(data)
  };

  useEffect(() => {
    getAllproductIndividual();
  }, []);

  const {
    _id: alise,
    title,
    longDescription,
    // shortDescription,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    brand,
    sku,
    warrantyInformation,
    shippingInformation,
    // availabilityStatus,
    returnPolicy,
    deliveryFree,
    securePayment,
    minimumOrderQuantity,
    images,
    // feature,
    // status,
  } = isdata

  return (
    <>
      <div className='flex flex-col pt-20 pb-5 w-full min-h-[100vh] overflow-hidden'>
        <div className='flex items-center justify-between w-full h-auto xs:px-3 sm:px-6 md:px-8 lg:px-10 xs:text-[0.83em] md:xs:text-[0.88em] xl:xs:text-[0.9em] shadow-sm'>
          <NavLink to="/shop" className='flex items-center gap-x-2 my-4 font-semibold hover:text-gray-500 duration-100'>
            <FaLongArrowAltLeft /> Back to Products
          </NavLink>
          <div className='xs:hidden md:inline-flex'>
            Product ID: {id}
          </div>
        </div>
        <div className='flex xs:flex-col xl:flex-row gap-4 xs:px-4 sm:px-6 lg:px-8 w-full h-auto'>
          <div className='xs:py-8 xl:py-11 flex xs:items-center xl:items-start justify-center xl:w-[70%] h-auto'>
            {/* <ImgProduct picture={images} /> */}
            <img className=' xs:w-[280px] xs:h-[200px] md:w-[330px] md:h-[240px] lg:w-[370px] lg:h-[260px] bg-cover rounded-md' src={images[0]} alt="Product-Img" />
          </div>
          <div className='flex flex-col justify-center py-10 w-full h-auto gap-y-3 text-[0.91em] capitalize'>
            <div className='mb-2 text-2xl font-semibold'>
              {title}
            </div>
            <div>
              <RatingProduct rating={rating} />
            </div>
            <div className='flex justify-start gap-x-[6px] line-through'>
              <p className='font-medium'>MRP :</p>
              {price.toLocaleString()}
            </div>
            <div className='flex justify-start gap-x-[6px] text-blue-600'>
              <p className='font-medium'>Deal of the Days:</p>
              {discountPercentage ? discountPercentage : '0'}% discount
            </div>
            <p className='text-[0.99em] leading-[1.6]'>
              {longDescription}
            </p>
            <div className='flex items-center justify-between xs:gap-x-5 sm:gap-x-0 w-full h-auto mb-3 py-4 text-[0.85em] text-center'>
              <div className='flex flex-col items-center justify-center'>
                <TbTruckDelivery className='text-2xl' />
                <p className='mt-[6px]'>
                  {deliveryFree ? deliveryFree : 'Delivery Free'}
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <TbReplace className='text-2xl' />
                <p className='mt-[6px]'>
                {returnPolicy ? returnPolicy : '7 days return Policy'}
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <RiSecurePaymentFill className='text-2xl' />
                <p className='mt-[6px]'>
                  {securePayment ? securePayment : 'secure Payment'}
                </p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <GiReceiveMoney className='text-2xl' />
                <p className='mt-[6px]'>
                  {warrantyInformation ? warrantyInformation : 'no warranty'}
                </p>
              </div>
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>Tag:</p>
              {tags ? tags : '--- ---'}
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>category:</p>
              {category}
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>Brand:</p>
              {brand ? brand : '--- ---'}
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>SKU:</p>
              {sku ? sku : '--- ---'}
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>availability Status:</p>
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </div>
            <div className='flex justify-start gap-x-[6px]'>
              <p className='font-medium'>Minimum Order Quantity:</p>
              {minimumOrderQuantity ? minimumOrderQuantity : '--- ---'}
            </div>
            <div className='flex justify-start gap-x-[6px] pb-2 border-b border-gray-400'>
              <p className='font-medium'>shippingInformation:</p>
              {shippingInformation ? shippingInformation : '--- ---'}
            </div>
            <div className='flex flex-col w-full h-auto'>
              <div>
                {stock > 0 && <AddProductButton product={isdata} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default SingleProduct
