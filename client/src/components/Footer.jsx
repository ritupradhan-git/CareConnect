import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section */}
            <div>
                <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos facere vitae soluta nemo fugiat fuga laboriosam voluptate deleniti veniam optio ipsa, eum temporibus harum autem repellendus ut dolores itaque atque dolor dignissimos assumenda velit ducimus. Est enim dolor deserunt expedita.</p>
            </div>
            {/* Center Section */}
            <div>
                <p className='text-xl font-medium mb-5 '>Company</p>
                <ul className='
                flex flex-col gap-2 text-gray-600'>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Home</li>
                    <li>Privacy&Policy</li>
                </ul>
            </div>
            {/* Right Section */}
            <div >
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='
                flex flex-col gap-2 text-gray-600'>
                    <li>+453-344-244</li>
                    <li>CareConnect@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright Text */}
        <div>
            <hr />
            <p  className='py-5 text-sm text-center'>Copyrights @2026 - CareConnect</p>
        </div>
    </div>
  )
}

export default Footer
