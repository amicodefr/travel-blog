import React, { useEffect, useState } from "react";
import { destinations } from "../../data/destinations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Home.css";
import Loader from "../../components/loaders/Loader"

export default function Home() {

  const [loading,setLoading] = useState(true)
  const popular = destinations.slice(0, 8);


   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container_loader">
        <Loader />
      </div>
    );
  }

  return (


    <div className="home-page">
      <h1>Welcome to Travel Explorer</h1>
      <p>Discover amazing destinations around the world</p>

       
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} >
      
        {popular.map((place) => (
          <SwiperSlide key={place.id}>
            <div className="slide-card">
              <img src={place.image} alt={place.city} />
              <div className="slide-text">
                <h3>{place.city}, {place.country}</h3>
                <p>{"$".repeat(place.price)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


