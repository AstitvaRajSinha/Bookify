import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
  <>
   
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686502594i/176443045.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1694467752i/195430708.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1690213528i/194803816.jpg" alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702752175i/179311283.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671336608i/62047984.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687803098i/61771675.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635260162i/58724923.jpg" alt="" />
        </SwiperSlide>

        
      </Swiper>
    </>
  )
}

export default BannerCard;