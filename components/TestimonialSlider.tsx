"use client"
import React, { Component } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testmonials=[{
    title:"Lihaz khan",
    desc:"I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
    img:"/Image.png"
}
,
{
    title:"Lihaz khan",
    desc:"I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
    img:"/Image.png"
}
,

{
    title:"Lihaz khan",
    desc:"I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
    img:"/Image.png"
}
,



]


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <></>

    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <></>
    );
}


export default class TestimonialSlider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />


        };
        return (
            <div>
                <Slider ref={c => (this.slider = c)} {...settings}>

{
    testmonials.map((item,ind)=>(

        <div className="relative md:h-[400px]">

        <div className=" w-full mt-[90px] h-[250px]  bg-[#242648] ">
        </div>

        <div className="absolute inset-0 flex items-center mx-4 justify-between">
            <div className="  md:h-[350px] relative  flex-1 rounded-full w-[350px]"  >

                <Image src={item.img} alt="" width={350} height={350}/>
            </div>
            <div className="flex-1">
                <h1 className="globalHeading  text-[#FFF]">{item.title}</h1>
                
                <p className="text-sm font-semibold text-justify text-[#FFF]">{item.desc}</p>
            </div>

        </div>
    </div>
    ))
}


                    
                </Slider>
                <div className=" mt-2 flex justify-end  gap-5">
                    <Image src='/arrowleft.png'  alt="" width={30} height={30} onClick={this.previous} />




                    <Image src='/arrowright.png' alt="" width={30} height={30} onClick={this.next} />
                </div>
            </div>
        );
    }
}