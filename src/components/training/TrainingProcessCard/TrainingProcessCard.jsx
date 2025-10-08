import React from "react";

export default function TrainingProcessCard({
  icon,
  title,
  description,
  note,
}) {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-br from-primary-800 to-primary-500 text-primary-50 rounded-2xl shadow-lg p-6 sm:p-8 h-full transition-transform hover:scale-105 duration-300 ease-in-out">
      {icon && (
        <img
          src={icon}
          alt={title}
          className="h-20 w-20 md:h-24 md:w-24 mb-6"
          loading="lazy"
        />
      )}

      {/* Content block with fixed height */}
      <div className="flex flex-col flex-grow justify-start w-full max-w-md">
        <h4 className="text-xl md:text-2xl font-semibold mb-3 leading-snug min-h-[3rem]">
          {title}
        </h4>

        <p className="text-sm md:text-base text-primary-50/90 leading-relaxed min-h-[6rem]">
          {description}
        </p>
      </div>

      {note && (
        <p className="text-xs sm:text-sm text-yellow-300 italic mt-4 leading-tight">
          {note}
        </p>
      )}
    </div>
  );
}
