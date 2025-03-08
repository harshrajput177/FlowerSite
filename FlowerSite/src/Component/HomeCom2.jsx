import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Style/HomeCom2.css';
import Img1 from '../Image/IMG-20250301-WA0029-removebg-preview.png';
import Img2 from '../Image/IMG-20250301-WA0028-removebg-preview.png';
import Img3 from '../Image/IMG-20250301-WA0027-removebg-preview.png';
import Img4 from '../Image/WhatsApp_Image_2025-03-01_at_12.45.14_4dd6019c-removebg-preview.png';
import Img5 from '../Image/IMG-20250301-WA0030-removebg-preview.png';

const flowerData = [
  { name: 'Autumn roses', price: '$100.00', image: Img1 },
  { name: 'Roses in box', price: '$125.00', image: Img2 },
  { name: 'Spring feeling', price: '$150.00', image: Img4 },
  { name: 'Roses in box', price: '$125.00', image: Img3 },
  { name: 'Spring feeling', price: '$150.00', image: Img5 }
];

const FlowerCatalog = () => {
  return (
    <div className="catalog-container">
      <h2 className="catalog-title">Catalog</h2>
      <p className="catalog-description">
        Choose from our most popular flower bouquets to send to any occasion. Next Day delivery is available on all our best selling flowers. Some can be delivered within hours of ordering.
      </p>
      <div className="catalog-carousel">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="SwiperSide py-4"
        >
          {flowerData.map((flower, index) => (
            <SwiperSlide key={index}>
              <div className="card-flower">
                <div className="card-image-container-flower">
                  <img src={flower.image} alt={flower.name} className="card-image-flower" />
                </div>
                <div className="card-content-flower">
                  <h3 className="card-title-flower">{flower.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FlowerCatalog;