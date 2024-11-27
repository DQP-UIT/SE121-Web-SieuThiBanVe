import React, { useState } from "react";

const Carousel = ({ imglist }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        if (index >= startIndex + 6) {
            setStartIndex(index - 5);
        } else if (index < startIndex) {
            setStartIndex(index);
        }
    };

    const visibleThumbnails = imglist.slice(startIndex, startIndex + 6);

    return (
        <div id="indicators-carousel" className="relative min-w-fit w-160 min-h-fit h-144" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-128 overflow-hidden rounded-lg w-128 shadow-lg">
                {imglist.map((img, index) => (
                    <div
                        key={index}
                        className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
                        data-carousel-item={index === currentIndex ? 'active' : ''}
                    >
                        <img
                            src={img}
                            className="absolute block w-full h-full object-fill"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {/* Thumbnail indicators */}
            <div className="flex justify-start mt-4 space-x-2">
                {visibleThumbnails.map((img, index) => {
                    const actualIndex = startIndex + index;
                    return (
                        <div
                            key={actualIndex}
                            className={`cursor-pointer p-1 border ${actualIndex === currentIndex ? 'border-blue-500' : 'border-gray-300'} rounded-lg`}
                            onClick={() => handleIndicatorClick(actualIndex)}
                        >
                            <img
                                src={img}
                                className="w-16 h-16 object-cover rounded-lg"
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