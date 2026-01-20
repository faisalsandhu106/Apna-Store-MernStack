import { FaUser } from 'react-icons/fa';
import { UseAdminContext } from '../Components/ContextAPI/AdminContext';
import LoadingAnimate from '../Components/Common/LoadingAnimate';
import { ToastContainer } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { hendleError, hendleSuccess } from '../Components/Utils';

const AdminUserProfile = () => {
  const { isLoading, getAlluser } = UseAdminContext()

  if (isLoading) {
    return (
      <LoadingAnimate />
    )
  };

  // !--------------------------
  // *Delete User In Admin Penal
  // !--------------------------
  const deleteUserData = async (id) => {
    const res = await fetch(`http://localhost:3000/admin/user/delete/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
    })

    // const data = await res.json()
    // console.log("After Delete", data)

    if (res.ok) {
      hendleSuccess("User Delete Successfully, Please Refresh Your Page")
    } else {
      hendleError("User Not Successfully")
    }
  };

  return (
    <>
      <div className='flex flex-col justify-start xs:px-4 sm:px-6 md:px-5 lg:px-8 w-full h-full duration-150'>
        <div className='flex items-center justify-end pb-5 gap-x-2 text-[1.1em] font-semibold'>
          <div className='flex items-center gap-x-1'>
            <p className='border-bottom mt-[4px]'>User</p> Profile
          </div>
          <FaUser className='text-xl' />
          <div>
            {getAlluser.length}
          </div>
        </div>
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-x-6 lg:gap-x-6 xl:gap-x-5 gap-y-6 w-full h-auto'>
          {
            getAlluser.map((items, index) => {
              const { _id, firstname, lastname, email, address } = items;
              return (
                <div key={index} className='header-theme ProductComp relative flex flex-col px-4 py-4 w-full h-fit text-[0.94em] rounded-md xs:order-2 md:order-1 overflow-hidden'>
                  <div className='contact-form absolute top-0 right-[-60px] w-24 h-8 rounded-b-full'></div>
                  <div className='flex items-center flex-col gap-y-1 w-full h-auto text-[1.1em] font-medium capitalize'>
                    <div className='bg-[#7700ffbd] text-amber-50 flex items-center justify-center w-10 h-10 rounded-full overflow-hidden'>
                      <FaUser />
                    </div>
                    <h1>
                      {firstname}
                    </h1>
                  </div>
                  <div className='flex flex-col gap-y-2 mt-7 w-full h-auto'>
                    <div className='flex w-full gap-x-3'>
                      <h1 className='xs:w-[60px] font-medium'>Name:</h1>
                      <div className='custom- admin-form-border flex gap-x-1 w-auto'>
                        <p>{`${firstname}`}</p>
                        <p>{`${lastname}`}</p>
                      </div>
                    </div>

                    <div className='flex gap-x-3'>
                      <h1 className='xs:w-[60px] font-medium'>Email:</h1>
                      {email}
                    </div>

                    <div className='flex gap-x-3'>
                      <h1 className='xs:w-[60px] font-medium'>Address:</h1>
                      {address}
                    </div>
                  </div>
                  <div className='flex pt-4 gap-x-3'>
                    <NavLink to={`/admin/alluser/${_id}/edit`} >
                      <button className='px-[10px] py-[5px] text-[0.78em] tracking-[0.5px] hover:bg-blue-800'>
                        Edit
                      </button>
                    </NavLink>
                    <button onClick={() => deleteUserData(_id)} className='px-[8px] py-[5px] text-[0.78em] tracking-[0.5px] bg-red-600 hover:bg-red-400 duration-100 bg-gradient-to-b from-none hover:bg-gradient-to-b from-none'>
                      Delete
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

export default AdminUserProfile