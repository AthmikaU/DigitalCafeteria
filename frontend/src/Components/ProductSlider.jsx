import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from '../assets/Images/samosa.jpg'
import F2 from '../assets/Images/panipuri.jpg'
import F3 from '../assets/Images/noodles.jpg'
import F4 from '../assets/Images/gobi.jpg'
import F5 from '../assets/Images/pavbaji.jpg'
import F6 from '../assets/Images/pasta.jpg'
import SProduct from './SProduct';

const ProductSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='slider py-5' id="">
        <h1 className='text-center display-4 mt-4 fw-bold text-light'>
            Student Favorites!
        </h1>
        <div className='container mt-5'>
            <Slider {...settings}>
                <div className='p-1'>
                    <SProduct 
                        Image = {F1}
                        Description="Samosa"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {F2}
                        Description="Panipuri"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {F3}
                        Description="Noodles"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {F4}
                        Description="Gobi Manchurian"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {F5}
                        Description="Pavbaji"
                    />
                </div>
                <div className='p-1'>
                <SProduct 
                        Image = {F6}
                        Description="Pasta"
                    />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default ProductSlider