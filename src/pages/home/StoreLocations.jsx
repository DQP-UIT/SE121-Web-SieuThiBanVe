import React from "react";

const StoreLocations = () => {
  return (
    <div className="mt-8 select-none">
      <div className="relative z-10 mx-auto mt-2 h-auto w-full max-w-6xl rounded-lg bg-[#bdd9fa] p-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col items-center flex-1 min-w-[20%] m-2">
            <span className="font-inter text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-black">
              100
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-10 md:h-10 md:w-12 bg-[url('/src/assets/bi_house-heart-fill.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-lg md:text-xl lg:text-2xl font-normal leading-tight text-black">
                Tỉnh thành
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-400 mx-2"></div>
          <div className="flex flex-col items-center flex-1 min-w-[20%] m-2">
            <span className="font-inter text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-black">
              50
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-10 md:h-10 md:w-12 bg-[url('/src/assets/basil_location-solid.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-lg md:text-xl lg:text-2xl font-normal leading-tight text-black">
                Chi nhánh
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-400 mx-2"></div>
          <div className="flex flex-col items-center flex-1 min-w-[20%] m-2">
            <span className="font-inter text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-black">
              1000+
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-10 md:h-10 md:w-12 bg-[url('/src/assets/streamline_paint-palette-solid.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-lg md:text-xl lg:text-2xl font-normal leading-tight text-black">
                Bản vẽ
              </span>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-400 mx-2"></div>
          <div className="flex flex-col items-center flex-1 min-w-[20%] m-2">
            <span className="font-inter text-center text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-black">
              1000+
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-8 w-10 md:h-10 md:w-12 bg-[url('/src/assets/ph_building-fill.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-lg md:text-xl lg:text-2xl font-normal leading-tight text-black">
                Dự án
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;