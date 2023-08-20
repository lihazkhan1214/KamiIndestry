"use client"
import React, { Component } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "./FeaturedCard";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src="/arrowright.png" alt="" width={60} height={60} 
      className={className}
      style={{width:"30px",height:"30px"}}
      onClick={onClick}
    />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image src='/arrowleft.png' width={60} height={60} alt=""
      className={className}
      style={{width:"30px",height:"30px"}}
    
      onClick={onClick}
    />
  );
}

export default class CardCarosel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }
        ,
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        ,
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
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
      <div className="px-10">

        <Slider  {...settings} >
<FeaturedCard/>

<FeaturedCard/>
<FeaturedCard/>
<FeaturedCard/>
<FeaturedCard/>
<FeaturedCard/>
<FeaturedCard/>
          
        </Slider>
      </div>
    );
  }
}