import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
        <p className=' text-lg font-bold text-black py-2'>Nandi Agrotech Turuvekere <sub>-572227</sub></p>

            <p className='w-full md:w-2/3 text-black'>
            At Nandi Agrotech, we offer strong and reliable farming equipment to help increase productivity and save time.
Our advanced machines and modern technology help farmers do their work more easily and effectively.
We believe in trust and innovation, and we work as a partner with every farmer to support their growth.
Choose Nandi Agrotech – where modern technology supports farming for a better future! 🌾💪
            </p>
        </div>

        <div>
        <p className='text-xl font-medium mb-5 text-black'>CHECK OUT</p>

            <ul className='flex flex-col gap-1 text-black'>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                
                <li>Twitter</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 text-black'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-black'>
                <li>(+91)6366542135</li>
                <li>contact@nandiagrotech.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center text-black'>Copyright 2024@ Nandiagrotech.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
