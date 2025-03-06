// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './book.css';

// // import required modules
// import { Pagination } from 'swiper/modules';
// // import BestSeller from './BestSeller';
// import { Link } from 'react-router-dom';

// const BookCards = ({books, headline}) => {
//   return (
//     <>

//     <div className='w-full text-center   font-semibold text-5xl p-10'>
//         {headline}

//         </div>
// <div className='w-full'>
//         <Swiper
//         slidesPerView={4}
//         spaceBetween={1}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {
//           books.map(book => <SwiperSlide className='w-[500px]' key={book._id}>
//             <Link to={`/book/${book._id}`}>
//               <div>
//                 <div>
//                 <img src={book.image_url} alt="" />
//               </div>
//               <div>
//              <h2 className='text-black'> {book.book_title} </h2>
//               </div>
//               </div>

//             </Link>
//             </SwiperSlide>)
//         }
//       </Swiper>
//         </div>

//     </>
//   )
// }

// export default BookCards

import React from "react";
import { Link } from "react-router-dom";

const BookCards = ({ books, headline }) => {
  return (
    <>
      <div>
        <h2 className="w-full text-center font-semibold text-5xl p-10">
          {headline}
        </h2>
      </div>
      <div>
        <div className="grid grid-col-1 w-full place-content-center mx-auto md:grid-cols-2 lg:grid-cols-4 gap-4 p-10 ">
           {
          books.map(book => 
            <div>
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
                  <div>
                    <h1 className="text-blue-500 font-bold">Rs.110.00</h1>
                  </div>
                  
                </div>
              </div>
            </Link>
            </div>
            
          )
        }
        </div>
       
      </div>
        
     

    </>
  );
};

export default BookCards;
