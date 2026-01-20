
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { ToastContainer } from 'react-toastify';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { RxUpdate } from 'react-icons/rx';

const AdminUpdateProduct = () => {
    const { id } = useParams();
    const API = "http://localhost:3000";
    const [isUpdate, setIsupdate] = useState({
        title: '',
        longDescription: '',
        shortDescription: '',
        category: '',
        price: '',
        discountPercentage: '',
        rating: '',
        stock: '',
        tags: '',
        brand: '',
        sku: '',
        warrantyInformation: '',
        shippingInformation: '',
        availabilityStatus: '',
        returnPolicy: '',
        deliveryFree: '',
        securePayment: '',
        minimumOrderQuantity: '',
        images: '',
        feature: '',
        status: ''
    });

    // *------------------------------------------
    // *Get Individual Product Data In Admin Panel ----- In File
    // *------------------------------------------
    const getAllproductIndividual = async () => {
        const res = await fetch(`${API}/admin/allproduct/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await res.json()
        setIsupdate(data)
    };

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        const copyUpdate = { ...isUpdate };
        copyUpdate[name] = value;
        setIsupdate(copyUpdate);
    };

    // TODO--------------------------
    // *Product Update In Admin Panel----- In UpdateProduct File
    // TODO--------------------------
    const handleUpdateProduct = async (event) => {
        event.preventDefault();
        const { feature } = isUpdate;
        if (!feature) {
            return hendleError("Please, feature inputs requried");
        };
        const url = `${API}/admin/allproduct/update/${id}`;
        const res = await fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(isUpdate)
        });

        // const data = await res.json();
        // console.log('Update Data', data)

        if (res.ok) {
            hendleSuccess('Product Updated Successfully, Refresh Your Page')
            setIsupdate({
                title: '',
                longDescription: '',
                shortDescription: '',
                category: '',
                price: '',
                discountPercentage: '',
                rating: '',
                stock: '',
                tags: '',
                brand: '',
                sku: '',
                warrantyInformation: '',
                shippingInformation: '',
                availabilityStatus: '',
                returnPolicy: '',
                deliveryFree: '',
                securePayment: '',
                minimumOrderQuantity: '',
                images: '',
                feature: '',
                status: ''
            })
        } else {
            hendleError('Updated Error')
        }
    };

    useEffect(() => {
        getAllproductIndividual()
    }, [])

    return (
        <>
            <div className='flex flex-col xs:px-3 sm:px-6 lg:px-6 xl:px-8 w-full h-auto overflow-hidden'>
                <div className='flex items-center justify-end w-full h-auto text-[0.94em]'>
                    <NavLink to="/admin/allproducts" className='flex items-center gap-x-2 mb-4 font-semibold hover:text-gray-500 duration-100'>
                        <FaLongArrowAltLeft /> Back to Products
                    </NavLink>
                </div>
                <form onSubmit={handleUpdateProduct} className='flex flex-col gap-4 w-full h-auto'>
                    <div className='xs:py-10 flex flex-col xs:items-center justify-start w-full h-auto'>
                        {/* <img className=' xs:w-[280px] xs:h-[200px] md:w-[330px] md:h-[240px] lg:w-[370px] lg:h-[260px] bg-cover rounded-md' src='' alt="Product-Img" /> */}
                        <p className='font-medium'>IMG URL:</p>
                        <input type="text" placeholder='Image URL' name='images' value={isUpdate.images} onChange={handleInputValue} className='custom-input-2 min-w-[100%]' />
                    </div>
                    <div className='flex flex-col justify-center py-5 w-full h-auto gap-y-5 text-[0.97em] rounded-md capitalize'>
                        <div className='flex items-center justify-center pb-10 gap-x-2 w-full text-[1.4em] font-semibold'>
                            Update Product <RxUpdate />
                        </div>
                        <div className='grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xs:gap-x-3 sm:gap-x-6 lg:gap-x-8 xs:gap-y-10 sm:gap-y-11 w-full h-auto'>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Name:</p>
                                <input type="text" placeholder='Product Name' name='title' value={isUpdate.title} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>MRP:</p>
                                <input type="number" placeholder='price' name='price' value={isUpdate.price} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Deal of the Days:</p>
                                <input type="number" placeholder='Discount Percentage' name='discountPercentage' value={isUpdate.discountPercentage} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Rating:</p>
                                <input type="number" placeholder='Rating' name='rating' value={isUpdate.rating} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Tag:</p>
                                <input type="text" placeholder='Tag' name='tags' value={isUpdate.tags} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>category:</p>
                                <input type="text" placeholder='Category' name='category' value={isUpdate.category} onChange={handleInputValue} className='custom-input-2 lowercase' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Brand:</p>
                                <input type="text" placeholder='Brand' name='brand' value={isUpdate.brand} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>SKU:</p>
                                <input type="text" placeholder='SKU' name='sku' value={isUpdate.sku} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>stock:</p>
                                <input type="number" placeholder='Stock' name='stock' value={isUpdate.stock} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>availability Status:</p>
                                <input type="text" placeholder='Availability Status' name='availabilityStatus' value={isUpdate.availabilityStatus} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>Minimum Order Quantity:</p>
                                <input type="number" placeholder='Minimum Order Quantity:' name='minimumOrderQuantity' value={isUpdate.minimumOrderQuantity} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <p className='text-[0.99em] font-medium'>shipping Information:</p>
                                <input type="text" placeholder='Shipping Information' name='shippingInformation' value={isUpdate.shippingInformation} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <div className='flex items-center gap-x-[6px]'>
                                    <p className='text-[0.99em] font-medium'>Delivery fee</p>
                                    <TbTruckDelivery className='text-xl' />
                                </div>
                                <input type="text" placeholder='Delivery Free' name='deliveryFree' value={isUpdate.deliveryFree} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <div className='flex items-center gap-x-[6px]'>
                                    <p className='text-[0.99em] font-medium'>return Policy</p>
                                    <TbReplace className='text-xl' />
                                </div>
                                <input type="text" placeholder='Return Policy' name='returnPolicy' value={isUpdate.returnPolicy} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <div className='flex items-center gap-x-[6px]'>
                                    <p className='text-[0.99em] font-medium'>secure Payment</p>
                                    <RiSecurePaymentFill className='text-xl' />
                                </div>
                                <input type="text" placeholder='Secure Payment' name='securePayment' value={isUpdate.securePayment} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                            <div className='flex flex-col gap-y-[4px]'>
                                <div className='flex items-center gap-x-[6px]'>
                                    <p className='text-[0.99em] font-medium'>Warranty Information</p>
                                    <GiReceiveMoney className='text-xl' />
                                </div>
                                <input type="text" placeholder='Warranty Information' name='warrantyInformation' value={isUpdate.warrantyInformation} onChange={handleInputValue} className='custom-input-2' />
                            </div>
                        </div>
                        <div className='flex items-center gap-x-4 font-medium py-6'>
                            <h1>featured:</h1>
                            <div className='flex items-center gap-x-[15px]'>
                                <div className='flex gap-x-1'>
                                    True <input type="radio" name='feature' value="true" onChange={handleInputValue} className='cursor-pointer' />
                                </div>
                                <div className='flex gap-x-1'>
                                    False <input type="radio" name='feature' value="false" onChange={handleInputValue} className='cursor-pointer' />
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center w-full h-auto'>
                            <div className='flex flex-col gap-y-5 xs:w-[100%] sm:w-[80%] lg:w-[60%]'>
                                <div className='flex flex-col gap-y-[6px]'>
                                    <p className='text-[0.99em] font-medium'>Short Description:</p>
                                    <textarea type="text" placeholder='Short Description' name='shortDescription' value={isUpdate.shortDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[100px] sm:min-h-[100px] lg:min-h-[80px] max-h-[150px] leading-[21px] overflow-hidden' />
                                </div>
                                <div className='flex flex-col gap-y-[6px]'>
                                    <p className='text-[0.99em] font-medium'>Long Description:</p>
                                    <textarea type="text" placeholder='Long Description' name='longDescription' value={isUpdate.longDescription} onChange={handleInputValue} className='custom-textarea-2 rounded-md xs:min-h-[200px] sm :min-h-[180px] lg:min-h-[190px] max-h-[400px] leading-[21px] overflow-hidden' />
                                </div>
                                <div className='w-full h-auto'>
                                    <button type='submit' className='flex items-center justify-center gap-x-1 w-full py-[7px] text-[0.96em]'>
                                        Update Product <RxUpdate />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default AdminUpdateProduct