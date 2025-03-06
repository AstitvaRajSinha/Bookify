import React from 'react'
import Banner from './Banner';

import FavBook from './FavBook';
import BestSeller from './BestSeller';
import Promo from './Promo';
import Feedback from './Feedback';
// import AllBooks from './AllBooks';

const Home = () => {
  return (
    <>
      <Banner />
      <BestSeller />
      <FavBook/>
    <Promo/>
    <Feedback/>

    </>

  )
}

export default Home;