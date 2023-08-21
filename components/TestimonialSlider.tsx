"use client"
import React, { Component, RefObject } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  title: string;
  desc: string;
  img: string;
}

interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

class SampleNextArrow extends React.Component<SampleArrowProps> {
  render() {
    const { className, style, onClick } = this.props;
    return (
     null
    );
  }
}

class SamplePrevArrow extends React.Component<SampleArrowProps> {
  render() {
    const { className, style, onClick } = this.props;
    return (
     null
    );
  }
}

class TestimonialSlider extends Component<TestimonialSliderProps> {
  private sliderRef: RefObject<Slider>;

  constructor(props: TestimonialSliderProps) {
    super(props);
    this.sliderRef = React.createRef();
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickNext();
    }
  }

  previous() {
    if (this.sliderRef.current) {
      this.sliderRef.current.slickPrev();
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div>
        <Slider ref={this.sliderRef} {...settings}>
          {this.props.testimonials.map((item, ind) => (
            <div className="relative md:h-[400px]" key={ind}>
              <div className="hidden md:block w-full mt-[90px] h-[250px] bg-[#242648]"></div>
              <div className="md:absolute md:inset-0 flex flex-col md:flex-row items-center mx-8 justify-between">
                <div className="md:h-[350px] relative flex-1 rounded-full md:w-[350px]">
                  <Image src={item.img} alt="" width={350} height={350} />
                </div>
                <div className="flex-1">
                  <h1 className="globalHeading text-[#181F36] md:text-[#FFF]">{item.title}</h1>
                  <p className="text-sm font-semibold text-[#181F36] text-justify md:text-[#FFF]">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-2 flex justify-end gap-5">
          <Image src='/arrowleft.png' alt="" width={30} height={30} onClick={this.previous} />
          <Image src='/arrowright.png' alt="" width={30} height={30} onClick={this.next} />
        </div>
      </div>
    );
  }
}

// Example array of testimonials
const testimonials: Testimonial[] = [
    {
        title: "Lihaz khan",
        desc: "I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
        img: "/Image.png"
    }
        ,
    {
        title: "Lihaz khan",
        desc: "I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
        img: "/Image.png"
    }
        ,
    
    {
        title: "Lihaz khan",
        desc: "I am Amazed by the Impeccable quality of Kami Industries Tweezzers They have Transformed my Beauty Routine, Making Eyebrow shaping Effortless  and Precise",
        img: "/Image.png"
    }
  // Add more testimonials here
];

const TestimonialSliderWrapper: React.FC = () => (
  <TestimonialSlider testimonials={testimonials} />
);

export default TestimonialSliderWrapper;
