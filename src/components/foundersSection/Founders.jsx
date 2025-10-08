import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Founders.css";

import sherinImg from "/images/hero/people1.webp";
import husseinImg from "/images/HusseinAfifi.webp";

const Founders = () => {
  const { t, i18n } = useTranslation();
  const founders = [
    {
      name: t("founders.founder1.name"),
      bio: t("founders.founder1.bio"),
      img: husseinImg,
    },
    {
      name: t("founders.founder2.name"),
      bio: t("founders.founder2.bio"),
      img: sherinImg,
    },
  ];
  return (
    <div className="founders-section w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 py-20 text-pure-white">
      <div
        className="w-full flex flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-primary-500 to-primary-400 p-10 space-y-8"
        role="region"
        aria-labelledby="founders-heading"
      >
        <SectionHeader
          title={t("founders.title")}
          lineColor="#32d8cc"
          titleId="founders-heading"
        />
        <Swiper
          key={i18n.language}
          modules={[Pagination, Autoplay, Navigation]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          className="w-full relative z-10"
          aria-label={t("founders.title")}
        >
          {founders.map((founder, idx) => (
            <SwiperSlide
              key={idx}
              role="group"
              aria-roledescription="slide"
              aria-label={`${t("founders.slideLabel")} ${idx + 1} ${t(
                "founders.of"
              )} ${founders.length}`}
            >
              <div className="px-8 py-10 md:px-12 md:py-12 h-auto md:h-[500px] flex flex-col md:flex-row items-center gap-8">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
                />
                <div className="flex flex-col text-center md:text-left">
                  <h6 className="text-3xl md:!text-4xl !font-extrabold mb-4">
                    {founder.name}
                  </h6>
                  <p className="text-base md:text-lg font-normal leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Founders;
