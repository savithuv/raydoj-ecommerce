import React from 'react';
import './Hero.css';

// Import Swiper React components and required tools
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles (These are built-in Swiper files we just downloaded)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import your temporary images from the assets folder!
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        // This turns on the arrows, dots, and auto-play
        modules={[Navigation, Pagination, Autoplay]} 
        slidesPerView={1} // Show one image at a time
        //navigation={true} // Shows the left/right arrows
        pagination={{ clickable: true }} // Shows the dots at the bottom
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Changes slide every 3 seconds
        loop={true} // Makes it repeat endlessly
        className="mySwiper"
      >
        
        {/* SLIDE 1 */}
        <SwiperSlide>
          <img src={hero1} alt="Leather Worker" className="hero-image" />
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <img src={hero2} alt="Leather Wallet" className="hero-image" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Hero;