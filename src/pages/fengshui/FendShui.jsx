import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Swal from "sweetalert2";

const FengShui = () => {
  const [birthYear, setBirthYear] = useState("");
  const [houseYear, setHouseYear] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (birthYear <= 1950 || houseYear <= 2023) {
      Swal.fire({
        icon: "error",
        title: "Kiểm tra lại năm nhập vào",
        text: "Năm sinh phải lớn hơn 1950 và năm làm nhà phải lớn hơn 2023",
      });
      return;
    }
    navigate(`/fengshuiresult?birthYear=${birthYear}&houseYear=${houseYear}`);
  };

  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="relative mt-8 flex w-full max-w-2xl flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md">
          <h1 className="mb-4 text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
            Xem tuổi làm nhà
          </h1>
          <p className="mb-8 text-center text-base text-black md:text-lg lg:text-xl">
            Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió
            thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không. Nên
            tránh phạm vào 3 năm: Kim Lâu, Hoang Ốc, Tam Tai. Như vậy, cả đời
            một con người chỉ còn lại khoảng 17 năm để có thể tiến hành động thổ
            hay làm các việc đại sự.
          </p>
          <div className="mb-4 w-full">
            <label className="mb-2 block text-lg font-semibold text-black md:text-xl lg:text-2xl">
              Nhập năm sinh
            </label>
            <input
              type="number"
              min="1950"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="w-full rounded border border-black bg-white px-4 py-2 text-base text-black/60 md:text-lg lg:text-xl"
              placeholder="Nhập năm sinh"
            />
          </div>
          <div className="mb-8 w-full">
            <label className="mb-2 block text-lg font-semibold text-black md:text-xl lg:text-2xl">
              Nhập năm làm nhà
            </label>
            <input
              type="number"
              min="2024"
              value={houseYear}
              onChange={(e) => setHouseYear(e.target.value)}
              className="w-full rounded border border-black bg-white px-4 py-2 text-base text-black/60 md:text-lg lg:text-xl"
              placeholder="Nhập năm làm nhà"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="h-12 w-full rounded bg-blue-600 text-lg font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 md:text-xl lg:text-2xl"
          >
            Xem ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default FengShui;
