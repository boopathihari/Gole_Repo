import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import path from './picLap.jpg'
import './CarouselComp.css';

export default function CarouselComp() {
  return (
    <div className=''>
    <Carousel>
      <div className='bg-black'>
        <img src={path} alt="Image 1" className='max-w-[100vh] max-h-[100vh]'/>
      </div>
      <div className='bg-black'>
        <img src={path} alt="Image 2" className='max-w-[100vh] max-h-[100vh]'/>
      </div>
      <div className='bg-black'>
        <img src={path} alt="Image 3" className='max-w-[100vh] max-h-[100vh]'/>
      </div>
    </Carousel>
  </div>

  )
}
