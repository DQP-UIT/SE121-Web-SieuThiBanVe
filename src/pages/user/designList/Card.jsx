import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ banve }) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("here");
  }, []);

  const handleOnClick = () => {};

  return (
    <div
      className="m-4 h-[50vh] min-h-fit max-h-28 w-[18vw] min-w-56 cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-transform duration-200 hover:scale-105"
      onClick={handleOnClick}
    >
      <img
        className="h-[200px] w-full object-cover"
        src={banve.img}
        alt={banve.name}
      />

      <div className="p-4">
        <p className="mb-2 text-[0.6vw] text-green-500">
          Được thiết kế bởi designer
        </p>

        <div className="mb-1 text-[1vw] font-bold">{banve.name}</div>

        <div className="mb-1 text-[0.65vw] text-gray-600">
          Số tầng {banve.tang} | Số phòng ngủ {banve.phongngu} | Diện tích{" "}
          {banve.dientich} m²
        </div>

        <p className="text-[1.5vw] text-blue-500">
          {banve.price.toLocaleString()} VND
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
