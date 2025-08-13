// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../Hero.css'; // ไฟล์ CSS สำหรับตกแต่งเพิ่ม

import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4.png';
import home5 from '../assets/home5.png';





const Home = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "CarRental",
              "name": "Alphard VIP",
              "image": "https://yourdomain.com/images/logo.png",
              "url": "https://yourdomain.com",
              "telephone": "+66 86 793 3324",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangkok",
                "addressRegion": "Bangkok",
                "addressCountry": "TH"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "description": "Luxury Toyota Alphard van rental with chauffeur in Bangkok and across Thailand. Airport transfer and long-distance trips available.",
              "areaServed": "Thailand"
            }
          `}
        </script>
      </Helmet>

      <div className="home-content">
        {/* page content */}
      </div>
    </>
  );
};


const Hero = () => {
  const slides = [
    {
      image: home1,
      title: 'Premium Alphard VIP Car Rental',
      subtitle: 'Luxury travel experience with professional chauffeurs'
    },
    {
      image: home2,
      title: 'Travel in Comfort & Style',
      subtitle: 'Airport transfer and long-distance trips'
    },
    {
      image: home3,
      title: 'Exclusive VIP Service',
      subtitle: 'Experience the best in Thailand'
    },
    {
      image: home4,
      title: 'All in one service',
      // subtitle: 'Experience the best in Thailand'
    },
    {
      image: home5,
      title: 'Car Rental With Driver',
      // subtitle: 'Experience the best in Thailand'
    }
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              <div className="hero-overlay">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn-secondary">Contact Us</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <h1>Premium Alphard VIP Car Rental</h1>
//         <p>Luxury travel experience with professional chauffeurs</p>
//         <div className="hero-buttons">
//           {/* <Link to="/booking" className="btn-primary">Book Now</Link> */}
//           <Link to="/fleet" className="btn-secondary">View Fleet</Link>
//         </div>
//       </div>
//     </section>
//   );
// };

export default Hero;