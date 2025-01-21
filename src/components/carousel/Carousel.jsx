import React, { useState, useEffect } from "react";

const Carousel = ({ imglist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    console.log("imglist:", imglist);
  }, [imglist]);

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
      className="relative w-full"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            <img
              src={img}
              className="block w-full h-64 md:h-96 lg:h-128 object-fill"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Thumbnail indicators */}
      <div className="mt-4 flex justify-center space-x-4">
        {visibleImages.map((img, index) => (
          <div
            key={index}
            className={`cursor-pointer border p-1 ${
              index === currentIndex ? "border-blue-500" : "border-gray-300"
            } rounded-lg`}
            onClick={() => handleIndicatorClick(index)}
          >
            <img
              src={img}
              className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-lg object-cover"
              alt={`Thumbnail ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;