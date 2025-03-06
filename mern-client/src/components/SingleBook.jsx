import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id, image_url, book_title,authorname,category,book_description,book_pdf_url} = useLoaderData();
  return (
    <div className='p-10 w-full flex flex-wrap md:flex-nowrap gap-10'> 
      <div className='w-full  flex justify-center  md:w-1/2'>
        <img className='w-[500px] h-[600px]' src={image_url} alt="" />
      </div>
      <div className='flex  md:w-1/2 flex-col w-full p-10'>
        <h1 className='text-4xl text-center md:text-start font-bold'> {book_title} </h1>
        <h1 className='text-2xl text-center  md:text-start font-medium'> {authorname} </h1>
        <h1 className='py-5 md:text-start text-center'>{category}</h1>
        <h1 className=''> {book_description}</h1>
        <h1 className='font-thin mt-6'> <a className='font-thin mt-6 text-sm text-gray-600' href={book_pdf_url}> {book_pdf_url} </a> </h1>
      </div>
    </div>
  )
}

export default SingleBook