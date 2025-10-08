import React from "react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();

  return (
    <div className="py-16 bg-primary-50">
      <section>
        <div className="max-w-8xl mx-auto  px-4 sm:px-6 lg:px-8  text-center flex flex-col justify-center items-center">
          <h2
            className="my-8"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "2rem",
            }}
          >
            {t("About.vision")}
          </h2>
          <p className="text-neutral-700 leading-10 text-xl text-center w-[70%]">
            {t("About.ourVisionContent")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Vision;
