import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const BannerSlider = () => {
    const banners = [
        { id: 1, image: '/images/banner1.jpg', alt: 'Banner 1' },
        { id: 2, image: '/images/banner2.jpg', alt: 'Banner 2' },
        { id: 3, image: '/images/banner3.jpg', alt: 'Banner 3' },
    ];

    return (
        <div className="banner-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <img src={banner.image} alt={banner.alt} className="banner-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;