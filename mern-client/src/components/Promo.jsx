import React from 'react'
import img2 from '../assets/awardbooks.png'
import { Link } from 'react-router-dom'
const Promo = () => {
  return (
    <div className='flex bg-blue-200 p-10 w-100'>
        <div className='w-1/2 flex flex-col justify-center p-8 '>
            <h1 className='text-4xl font-bold'>2023 National Book Awards For Fiction Shortlist</h1>
            
            <Link to="/shop">
              <button className='bg-indigo-700 my-4 text-white rounded-xl px-6 py-3'>Explore More</button>
              </Link>
        </div>
        <div className='w-1/2 text-center flex justify-center'>
            <img className='p-6 w-[450px]' src={img2} alt="" />
        </div>
    </div>
  )
}

export default Promo