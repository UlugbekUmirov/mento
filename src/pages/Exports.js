import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import exportone from "../img/Rectangle 542.png";
import exporttwo from "../img/Rectangle 542-1.png";
import exportthree from "../img/Rectangle 542-2.png";
import exportfour from "../img/Rectangle 542-3.png";
import { useTranslation } from "react-i18next";

export default function Exports() {
  const { t } = useTranslation("translation", { keyPrefix: "Exports" });
  return (
    <div>
      <div className="container ">
        <div className="exports">{t("h1")}</div>
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
          <SwiperSlide>
            <div className="export-one">
              <img src={exportone} alt="" />
              <h5 className="slider-title">Jakob Kenter</h5>
              <span>{t("span1")}</span>
              <p className="about-export">{t("p")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="export-one">
              <img src={exporttwo} alt="" />
              <h5>Jakob Kenter</h5>
              <span>{t("span2")}</span>
              <p className="export-one">{t("p")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="export-one">
              <img src={exportthree} alt="" />
              <h5>Jakob Kenter</h5>
              <span>{t("span3")}</span>
              <p className="about-export">{t("p")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="export-one">
              <img src={exportfour} alt="" />
              <h5>Jakob Kenter</h5>
              <span>{t("span4")}</span>
              <p className="about-export">{t("p")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="export-one">
              <img src={exportthree} alt="" />
              <h5>Jakob Kenter</h5>
              <span>{t("span5")}</span>
              <p className="about-export">{t("p")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
