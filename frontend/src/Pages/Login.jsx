import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { IoLogInSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {
    const [logininfo, setLogininfo] = useState({
        email: '',
        password: ''
    });

    const Navigate = useNavigate();

    const handleInputEvent = (e) => {
        const { name, value } = e.target;
        const copyLogininfo = { ...logininfo };
        copyLogininfo[name] = value;
        setLogininfo(copyLogininfo);
    };
    // console.log('signinfo -->', signinfo);

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const { email, password } = logininfo;
        if (!email || !password) {
            return hendleError('email & password are required');
        };

        try {
            const url = 'http://localhost:3000/auth/login';
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(logininfo)
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
                }, 1000)
            } else if (!success) {
                hendleError(message)
            }

        } catch (error) {
            console.log('Error during sign up:', error);
        }

    };

    return (
        <>
            <div className='flex items-center justify-center px-3 py-28 w-full min-h-screen duration-150'>
                <form onSubmit={handleLoginForm} className='contact-form form-input ProductComp flex flex-col items-center justify-center py-8 xs:px-[10px] sm:px-[20px] lg:px-[20px] xs:w-[400px] sm:w-[340px] lg:w-[380px] rounded-md text-[0.98em] text-amber-50'>
                    <h2 className='flex items-center justify-center text-[1.7em] font-semibold'>
                        Login
                        <IoLogInSharp />
                    </h2>
                    <div className='flex flex-col gap-y-7 mt-8 w-full'>
                        <input
                            type="text"
                            placeholder='Email Address'
                            autoComplete='off'
                            name='email'
                            onChange={handleInputEvent}
                            value={logininfo.email}
                            className='custom-input' />
                        <input
                            type="text"
                            placeholder='Password'
                            autoComplete='off'
                            name='password'
                            onChange={handleInputEvent}
                            value={logininfo.password}
                            className='custom-input' />
                    </div>
                    <div className='flex items-center justify-between xs:flex-col lg:flex-row mt-9 xs:gap-y-1 w-full xs:text-[0.93em] md:text-[0.89em]'>
                        <NavLink to='/forgetPassword' className='underline hover:text-blue-400'>
                            Forget Password?
                        </NavLink>
                        <div className='flex items-center justify-center gap-x-2'>
                            <p className='mt-[2px]'>Don't have an account?</p>
                            <NavLink to='/register' className='underline hover:text-blue-400'>
                                Register
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex items-center justify-center mt-3 w-full'>
                        <button type='submit' className='w-full py-[6.4px] text-[1em] font-medium tracking-[0.3px] rounded-md bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default Login