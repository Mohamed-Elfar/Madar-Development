import React from "react";

const ProfessionalsGrid = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto px-4 md:px-8 h-[600px] md:h-[700px] lg:h-[800px] py-16 md:py-24 overflow-hidden">
      {/* Connection Lines - Optional SVG */}
      <svg
        className="absolute inset-0 z-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <line
          x1="15%"
          y1="30%"
          x2="25%"
          y2="50%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="25%"
          y1="50%"
          x2="45%"
          y2="30%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="45%"
          y1="30%"
          x2="75%"
          y2="50%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="75%"
          y1="50%"
          x2="90%"
          y2="30%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="25%"
          y1="50%"
          x2="47%"
          y2="75%"
          stroke="white"
          strokeWidth="1"
        />
        <line
          x1="45%"
          y1="76%"
          x2="75%"
          y2="50%"
          stroke="white"
          strokeWidth="1"
        />
      </svg>

      {/* Squares and People */}
      <div className="relative z-10 grid grid-cols-5 grid-rows-3 gap-4 w-full max-w-screen-xl">
        {/* Blue Squares */}
        <div className="bg-primary-600 rounded-xl w-full h-40 col-start-1 row-start-2"></div>
        <div className="bg-primary-600 rounded-xl w-full h-40 col-start-3 row-start-1"></div>
        <div className="bg-primary-600 rounded-xl w-full h-40 col-start-3 row-start-3"></div>
        <div className="bg-primary-600 rounded-xl w-full h-40 col-start-5 row-start-2"></div>

        {/* Person 1 (Top Left) */}
        <div className="absolute top-[10%] left-[2%] md:left-[5%] bg-pastel-blue rounded-xl p-1.5">
          <img
            src="/images/hero/people1.webp"
            alt="Young man in white t-shirt"
            className="w-16 h-20 md:w-20 md:h-28 object-cover rounded"
            loading="lazy"
          />
        </div>

        {/* Person 2 (Center Left Woman in Hijab) */}
        <div className="absolute top-[40%] left-[10%] md:left-[15%] bg-pastel-green rounded-xl p-1.5">
          <img
            src="/images/hero/people2.webp"
            alt="Woman in hijab, green blazer"
            className="w-20 h-28 md:w-24 md:h-36 object-cover rounded"
            loading="lazy"
          />
        </div>

        {/* Person 3 (Center Right Man in Suit) */}
        <div className="absolute top-[35%] right-[15%] md:right-[20%] bg-pastel-blue rounded-xl p-1.5">
          <img
            src="/images/hero/people3.webp"
            alt="Man in suit"
            className="w-24 h-32 md:w-28 md:h-40 object-cover rounded"
            loading="lazy"
          />
        </div>

        {/* Person 4 (Top Right Woman in Hijab with Laptop) */}
        <div className="absolute top-[10%] right-[2%] md:right-[5%] bg-pastel-green rounded-xl p-1.5">
          <img
            src="/images/hero/people4.webp"
            alt="Woman in hijab holding a laptop"
            className="w-16 h-20 md:w-20 md:h-28 object-cover rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsGrid;
