import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import teacherone from "../img/teacher 1 (2).svg";
import teachertwo from "../img/teacher 1.svg";
import teacherthree from "../img/teacher 1 (1).svg";
export default function Slider() {
  const { t } = useTranslation("translation", { keyPrefix: "slider" });
  return (
    <div className="container ">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
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
        className="mySwiper slider"
      >
        <SwiperSlide className="slider-one">
          <img src={teacherone} alt="" />
          <h5>{t("slider1h")}</h5>
          <p>{t("slider1p")}</p>
        </SwiperSlide>
        <SwiperSlide className="slider-one">
          <img src={teachertwo} alt="" />
          <h5>{t("slider2h")}</h5>
          <p>{t("slider2p")}</p>
        </SwiperSlide>
        <SwiperSlide className="slider-one">
          <img src={teacherthree} alt="" />
          <h5>{t("slider3h")}</h5>
          <p>{t("slider3p")}</p>
        </SwiperSlide>
        <SwiperSlide className="slider-one">
          <img src={teacherone} alt="" />
          <h5>{t("slider1h")}</h5>
          <p>{t("slider1p")}</p>
        </SwiperSlide>
        <SwiperSlide className="slider-one">
          <img src={teacherthree} alt="" />
          <h5>{t("slider2h")}</h5>
          <p>{t("slider2p")}</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
