import teachertwo from "../img/teacher 1.svg";
import teacherone from "../img/teacher 1 (2).svg";
import teacherthree from "../img/teacher 1 (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
export default function Ustunlik() {
  const { t } = useTranslation("translation", { keyPrefix: "Ustunlik" });
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper slider-ustunlik"
      >
        <SwiperSlide className="">
          <div className="slider-one">
            <img src={teachertwo} alt="" />
            <h5 className="slider-title">{t("slider1h")}</h5>
            <p className="">{t("slider1p")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-one">
            <img src={teachertwo} alt="" />
            <h5 className="slider-title">{t("slider1h")}</h5>
            <p>{t("slider1p")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-one">
            <img src={teacherthree} alt="" />
            <h5 className="slider-title">{t("slider1h")}</h5>
            <p>{t("slider1p")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
