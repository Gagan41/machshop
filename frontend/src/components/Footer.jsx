import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
        <p className=' text-lg font-bold text-black py-2'>Nandi Agrotech</p>

            <p className='w-full md:w-2/3 text-gray-600'>
            At Nandi Agrotech, we provide high-quality and reliable agricultural equipment to enhance productivity and efficiency. With cutting-edge machinery and modern solutions, we empower farmers with the best tools for success. Built on trust and innovation, we are your farming partner, ensuring growth at every step. Choose Nandi Agrotech – where technology meets agriculture for a better tomorrow! 🌾💪
            </p>
        </div>

        <div>
        <p className='text-xl font-medium mb-5 text-black'>CHECK OUT</p>

            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                
                <li>Twitter</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-black'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>(+91)6366542135</li>
                <li>contact@nandiagrotech.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Nandiagrotech.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
