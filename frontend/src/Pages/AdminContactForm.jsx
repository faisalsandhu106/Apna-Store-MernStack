import React from 'react'
import { MdContactMail, MdOutlineDeleteOutline } from 'react-icons/md';
import { UseAdminContext } from '../Components/ContextAPI/AdminContext';
import LoadingAnimate from '../Components/Common/LoadingAnimate';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { RxUpdate } from 'react-icons/rx';

const AdminContactForm = () => {
  const { isContactLoading, getAllcontactForm } = UseAdminContext();
  // console.log("getAllcontactForm", getAllcontactForm)

  if (isContactLoading) {
    return (
      <LoadingAnimate />
    )
  };

  // !---------------------------------
  // *Delete ContactForm In admin Penal
  // !---------------------------------
  const deleteContactFormData = async (id) => {
    const res = await fetch(`http://localhost:3000/admin/user/contactform/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })

    // const data = await res.json()
    // console.log("After Delete", data)

    if (res.ok) {
      hendleSuccess("Contact Form Delete Successfully, Please Refresh Your Page")
    } else {
      hendleError("Contact form Delete Error")
    }
  };

  return (
    <>
      <div className='flex flex-col justify-start xs:px-4 sm:px-6 md:px-5 lg:px-8 w-full h-auto duration-150'>
        <div className='flex items-center justify-end pb-6 gap-x-2 text-[1.1em] font-semibold'>
          <div className='flex items-center gap-x-1'>
            <p className='border-bottom mt-[4px]'>Contact</p> Form
          </div>
          <MdContactMail className='text-2xl ' />
          <div>
            {getAllcontactForm.length}
          </div>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-x-6 lg:gap-x-7 xl:gap-x-5 gap-y-8 w-full h-auto'>
          {
            getAllcontactForm.map((items, index) => {
              const { _id, name, email, address, message } = items;
              return (
                <div key={index} className='header-theme ProductComp relative flex flex-col px-5 py-5 w-full h-fit text-[0.95em] rounded-md xs:order-2 md:order-1 overflow-hidden'>
                  <div className='contact-form absolute top-0 right-[-60px] w-24 h-8 rounded-b-full'></div>
                  <div className='flex items-center flex-col gap-y-1 w-full h-auto text-[1.1em] font-medium capitalize'>
                    <div className='bg-[#7700ffbd] text-amber-50 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden'>
                      <FaUser />
                    </div>
                    <h1>
                      {name}
                    </h1>
                  </div>
                  <div className='flex flex-col gap-y-2 mt-9 w-full h-auto'>
                    <div className='flex gap-x-3'>
                      <h1 className='xs:w-[60px] font-medium'>Email:</h1>
                      {email}
                    </div>

                    <div className='flex gap-x-3'>
                      <h1 className='xs:w-[60px] font-medium'>Address:</h1>
                      {address}
                    </div>

                    <div className='custom-textarea admin-form-border w-full xs:min-h-[190px] sm:min-h-[120px] xl:min-h-[180px] max-h-[300px] leading-[20px] mt-[-2px] overflow-hidden'>
                      {message}
                    </div>
                  </div>
                  <div className='flex pt-4 gap-x-3'>
                    <NavLink to={`/admin/alluser/contactForm/${_id}/edit`} >
                      <button className='flex items-center gap-x-1 px-[8px] py-[5px] text-[0.84em] tracking-[0.3px] hover:bg-blue-800'>
                        Edit
                        <RxUpdate className='text-[1.2em]' />
                      </button>
                    </NavLink>
                    <button onClick={() => deleteContactFormData(_id)} className='flex items-center gap-x-[0.9px] px-[7px] py-[5px] text-[0.84em] tracking-[0.3px] bg-red-600 hover:bg-red-400 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
                      Delete
                      <MdOutlineDeleteOutline className='text-[1.2em]' />
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AdminContactForm