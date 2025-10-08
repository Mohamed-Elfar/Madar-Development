import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import SectionHeader from "../SectionHeader/SectionHeader";
const Services = () => {
  const { t } = useTranslation();
  const services = [
    { title: t("ourServices.service1"), image: "./images/embeded.svg" },
    { title: t("ourServices.service2"), image: "./images/marketing.svg" },
    { title: t("ourServices.service3"), image: "./images/embeded.svg" },
    { title: t("ourServices.service4"), image: "./images/cloud.svg" },
    { title: t("ourServices.service5"), image: "./images/mobile.svg" },
    { title: t("ourServices.service6"), image: "./images/testing.svg" },
    { title: t("ourServices.service7"), image: "./images/web.svg" },
    { title: t("ourServices.service8"), image: "./images/embeded.svg" },
    { title: t("ourServices.service9"), image: "./images/embeded.svg" },
    { title: t("ourServices.service10"), image: "./images/cloud.svg" },
    { title: t("ourServices.service11"), image: "./images/mobile.svg" },
    { title: t("ourServices.service12"), image: "./images/testing.svg" },
    { title: t("ourServices.service13"), image: "./images/web.svg" },
  ];
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 py-20">
        <div
          className=" w-full min-h-[60vh] 
       bg-primary-300 rounded-tr-3xl rounded-bl-3xl p-8
       
       "
        >
          <SectionHeader title={t("ourServices.title")} lineColor="#32d8cc" />
          <div className="w-[80%]  flex items-center justify-center  mx-auto gap-2 mt-[60px]">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={10}
              slidesPerView={3}
              loop={true}
              pagination={{ clickable: true }}
              className="mySwiper"
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {services.map((service, i) => (
                <SwiperSlide key={i}>
                  <div className="service-card rounded-lg bg-white  text-center mb-8 flex flex-col items-center justify-center min-h-[260px] h-full">
                    <img
                      src={service.image}
                      alt=""
                      className="mb-4 w-[50%] object-contain"
                      loading="lazy"
                    />
                    <h6 className="">{service.title}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
