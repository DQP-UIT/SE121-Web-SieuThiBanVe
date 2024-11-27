import React, { useState, useEffect } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

const Carousel = ({ imglist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [processedImage, setProcessedImage] = useState(null);

  useEffect(() => {
    const processPanorama = async (src) => {
      const img = new Image();
      img.src = src;
      await img.decode();

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const newWidth = img.width;
      const newHeight = img.width / 2;

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.drawImage(img, 0, 0, newWidth, newHeight);

      setProcessedImage(canvas.toDataURL());
    };

    if (imglist[currentIndex].type === "panorama") {
      processPanorama(imglist[currentIndex].src);
    } else {
      setProcessedImage(null);
    }
  }, [currentIndex, imglist]);

  const handleIndicatorClick = (index) => {
    setProcessedImage(null);
    setCurrentIndex(index);
    if (index >= startIndex + 6) {
      setStartIndex(index - 5);
    } else if (index < startIndex) {
      setStartIndex(index);
    }
  };

  const visibleThumbnails = imglist.slice(startIndex, startIndex + 6);

  return (
    <div
      id="indicators-carousel"
      className="relative h-144 min-h-fit w-160 min-w-fit"
      data-carousel="static"
    >
      {/* Carousel wrapper */}
      <div className="relative h-128 w-128 overflow-hidden rounded-lg shadow-lg">
        {imglist.map((img, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${index === currentIndex ? "block" : "hidden"}`}
            data-carousel-item={index === currentIndex ? "active" : ""}
          >
            {img.type === "2d" ? (
              <img
                src={img.src}
                className="absolute block h-full w-full object-fill"
                alt={`Slide ${index + 1}`}
              />
            ) : processedImage ? (
              <ReactPhotoSphereViewer
                src={processedImage}
                width="100%"
                height="100vh"
                navbar={false}
                fisheye={true}
              />
            ) : (
              <div className="absolute flex h-full w-full items-center justify-center bg-gray-200">
                <p className="text-red-500">Processing panorama image...</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Thumbnail indicators */}
      <div className="mt-4 flex justify-start space-x-2">
        {visibleThumbnails.map((img, index) => {
          const actualIndex = startIndex + index;
          return (
            <div
              key={actualIndex}
              className={`cursor-pointer border p-1 ${actualIndex === currentIndex ? "border-blue-500" : "border-gray-300"} rounded-lg`}
              onClick={() => handleIndicatorClick(actualIndex)}
            >
              <img
                src={img.src}
                className="h-16 w-16 rounded-lg object-cover"
                alt={`Thumbnail ${actualIndex + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;