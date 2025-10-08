import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionHeader from "../SectionHeader/SectionHeader";

const OurPartners = () => {
  const { t } = useTranslation();
  const partners = [
    { src: "./images/aimco.webp", alt: "Aimco" },
    { src: "./images/aldaka.webp", alt: "Aldaka" },
    { src: "./images/anderen.webp", alt: "Anderen" },
    { src: "./images/arkoda.webp", alt: "Arkoda" },
    { src: "./images/mba_trading.webp", alt: "MBA Trading" },
    { src: "./images/osus.webp", alt: "Osus" },
    { src: "./images/rec.webp", alt: "REC" },
    { src: "./images/rustin.webp", alt: "Rustin" },
    { src: "./images/saudi_mix.webp", alt: "Saudi Mix" },
  ];
  return (
    <>
      <div
        className="w-full flex flex-col items-center justify-center px-4 md:px-12 lg:px-24 py-8 bg-cover bg-center relative mb-20"
        style={{ backgroundImage: "url('/images/map.webp')" }}
        role="region"
        aria-labelledby="partners-heading"
      >
        <SectionHeader
          id="partners-heading"
          title={t("partners.title")}
          lineColor="#4A8B8B"
        />

        <div className="section-container flex flex-col items-center justify-center mt-4 mb-8">
          <p
            className="section-paragraph text-center w-[70%] text-[#888cb7] 
        text-[1.125rem] leading-[1.22rem]
        font-family-[Gilroy-Regular] font-[400]"
          >
            {t("partners.description")}
          </p>
        </div>

        <div className="w-[80%] px-4 md:px-12 lg:px-24 py-8 flex items-center justify-center">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={0}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 32 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="mb-12"
            aria-label="Our Partners Carousel"
          >
            {partners.map((partner, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center mb-0"
                role="group"
                aria-label={`${index + 1} of ${partners.length}`}
              >
                <div className="flex items-center justify-center h-[7rem] w-full">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-12 mx-auto"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
