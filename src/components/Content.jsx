import React from 'react';
import MyCarousel from './MyCarousel';
import Deals from './Deals';
import Brands from './Brands';
import Categories from './Categories';
import ExploreBrands from './ExploreBrands';
import Luxe from './Luxe';


export default function Content() {
  return (
    <div>
      <MyCarousel /><br /><br />
      <Deals /><br /><br />
      <Brands /><br /><br />
      <Categories /><br /><br />
      <ExploreBrands /><br /><br />
      <Luxe />
    </div>
  )
}



