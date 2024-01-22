import React from 'react'
import './Header.scss'


import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';



import { Navigation } from 'swiper/modules';
const Header = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='slide'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
        <div className='txt'>
            Get your <span>Education</span> Today!
        </div>
        </SwiperSlide>
     
        <SwiperSlide className='slide'><img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg" alt="" />
        <div className='txt'>
            Get your <span>Education</span> Today!
        </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default Header
