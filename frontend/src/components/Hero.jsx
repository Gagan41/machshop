import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 mt-20'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className=' font-medium text-sm md:text-base text-black'>WE ASSURE</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed text-black'>BEST PRODUCT</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base text-black'>VISIT NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                </div>
            </div>
      </div>
      {/* Hero Right Side */}
      <img className='w-full sm:w-1/2 rounded-lg' src="https://tse3.mm.bing.net/th?id=OIP.kJBtdW0QgfUXnjxCaq6IVQHaEN&pid=Api&P=0&h=180" alt="Agriculture Equipment" />

    </div>
  )
}

export default Hero
