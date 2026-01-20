import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { RiAccountCircle2Fill } from 'react-icons/ri';
import { hendleError, hendleSuccess } from '../Components/Utils';

const SignUp = () => {
    const [signinfo, setSigninfo] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        password: '',
    });

    const Navigate = useNavigate();

    const handleInputEvent = (e) => {
        const { name, value } = e.target;
        const copySignupData = { ...signinfo };
        copySignupData[name] = value;
        setSigninfo(copySignupData);
    };

    const handleSignUpForm = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, address, password } = signinfo;
        if (!firstname || !lastname || !email || !address || !password) {
            return hendleError('Please, All fields are required')
        };

        try {
            const url = 'https://apna-store-backend-two.vercel.app/auth/signup';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signinfo)
            });

            const data = await res.json();
            // console.log('Sign up response -->', data)

            const { success, message, jwtToken, firstname, lastname, email, address, _id } = data;
            if (success) {
                hendleSuccess(message)
                localStorage.setItem('Token', jwtToken)
                localStorage.setItem('UserName', firstname)
                localStorage.setItem('LastName', lastname)
                localStorage.setItem('Email', email)
                localStorage.setItem('Address', address)
                localStorage.setItem('id', _id)
                setTimeout(() => {
                    Navigate('/shop')
                }, 2000)
            } else if (!success) {
                hendleError(message)
                setTimeout(() => {
                }, 2000)
            }

        } catch (error) {
            console.log('Error during sign up:', error);
        }

    }

    return (
        <>
            <div className='flex items-center justify-center px-3 w-full min-h-screen duration-150'>
                <form onSubmit={handleSignUpForm} className='contact-form ProductComp flex flex-col items-center justify-center py-8 w-full xs:px-[8px] sm:px-[21px] lg:px-[25px] xs:w-[405px] sm:w-[400px] lg:w-[460px] rounded-md xs:text-[0.98em] xl:text-[0.94em] text-amber-50'>
                    <h2 className='flex items-center justify-center gap-x-1 text-[1.5em] font-semibold '>
                        Sign Up
                        <RiAccountCircle2Fill className='text-2xl' />
                    </h2>
                    <div className='flex flex-col gap-y-6 mt-10 w-full'>
                        <div className='grid grid-cols-2 gap-x-3 w-full'>
                            <input
                                type="text"
                                placeholder='First Name'
                                autoComplete='off'
                                name='firstname'
                                onChange={handleInputEvent}
                                value={signinfo.firstname}
                                className='custom-input' />
                            <input
                                type="text"
                                placeholder='Last Name'
                                autoComplete='off'
                                name='lastname'
                                onChange={handleInputEvent}
                                value={signinfo.lastname}
                                className='custom-input' />
                        </div>
                        <input
                            type="text"
                            placeholder='Email Address'
                            autoComplete='off'
                            name='email'
                            onChange={handleInputEvent}
                            value={signinfo.email}
                            className='custom-input' />

                        <input
                            type="text"
                            placeholder='Address, City'
                            autoComplete='off'
                            name='address'
                            onChange={handleInputEvent}
                            value={signinfo.address}
                            className='custom-input' />

                        <input
                            type="text"
                            placeholder='Password'
                            autoComplete='off'
                            name='password'
                            onChange={handleInputEvent}
                            value={signinfo.password}
                            className='custom-input' />

                    </div>
                    <div className='flex items-center justify-center flex-col mt-7 gap-y-2 w-full'>
                        <button type='submit' className='w-full py-[6.8px] text-[1.1em] font-medium tracking-[0.2px] rounded-md bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                            Sign up
                        </button>
                        <p className='text-[0.9em]'>Already have an account ?</p>
                        <NavLink to='/login' className='w-full'>
                            <button className='w-full py-[6.8px] text-[1.1em] font-medium tracking-[0.2px] rounded-md bg-none hover:bg-none text-gray-900 bg-[#F9FAFB] hover:bg-[#bfc3c7]'>
                                Login
                            </button>
                        </NavLink>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default SignUp
