import React from 'react'
import RatingProduct from '../Common/RatingProduct';
import { RxUpdate } from 'react-icons/rx';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Utils';

const AdminListProduct = ({ curElem, index }) => {
  const { _id, images, title, price, stock, category, rating, shortDescription } = curElem;

  //! -----------------------------
  //* Delete Product in Admin Panel
  //! -----------------------------
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:3000/admin/allproduct/delete/${id}`, {
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
    <>
      <div key={index} className='ProductComp grid xs:grid-cols-1 md:grid-cols-5 lg:grid-cols-4 p-3 gap-y-2 w-full h-auto rounded-lg'>
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
          <div className='flex items-center justify-start pt-4 gap-x-3 w-full'>
            <NavLink to={`/admin/allproducts/${_id}/edit`}>
              <button className='flex items-center justify-center gap-x-1 p-[0px] px-[7px] py-[6px] text-[0.82em] tracking-[0.2px] font-semibold hover:bg-[#A96AFC]'>
                <RxUpdate className='text-[1.1em]' />
                Update
              </button>
            </NavLink>
            <button onClick={() => deleteProduct(_id)} className='flex items-center justify-center gap-x-1 p-[0px] px-[7px] py-[6px] text-[0.82em] tracking-[0.2px] font-semibold bg-red-600 hover:bg-red-400 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
              <MdOutlineDeleteOutline className='text-[1.1em]' />
              Delete
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AdminListProduct