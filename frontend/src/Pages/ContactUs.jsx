import React, { useState } from 'react'
import { BsFillSendPlusFill } from "react-icons/bs";
import { FaAddressBook, FaPhoneAlt, } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";
import { MdOutlineMailOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { hendleError, hendleSuccess } from '../Components/Utils';
import { RiMessage2Fill } from 'react-icons/ri';

const contactLinks = [
  {
    contactLinksIcon: <FaAddressBook className='text-xl' />,
    contactInfo: 'Khurrianwala 266RB, Faisalabad, Pakistan',
    url: 'https://maps.app.goo.gl/uiJtGXsYBnCtVp1h7',
    bgcolor: '#F1EAFB',
    textcolor: '#7E3BE1'
  },
  {
    contactLinksIcon: <MdOutlineMailOutline className='text-xl' />,
    contactInfo: 'faisalsandhu106@gmail.com',
    url: 'mailto:faisalsandhu106@gmail.com',
    bgcolor: '#FEF0EC',
    textcolor: '#fc7d5a'
  },
  {
    contactLinksIcon: <FaPhoneAlt className='text-xl' />,
    contactInfo: '+92 3046594966',
    url: 'tel:+92 3046594966',
    bgcolor: '#FFF5E3',
    textcolor: '#fdb123'
  },
  {
    contactLinksIcon: <CgProfile className='text-xl' />,
    contactInfo: 'https://faisalnazir-portfolio.',
    url: 'https://faisalnazir-portfolio.netlify.app/#home',
    bgcolor: '#E1FBF6',
    textcolor: '#04ffcd'
  },
]

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    const CopyFormData = { ...contact };
    CopyFormData[name] = value;
    setContact(CopyFormData);
    // console.log(contact)
  };

  const handleContactForm = async (event) => {
    event.preventDefault();
    const { name, email, address, message } = contact;
    if (!name || !email || !address || !message) {
      return hendleError('Please, All fields are required');
    };

    try {
      const url = 'http://localhost:3000/contact/user';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });
      const data = await res.json();
      console.log(data)

      const { success } = data;
      if (success) {
        hendleSuccess('Message Send Successfully')
        setContact({
          name: '',
          email: '',
          address: '',
          message: ''
        })
      } else {
        hendleError('Your contact form already exist, Please change your Email')
      }

    } catch (error) {
      console.log('Error during sign up:', error);
    }
  }

  return (
    <>
      <div className='flex flex-col py-20 xs:px-4 w-full h-auto'>
        <div className="w-full xs:px-2 sm:px-4 md:px-8 lg:px-12 pt-3 xs:h-[280px] sm:h-[300px] lg:h-[350px] xl:h-[400px]">
          <iframe className='rounded-md' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27216.032081330206!2d73.25255493706702!3d31.496573593565966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.    1!3m3!1m2!1s0x39226e035f67f90d%3A0xa4d3c7d11054e1be!2sKhurianwala%2C%20Pakistan!5e0!3m2!1sen!2s!4v1742716774173!5m2!1sen!2s" width="100%" height="100%"></iframe>
        </div>
        <div className="grid grid-cols-1 justify-items-center xs:pt-0 sm:pt-28 w-full h-auto">
          <div className='text-[1.7em] font-semibold xs:hidden md:inline-flex leading-[30px]'>
            Contact <div className='border-bottom'>Us !</div>
          </div>
          <div className='grid xs:grid-cols-1 sm:grid-cols-2 xs:pt-8 sm:pt-16 lg:pt-20 gap-x-2 w-full'>
            {/*------- Contact-Form----------- */}
            <div className='flex items-center justify-end w-full h-auto xs:order-2 md:order-1'>
              <form onSubmit={handleContactForm} className='contact-form ProductComp flex flex-col xs:px-[10px] sm:px-[20px] lg:px-[25px] xl:px-[35px] xs:w-[500px] sm:w-[400px] lg:w-[410px] xl:w-[485px] py-8 w-full xs:text-[0.99em] sm:text-[0.96em] rounded-md xs:order-2 md:order-1 text-amber-50'>
                <div className='flex items-center justify-center pb-5 w-full h-auto '>
                  <h1 className='flex items-center gap-x-2 text-[1.5em] font-semibold'>
                    Send Message
                    <RiMessage2Fill />
                  </h1>
                </div>
                <div className='flex flex-col gap-y-6 mt-6 w-full h-auto'>
                  <input
                    type="text"
                    placeholder='Full Name *'
                    name='name'
                    value={contact.name}
                    onChange={handleInputValue}
                    className='custom-input' />

                  <input
                    type="email"
                    placeholder='Email Address *'
                    name='email'
                    value={contact.email}
                    onChange={handleInputValue}
                    className='custom-input' />

                  <input
                    type="text"
                    placeholder='Your City *'
                    name='address'
                    value={contact.address}
                    onChange={handleInputValue}
                    className='custom-input' />

                  <textarea
                    type="text"
                    placeholder='Enter Your Message *'
                    name="message"
                    value={contact.message}
                    onChange={handleInputValue}
                    className='custom-textarea xs:min-h-[190px] md:min-h-[150px] xl:min-h-[180px] max-h-[400px] leading-[20px] overflow-hidden'>
                  </textarea>
                </div>
                <button type='submit' className='flex items-center justify-center gap-x-1 mt-4 ml-[0.5px] px-[10px] py-[6.8px] text-[0.95em] tracking-[0.3px] text-amber-50 bg-none hover:bg-none bg-[#db319d] hover:bg-[#a41570]'>
                  Submit
                  <BsFillSendPlusFill />
                </button>
              </form>
            </div>

            {/* ------Form-Info-Links----- */}
            <div className='flex flex-col items-start justify-start xs:px-[10px] md:px-[30px] lg:px-[45px] xl:px-[60px] py-12 xs:gap-y-9 w-full xs:text-[0.99em] sm:text-[0.99em] md:text-[0.97em] tracking-[0.08px] xs:order-1 md:order-2'>
              <div className='flex items-center justify-center pb-5 w-full h-auto'>
                <h1 className='flex text-[1.5em] font-semibold'>
                  Get In Touch
                </h1>
              </div>
              {contactLinks.map((items, index) => {
                const { contactLinksIcon, contactInfo, url, bgcolor, textcolor } = items;
                return (
                  <div key={index} className='flex items-center justify-start w-full gap-x-3'>
                    <div className='w-[50px] h-full'>
                      <NavLink style={{ backgroundColor: bgcolor, color: textcolor }} to={url} className='flex items-center justify-center w-[45px] h-[45px] border-2 border-gray-200 rounded-full duration-100 overflow-hidden'>
                        {contactLinksIcon}
                      </NavLink>
                    </div>
                    <NavLink to={url} className='underline hover:text-blue-700 duration-100'>
                      {contactInfo}
                    </NavLink>
                  </div>
                )
              })}
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default ContactUs