import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import img1 from './calcihd.jpg'
import img2 from './calcihd2.jpg'
import img3 from './calcihd3.jpg'


import './CarouselComp.css';

export default function CarouselComp() {
  return (
    <div className=''>
    <Carousel>
      <div className='bg-black'>
        <img src={img1} alt="Image 1" className='max-w-[60vh] max-h-[60vh]'/>
      </div>
      <div className='bg-black'>
        <img src={img2} alt="Image 2" className='max-w-[60vh] max-h-[60vh]'/>
      </div>
      <div className='bg-black'>
        <img src={img3} alt="Image 3" className='max-w-[60vh] max-h-[60vh]'/>
      </div>
    </Carousel>
  </div>

  )
}
