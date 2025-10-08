import "./LearningCard.css";
import Button from "../Button/Button";

export default function LearningCard({
  image,
  title,
  description,
  cardId,
}) {
  return (
    <div className="flex flex-col items-center text-center h-full">
      <div
        className="bg-gradient-to-br from-primary-800 to-primary-500 text-primary-100 rounded-xl shadow-md w-full h-80 flex flex-col justify-center relative"
        style={{ padding: "20px" }}
      >
        <img
          src={image}
          alt=""
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4 mx-auto absolute z-10 top-[-50px] left-1/2 transform -translate-x-1/2 three-d-img"
          loading="lazy"
        />
        <div className="mt-16 sm:mt-20 md:mt-16 z-20">
          <h3
            id={cardId}
            className="text-lg sm:text-xl md:text-xl font-bold mb-2 md:mb-4"
          >
            {title}
          </h3>
          <p className="text-xs sm:text-sm md:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
