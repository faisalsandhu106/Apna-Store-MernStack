import React from 'react'
import { NavLink } from 'react-router-dom';
import RatingProduct from '../Common/RatingProduct';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Utils';

const AdminGridProduct = ({ curElem, index }) => {
    const { _id, images, price, category, rating, shortDescription } = curElem;

    //! -----------------------------
    //* Delete Product in Admin Panel
    //! -----------------------------
    const deleteProduct = async (id) => {
        const res = await fetch(`https://apna-store-backend-two.vercel.app/admin/allproduct/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })

        // const data = await res.json()
        // console.log("After Delete", data)

        if (res.ok) {
            hendleSuccess("Product Delete Successfully, Refresh Your Page")
        } else {
            hendleError("Product Delete Error")
        }
    };

    return (
        <div className='py-1 w-full h-auto overflow-hidden'>
            <div key={index} className='ProductComp flex items-start justify-between flex-col p-2 xs:min-w-[160px] md:min-w-[175px] lg:min-w-[190px] xl:min-w-[200px] xs:text-[0.94em] sm:text-[0.84em] lg:text-[0.85em] rounded-md overflow-hidden'>
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
                    <div className='text-[0.9em]'>
                        <RatingProduct rating={rating} />
                    </div>
                    <div>
                        Rs: {price.toLocaleString()}
                    </div>
                </div>
                <div className='flex items-center justify-start pt-2 gap-x-2 w-full'>
                    <NavLink to={`/admin/allproducts/${_id}/edit`}>
                        <button className='px-[6px] py-[4px] text-[0.8em] font-semibold rounded-[4px] tracking-[0.2px] hover:bg-[#A96AFC]'>
                            Update
                        </button>
                    </NavLink>
                    <button onClick={() => deleteProduct(_id)} className='px-[6px] py-[4px] text-[0.8em] font-semibold rounded-[4px] tracking-[0.2px] bg-red-600 hover:bg-red-400 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
                        Delete
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminGridProduct
