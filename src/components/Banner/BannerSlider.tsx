import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BannerItem from './BannerItem';
import BannerSkeleton from './BannerSkeleton';
import { Banner } from '../../types';
import './BannerSlider.css';

interface BannerSliderProps {
  banners: Banner[];
  isLoading?: boolean;
}

function BannerSlider({ banners, isLoading }: BannerSliderProps) {
  if (isLoading) {
    return (
      <div className="banner-slider">
        <BannerSkeleton />
      </div>
    );
  }

  return (
    <div className="banner-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          type: 'fraction'
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSlider;

