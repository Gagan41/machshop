import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 10% off</p>
      <p className='text-black mt-3'>
      "Get the best deals on top-quality agricultural equipment – unbeatable prices, limited-time offers!" 🚜🔥
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
      <input
  className='w-full sm:flex-1 outline-none bg-transparent text-white placeholder-white  border-white focus:border-blue-500'
  type="email"
  placeholder='Enter your email'
  required
/>

        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
