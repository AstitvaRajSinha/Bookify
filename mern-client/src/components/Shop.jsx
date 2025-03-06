import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/all-books').then(res=> res.json()).then(data => setBooks(data))
  
  
  })
  
  return (
    <div>

<div>
        <div className=" grid grid-col-1 w-full place-content-center mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 ">
           {
          books.map(book => 
            <div className=''>
              <Link to={`/book/${book._id}`} key={book._id}>
              <div className="">
                <div className=" p-5 bg-gray-100 rounded-xl ">
                  <img className="w-[300px] h-[400px] " src={book.image_url} alt="" />
                </div>
                <div className="p-5 flex justify-between">
                  <div>
                  <h2 className="text-black text-xl font-bold"> {book.book_title} </h2>
                  <div> <h2>by <span>{book.authorname}</span> </h2>   </div>
                  </div>        
                </div>
              </div>
            </Link>
            </div>
            
          )
        }
        </div>
       
      </div>
      </div>

  )
}

export default Shop