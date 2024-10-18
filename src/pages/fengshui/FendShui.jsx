import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";

const FendShui = () => {
  const [birthYear, setBirthYear] = useState("");
  const [houseYear, setHouseYear] = useState("");

  //   const handleSubmit = () => {
  //      Điều hướng đến màn hình kết quả với các tham số
  //    const navigate = useNavigate();
  //     navigate(`/result?birthYear=${birthYear}&houseYear=${houseYear}`);
  //   };

  return (
    <BrowserRouter>
      <Header />
      <div className="mt-8 flex items-center justify-center">
        <div className="relative h-[680px] w-[600px]">
          <div className="absolute left-[8px] top-0 h-16 w-[400px] font-['Inter'] text-4xl font-semibold text-black">
            Xem tuổi làm nhà
          </div>
          <div className="absolute left-0 top-[60px] h-[200px] w-[600px] font-['Inter'] text-[24px] font-normal text-black">
            Theo khoa học phong thủy, để việc thi công được thuận buồm xuôi gió
            thì cần xem tuổi của chủ nhà phù hợp với năm làm nhà hay không. Nên
            tránh phạm vào 3 năm: Kim Lâu, Hoang Ốc, Tam Tai. Như vậy, cả đời
            một con người chỉ còn lại khoảng 17 năm để có thể tiến hành động thổ
            hay làm các việc đại sự.
          </div>
          <div className="absolute left-[100px] top-[600px]">
            <button
              //   onClick={handleSubmit}
              className="h-12 w-[300px] rounded-[10px] bg-[#6c95fc] text-xl font-normal text-black hover:bg-[#5a7de0] focus:outline-none focus:ring-2 focus:ring-[#5a7de0] focus:ring-opacity-50"
            >
              Xem ngay
            </button>
          </div>
          <div className="absolute left-0 top-[300px] h-12 w-[250px] font-['Inter'] text-[24px] font-semibold text-black">
            Nhập năm sinh
          </div>
          <div className="absolute left-0 top-[450px] h-12 w-[250px] font-['Inter'] text-[24px] font-semibold text-black">
            Nhập năm làm nhà
          </div>
          <div className="absolute left-0 top-[350px] h-[70px] w-[500px]">
            <input
              type="text"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="h-full w-full border border-black bg-white px-4 py-2 text-[24px] font-normal text-black/60"
              placeholder="Nhập năm sinh"
            />
          </div>
          <div className="absolute left-0 top-[490px] h-[70px] w-[500px]">
            <input
              type="text"
              value={houseYear}
              onChange={(e) => setHouseYear(e.target.value)}
              className="h-full w-full border border-black bg-white px-4 py-2 text-[24px] font-normal text-black/60"
              placeholder="Nhập năm làm nhà"
            />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default FendShui;
