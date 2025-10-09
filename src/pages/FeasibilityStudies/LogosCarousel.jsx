import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "../GrantOpportunities/GrantOpportunities.css";

export default function LogosCarousel({ images = [] }) {
  const swiperRef = useRef(null);
  const { i18n } = useTranslation();

  const lang = i18n && i18n.language;

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay)
      swiperRef.current.autoplay.stop();
  };
  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay)
      swiperRef.current.autoplay.start();
  };

  // When the site language changes, force Swiper to update and restart autoplay.
  useEffect(() => {
    if (!swiperRef.current) return;
    // Delay a tick to allow layout updates (dir/class changes) to take effect
    const t = setTimeout(() => {
      try {
        if (
          swiperRef.current &&
          typeof swiperRef.current.update === "function"
        ) {
          swiperRef.current.update();
        }
        if (swiperRef.current && swiperRef.current.autoplay) {
          // restart autoplay in case it was paused
          swiperRef.current.autoplay.start();
        }
      } catch {
        // ignore
      }
    }, 50);

    return () => clearTimeout(t);
  }, [lang]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="logos-swiper-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        key={lang}
        dir={lang && lang.startsWith("ar") ? "rtl" : "ltr"}
        modules={[Autoplay, FreeMode]}
        onSwiper={(sw) => (swiperRef.current = sw)}
        spaceBetween={160}
        slidesPerView={"auto"}
        freeMode={true}
        freeModeMomentum={false}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 3 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        }}
        navigation={false}
        pagination={false}
        className="logos-swiper"
      >
        {images.map((src, i) => {
          const isSubaie = src.includes("Subaie-charity.webp");
          return (
            <SwiperSlide key={i} className="logo-slide">
              <div className={`logo-item ${isSubaie ? "subaie" : ""}`}>
                <img src={src} alt={`partner-${i}`} />
                {i === 7 && (
                  <div className="partner-overlay" aria-hidden="true" />
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
