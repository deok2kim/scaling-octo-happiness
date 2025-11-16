import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BannerItem from "./BannerItem";
import "./BannerSlider.css";
import type { Banner } from "../../types";

interface BannerSliderProps {
  banners: Banner[];
}

function BannerSlider({ banners }: BannerSliderProps) {
  return (
    <div className="banner-slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{
          clickable: true,
          type: "fraction",
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
