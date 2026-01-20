import { NavLink, useNavigate } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ContextAPI/ThemeProvider';
import { CiLight } from 'react-icons/ci'
import { MdOutlineDarkMode } from 'react-icons/md'
import { hendleSuccess } from '../Utils';
import { ToastContainer } from 'react-toastify';
import { easeIn, motion } from 'motion/react';
import { IoBagHandleSharp, IoCameraOutline } from 'react-icons/io5';
import { PiSignOutBold } from "react-icons/pi";
import { FiShoppingCart } from 'react-icons/fi';
import { UseCartContext } from '../ContextAPI/CartContext';
import { GrUpdate } from 'react-icons/gr';

const Header = () => {
    const currentYear = new Date().getFullYear()
    const [isId, setIsId] = useState();
    const [isUserData, setUserData] = useState({ firstname: "" });
    const [isMenu, setIsMenu] = useState(true);
    const [isProfile, setIsProfile] = useState();
    const Navigate = useNavigate();
    const { total_item } = UseCartContext()

    //TODO Toggle Navbar
    const toggleMenbar = () => {
        setIsMenu(!isMenu)
    };

    //! Toggle UserProfile Dropdown
    const toggleProfile = () => {
        setIsProfile(!isProfile)
    };

    //* Website Pages Paths
    const AdminSidarLinks = [
        {
            id: '1',
            button: 'Home',
            url: '/home'
        },
        {
            id: '2',
            button: 'Service',
            url: '/service'
        },
        {
            id: '3',
            button: 'Shop',
            url: '/shop'
        },
        {
            id: '4',
            button: 'Contact',
            url: '/contact'
        },
        {
            id: '5',
            button: 'Admin',
            url: '/admin/dashboard'
        }
    ]

    //*---------------------------------
    //* Get User Profile Information
    //*--------------------------------
    const getUserData = async () => {
        const res = await fetch(`https://apna-store-backend-two.vercel.app/auth/user/${isId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const data = await res.json();
        setUserData(data)
        // console.log(data)
    };

    //* User Logout Account 
    const handleLogout = () => {
        localStorage.removeItem("Token")
        localStorage.removeItem("UserName")
        localStorage.removeItem("LastName")
        localStorage.removeItem("Email")
        localStorage.removeItem("Address")
        localStorage.removeItem("id")
        hendleSuccess('Logout Successfully')
        setTimeout(() => {
            setIsProfile(!isProfile)
            Navigate('/login')
        }, 1000)
    };

    //* Dark-Light Mood
    const { storedValue, setStoredValue } = useContext(ThemeContext)

    useEffect(() => {
        setIsId(localStorage.getItem("id"))
        getUserData();

        if (storedValue === "dark") {
            document.documentElement.setAttribute("data-theme", storedValue)
        } else {
            document.documentElement.setAttribute("data-theme", storedValue)
        }
        
    }, [isId, isProfile, storedValue])


    return (
        <>
            <div className='header-theme fixed top-0 left-0 z-[50] flex items-center justify-between xs:px-4 md:px-7 xl:px-8 py-3 gap-x-4 w-full h-auto capitalize shadow-sm duration-150'>
                <NavLink to='/home' className='site-logo flex items-start gap-x-[2px] text-[0.99em] font-semibold text-nowrap tracking-[0.4px] rounded-sm'>
                    <IoBagHandleSharp className='text-[2.4em]' />
                    <p>APNA-STORE</p>
                </NavLink>
                <div className='flex items-center justify-end lg:gap-x-12 xl:gap-x-20 w-full h-auto'>
                    {/* -------------------------------Navbar Page Links--------------------------------------- */}
                    <div className='text-underLine flex lg:gap-x-6 xl:gap-x-8 xs:hidden lg:inline-flex'>
                        {AdminSidarLinks.map((items, index) => {
                            const { id, button, url } = items
                            return (
                                <NavLink
                                    key={id}
                                    to={url}
                                    className={`flex items-center flex-nowrap gap-x-2 hover:text-gray-500 ${items === index ? "active" : ''}`}>
                                    <div className='xs:text-[1.05em] sm:text-[1.02em] lg:text-[0.92em]'> {button} </div>
                                </NavLink>
                            )
                        })}
                    </div>

                    <div className='flex items-center gap-x-3 w-fit h-auto'>
                        {/* --------------------------------Total-item-Cart------------------------------------- */}
                        <NavLink to={'./cartlist'} className="lg:mr-3 text-[1.4em] xs:hidden lg:inline-flex">
                            <FiShoppingCart />
                            <div className='absolute flex items-center justify-center top-3 xs:right-[105px] md:right-32 lg:right-36 pt-[2px] w-[15px] h-[15px] bg-red-600 text-white text-[0.68rem] font-medium rounded-full'>
                                {total_item}
                            </div>
                        </NavLink>

                        {/* -------------------------------Dark Light Button------------------------------------- */}
                        <div className='w-fit h-auto xs:hidden lg:inline-flex'>
                            {storedValue === "dark" ? (
                                <div
                                    onClick={() => setStoredValue("")}
                                    className='text-[1.4em] cursor-pointer duration-100'>
                                    <CiLight />
                                </div>
                            )
                                :
                                (
                                    <div
                                        onClick={() => setStoredValue("dark")}
                                        className='text-[1.4em] cursor-pointer duration-100'>
                                        <MdOutlineDarkMode />
                                    </div>
                                )
                            }
                        </div>

                        {/* -----------------------------User Profile DropDown------------------------------------ */}
                        <div>
                            <div className='relative xs:w-10 xs:h-10 rounded-full xs:ml-[6px] md:ml-4 lg:ml-0 border-2 border-gray-300 overflow-hidden'>
                                <img onClick={toggleProfile} className='w-full h-auto bg-cover cursor-pointer' src="/pic/profile.png" alt="rofile_Img" />
                            </div>
                            {
                                isProfile && (
                                    <motion.div
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0, ease: easeIn }}
                                        className='header-theme fixed top-[70px] z-[50] right-[4%] px-2 py-5 xs:w-[92%] md:w-[50%] md:h-auto lg:w-[40%] xl:w-[30%] h-auto rounded-lg duration-300 shadow-lg'>
                                        <div className='flex items-center justify-between w-full px-4'>
                                            <div></div>
                                            <div onClick={toggleProfile} className='flex items-center justify-center cursor-pointer w-7 h-7 rounded-full'>
                                                <RiCloseLargeFill className='site-logo text-2xl font-extrabold hover:text-[#d3c0ed]' />
                                            </div>
                                        </div>
                                        <div className='flex items-center flex-col mt-2 w-full'>
                                            <div className='relative flex items-center justify-center w-full mt-2'>
                                                <img src="/pic/profile.png" alt="Profile_Img" className='w-16 h-16 rounded-full object-cover cursor-pointer border-2 border-gray-300' />
                                                <div className='absolute top-[75%] flex items-center justify-center w-6 h-6 rounded-full bg-white'>
                                                    <IoCameraOutline className='text-lg text-gray-800' />
                                                </div>
                                            </div>
                                            <div className='mt-4'>
                                                {isUserData.firstname ? `${'Hi, ' + isUserData.firstname}` : 'Please, Login'}
                                            </div>
                                            {/* <div className='flex items-center justify-center mt-6 px-5 py-[4px] border-2 rounded-full cursor-pointer border-[#cccccc] '>
                                                <a className='site-logo text-[14px] font-medium ' href="">Manage your Google Account</a>
                                            </div> */}
                                        </div>
                                        <div className='flex justify-center w-full gap-1 mt-5'>
                                            <NavLink to={`/user/profile`} onClick={toggleProfile} className='logout-btn flex items-center justify-center w-[35%] h-10 gap-x-2 text-[0.94em] text-nowrap cursor-pointer rounded-l-full'>
                                                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-200'>
                                                    <GrUpdate className='text-blue-600 text-[15px] font-semibold ' />
                                                </div>
                                                <p className='text-[0.98em] font-medium tracking-[0.3px]'>
                                                    Profile
                                                </p>
                                            </NavLink>
                                            <a href='/login' onClick={handleLogout} type='submit' className='logout-btn flex items-center justify-center w-[35%] h-10 gap-x-2 text-[0.94em] text-nowrap cursor-pointer rounded-r-full'>
                                                <div className='flex items-center justify-center w-6 h-6 rounded-full bg-gray-200'>
                                                    <PiSignOutBold className='text-blue-600 text-[15px] font-semibold' />
                                                </div>
                                                <p className='text-[0.98em] font-medium tracking-[0.3px]'>
                                                    Sign out
                                                </p>
                                            </a>
                                        </div>
                                        <div className='flex items-center justify-center w-full py-4 gap-4'>
                                            <div className='xs:text-[0.92em] md:text-[0.9em]'>Privacy Policy</div>
                                            <div className='xs:text-[0.92em] md:text-[0.9em]'>Term of Serviec</div>
                                        </div>
                                        <div className='flex items-center justify-end flex-col mt-10 w-full xs:text-[0.92em] md:text-[0.9em]'>
                                            <p>
                                                All Rights Reserved
                                            </p>
                                            <p>
                                                Copyright &copy; {currentYear} || Apna Store
                                            </p>
                                        </div>
                                        <ToastContainer />
                                    </motion.div>
                                )
                            }
                        </div>
                    </div>
                </div>

                {/* -----------Responsive Navbar------------ */}
                <div className='flex items-center w-fit h-auto xs:inline-flex lg:hidden'>
                    {
                        isMenu ?
                            <div onClick={toggleMenbar} className='text-[1.5em] cursor-pointer xs:inline-flex lg:hidden'>
                                <RiMenuLine />
                            </div>
                            :
                            <div onClick={toggleMenbar} className='text-[1.5em] cursor-pointer xs:inline-flex lg:hidden'>
                                <RiCloseLargeFill />
                            </div>
                    }
                    {
                        !isMenu && (
                            <motion.div
                                initial={{ y: 250 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.6, ease: [0, 0.71, 0.2, 1.01] }}
                                className='header-theme absolute top-14 left-0 z-[60] flex items-center justify-start flex-col pt-10 w-full min-h-[100vh]'>
                                <div className='flex items-center justify-between px-5 w-full h-auto'>
                                    <div>
                                        {storedValue === "dark" ? (
                                            <div
                                                onClick={() => setStoredValue("")}
                                                className='flex items-center gap-x-2 text-[1.5em] cursor-pointer duration-100'>
                                                <p className='text-[0.8em] font-semibold'>Theme:)</p>
                                                <CiLight />
                                            </div>
                                        )
                                            :
                                            (
                                                <div
                                                    onClick={() => setStoredValue("dark")}
                                                    className='flex items-center gap-x-2 text-[1.5em] cursor-pointer duration-100'>
                                                    <p className='text-[0.8em] font-semibold'>Theme:)</p>
                                                    <MdOutlineDarkMode />
                                                </div>
                                            )
                                        }
                                    </div>
                                    <NavLink to={'./cartlist'} onClick={toggleMenbar} className="relative text-[1.4em]">
                                        <FiShoppingCart className='text-3xl' />
                                        <div className='absolute flex items-center justify-center top-[-7px] pt-[2px] w-[18px] h-w-[18px] bg-red-600 text-white text-[0.7rem] font-medium rounded-full'>
                                            {total_item}
                                        </div>
                                    </NavLink>
                                </div>
                                <div className='text-underLine flex items-center justify-center flex-col pt-36 gap-y-4 w-full xs:text-[1.2em] md:text-[1.32em] font-semibold uppercase'>
                                    {AdminSidarLinks.map((items, index) => {
                                        const { id, button, url } = items
                                        return (
                                            <NavLink
                                                key={id}
                                                to={url}
                                                onClick={toggleMenbar}
                                                className={`flex items-center flex-nowrap gap-x-2 hover:text-gray-500 ${items === index ? "active" : ''}`}>
                                                <div className='xs:text-[1.05em] sm:text-[1.02em] lg:text-[0.92em]'> {button} </div>
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Header
