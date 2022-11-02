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
export default function Thoughts() {
  const { t } = useTranslation("translation", { keyPrefix: "Exports" });
  return (
    <div>
      <div className="container ">
        <div className="exports ">{t("h1thoungts")}</div>
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
          className="mySwiper slider "
        >
          <SwiperSlide className="slider-one">
            <div className="thought">
              <div className="export-profile">
                <img src={exportone} alt="" />
                <div>
                  <h5 className="slider-title">Jakob Kenter</h5>
                  <span>{t("span1")}</span>
                </div>
              </div>
              <p className="">
                Образовательная платформа №1 по качеству обучения. Вы получите
                знания, которые помогут вам освоить профессию мечты и изменить
                жизнь. Образовательная платформа №1 по качеству обучения. Вы
                получите знания, которые помогут вам освоить профессию мечты и
                изменить жизнь.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-one">
            <div className="thought">
              <div className="export-profile">
                <img src={exporttwo} alt="" />
                <div>
                  <h5>Jakob Kenter</h5>
                  <span>{t("span2")}</span>
                </div>
              </div>
              <p className="export-one">
                Образовательная платформа №1 по качеству обучения. Вы получите
                знания, которые помогут вам освоить профессию мечты и изменить
                жизнь. Образовательная платформа №1 по качеству обучения. Вы
                получите знания, которые помогут вам освоить профессию мечты и
                изменить жизнь.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-one">
            <div className="thought">
              <div className="export-profile">
                <img src={exportthree} alt="" />
                <div>
                  <h5>Jakob Kenter</h5>
                  <span>{t("span3")}</span>
                </div>
              </div>
              <p className="">
                Образовательная платформа №1 по качеству обучения. Вы получите
                знания, которые помогут вам освоить профессию мечты и изменить
                жизнь. Образовательная платформа №1 по качеству обучения. Вы
                получите знания, которые помогут вам освоить профессию мечты и
                изменить жизнь.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-one">
            <div className="thought">
              <div className="export-profile">
                <img src={exportfour} alt="" />
                <div>
                  <h5>Jakob Kenter</h5>
                  <span>{t("span4")}</span>
                </div>
              </div>
              <p className="">
                Образовательная платформа №1 по качеству обучения. Вы получите
                знания, которые помогут вам освоить профессию мечты и изменить
                жизнь. Образовательная платформа №1 по качеству обучения. Вы
                получите знания, которые помогут вам освоить профессию мечты и
                изменить жизнь.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-one">
            <div className="thought">
              <div className="export-profile">
                <img src={exportthree} alt="" />
                <div>
                  <h5>Jakob Kenter</h5>
                  <span>{t("span2")}</span>
                </div>
              </div>
              <p className="">
                Образовательная платформа №1 по качеству обучения. Вы получите
                знания, которые помогут вам освоить профессию мечты и изменить
                жизнь. Образовательная платформа №1 по качеству обучения. Вы
                получите знания, которые помогут вам освоить профессию мечты и
                изменить жизнь.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
