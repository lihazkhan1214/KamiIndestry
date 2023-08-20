

import CardCarosel from "@/components/CardCarosel";
import FeatureProductList from "@/components/FeatureProductList";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ShopCatagory from "@/components/ShopCatagory";
import Testimonail from "@/components/Testimonail";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bgcolor">
     
       <Hero/>
       <ShopCatagory/>
      <FeatureProductList/>
      <Testimonail/>
      <Gallery/>
      <Contact/>
     
      
    
      
      

       
    </main>
  )
}
