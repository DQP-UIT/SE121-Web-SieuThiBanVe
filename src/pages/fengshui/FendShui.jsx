import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Swal from "sweetalert2";
const FengShui = () => {
  const [birthYear, setBirthYear] = useState("");
  const [houseYear, setHouseYear] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    if(birthYear <= 1950 || houseYear <= 2023 ){
      Swal.fire({
        icon: 'error',
        title: 'Kiểm tra lại năm nhập vào',
        text: 'Năm sinh phải lớn hơn 1950 và năm làm nhà phải lớn hơn 2023',
      });
      return;
    }
    navigate(`/fengshuiresult?birthYear=${birthYear}&houseYear=${houseYear}`);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <div className="relative mt-8 flex items-center justify-center h-[680px] w-[600px]">
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
              onClick={handleSubmit}
              className="h-12 w-[300px] rounded-[10px] bg-[#6c95fc] text-xl font-semibold text-white hover:bg-[#5a7de0] focus:outline-none focus:ring-2 focus:ring-[#5a7de0] focus:ring-opacity-50"
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
              type="number"
              min="1950"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
              className="h-full w-full border border-black bg-white px-4 py-2 text-[24px] font-normal text-black/60"
              placeholder="Nhập năm sinh"
            />
          </div>
          <div className="absolute left-0 top-[490px] h-[70px] w-[500px]">
            <input
              type="number"
              min="2024"
              value={houseYear}
              onChange={(e) => setHouseYear(e.target.value)}
              className="h-full w-full border border-black bg-white px-4 py-2 text-[24px] font-normal text-black/60"
              placeholder="Nhập năm làm nhà"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FengShui;
