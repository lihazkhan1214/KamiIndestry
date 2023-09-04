"use client"
import React,{useEffect, useState} from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "./FeaturedCard";
import { fetchData } from "@/apicalls/api";
import useSWR from "swr";
import Loading from "./Loading";



interface FetchedProduct {
  _id: string;
  name: string;
  price: number;
  stock:number
  category:string;
  description: string;
  images: { url: string}[];// Update this to the actual type of images if needed
  ratings: number; // Update this to the actual type of ratings if needed
}



interface SampleArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const SampleNextArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <Image
      src="/arrowright.png"
      alt=""
      width={60}
      height={60}
      className={className}
      style={{ width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = ({
  className,
  style,
  onClick,
}) => {
  return (
    <Image
      src="/arrowleft.png"
      width={60}
      height={60}
      alt=""
      className={className}
      style={{ width: "30px", height: "30px" }}
      onClick={onClick}
    />
  );
};

// ...

const CardCarousel: React.FC = () => {
  const [products, setProducts] = useState<FetchedProduct[] | null>([]);

  // const { data, error } = useSWR<FetchedProduct []>(`${process.env.API_URL}/api/products?featured=${true}`, fetchData);


  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/products?featured=true`);
        
        if (!response.ok) {
          throw new Error(`Fetch failed with status ${response.status}`);
        }
        
        const result = await response.json();
        setProducts(result);
        setError(null);
      } catch (err: any) {
        setError(err);
        setProducts(null);
      }
    };

    fetchData();
  }, []);
  
  if (error) return <div>Error loading data</div>;
  if (!products) return <div className="flex justify-center items-center"><Loading/></div>;



  
  
 
  const settings = {
    dots: true,
    infinite: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // console.log("products", product);

  return (
    <div className="px-10">
      <Slider {...settings}>
        {products.map((item,ind) => (
          <FeaturedCard
            name={item.name}
            price={item.price}
            id={item._id}
            desc={item.description}
            images={item.images}
            ratings={item.ratings}
            stock={item.stock}
            category={item.category}
            key={ind}
          />
        ))}
        
 
      </Slider>
    </div>
  );
};


export default CardCarousel;