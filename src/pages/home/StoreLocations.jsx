import React from "react";

const StoreLocations = () => {
  return (
    <div className="mt-8">
      <div className="relative z-10 mx-auto mt-2 h-auto w-full max-w-6xl rounded-lg bg-[#bdd9fa] p-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <span className="font-inter text-center text-4xl font-medium leading-[48px] text-black">
              100
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-10 w-12 bg-[url('/src/assets/bi_house-heart-fill.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-3xl font-normal leading-10 text-black">
                Tỉnh thành
              </span>
            </div>
          </div>
          <div className="mx-4 h-16 w-px bg-gray-400"></div>
          <div className="flex flex-col items-center">
            <span className="font-inter text-center text-4xl font-medium leading-[48px] text-black">
              50
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-10 w-12 bg-[url('/src/assets/basil_location-solid.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-3xl font-normal leading-10 text-black">
                Chi nhánh
              </span>
            </div>
          </div>
          <div className="mx-4 h-16 w-px bg-gray-400"></div>
          <div className="flex flex-col items-center">
            <span className="font-inter text-center text-4xl font-medium leading-[48px] text-black">
              1000+
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-10 w-12 bg-[url('/src/assets/streamline_paint-palette-solid.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-3xl font-normal leading-10 text-black">
                Bản vẽ
              </span>
            </div>
          </div>
          <div className="mx-4 h-16 w-px bg-gray-400"></div>
          <div className="flex flex-col items-center">
            <span className="font-inter text-center text-4xl font-medium leading-[48px] text-black">
              1000+
            </span>
            <div className="mt-2 flex items-center">
              <div className="h-10 w-12 bg-[url('/src/assets/ph_building-fill.svg')] bg-cover" />
              <span className="font-inter ml-4 text-center text-3xl font-normal leading-10 text-black">
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
