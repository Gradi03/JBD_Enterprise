import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../index.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Gallery() {
  return (
    <div
      id="gallery"
      className="bg-light min-h-screen p-8 flex flex-col items-center justify-center"
      style={{ maxHeight: '100vh' }} // Limit the height to viewport height
    >
      {/* Title Section */}
      <motion.h1
        className="text-4xl text-primary font-semibold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }} // Trigger the animation when the title is 50% in view
      >
        Gallery
      </motion.h1>

      {/* Swiper Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} // Start with 1 slide
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
          breakpoints={{
            1024: { slidesPerView: 3 }, // Display 3 slides on large screens
          }}
        >
          {/* Swiper Slides */}
          {['/images/jbd.jpg', '/images/perfoming1.jpeg', '/images/perfoming.jpg', '/images/perfoming3.jpeg'].map((src, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={src}
                alt={`Image ${index + 1}`}
                className="gallery-image"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }} // Trigger the animation when 50% of the image is in view
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Gallery;
