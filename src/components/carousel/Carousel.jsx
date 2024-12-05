import React, { useState } from "react";

const Carousel = ({ imglist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  // Get first 3 images only
  const visibleImages = imglist.slice(0, 3);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
    if (index >= startIndex + 3) {
      setStartIndex(index - 2);
    } else if (index < startIndex) {
      setStartIndex(index);
    }
  };

  return (
    <div
      id="indicators-carousel"
      className="relative h-144 min-h-fit w-160 min-w-fit"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-128 w-128 overflow-hidden rounded-lg shadow-lg">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <img
              src={img.src}
              className="absolute block h-full w-full object-fill"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Thumbnail indicators */}
      <div className="mt-4 flex justify-start space-x-2">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer border p-1 ${
              index === currentIndex ? "border-blue-500" : "border-gray-300"
            } rounded-lg`}
            onClick={() => handleIndicatorClick(index)}
          >
            <img
              src={img.src}
              className="h-16 w-16 rounded-lg object-cover"
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
