import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkTamTai, checkKimLau, checkHoangOc } from "./FengShuiAlgorithm";
import Header from "../../components/header/Header";

const FengShuiResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const birthYear = parseInt(params.get("birthYear"), 10);
  const houseYear = parseInt(params.get("houseYear"), 10);

  const tamTaiResult = checkTamTai(birthYear, houseYear);
  const kimLauResult = checkKimLau(birthYear, houseYear);
  const hoangOcResult = checkHoangOc(birthYear, houseYear);

  const handleNavigate = () => {
    navigate("/fengshui");
  };

  return (
    <div>
      <Header />
      <div className="mt-8 flex items-center justify-center">
        <div className="relative h-auto w-[600px] rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-4 text-center font-['Inter'] text-3xl font-semibold text-black">
            Xem tuổi làm nhà
          </div>
          <div className="mb-8 text-center font-['Inter'] text-xl font-normal text-black">
            Kết quả xem tuổi làm nhà
          </div>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Năm sinh
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {birthYear}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Năm xây nhà
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {houseYear}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Tuổi khi làm nhà
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {houseYear - birthYear + 1}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Tuổi âm lịch
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {/* Thêm logic để tính năm âm lịch */}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Năm âm lịch
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {/* Thêm logic để tính năm âm lịch */}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Cung mệnh
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {/* Thêm logic để tính cung mệnh */}
            </div>
          </div>
          <div className="mb-8 rounded-lg bg-[#cafbbf] p-4">
            <div className="mb-2 font-['Inter'] text-lg font-medium text-[#1e5300]">
              Tam tai
            </div>
            <div className="font-['Inter'] text-lg font-normal text-[#1e5300]">
              {tamTaiResult}
            </div>
          </div>
          <div className="mb-8 rounded-lg bg-[#cafbbf] p-4">
            <div className="mb-2 font-['Inter'] text-lg font-medium text-[#1e5300]">
              Kim Lâu
            </div>
            <div className="font-['Inter'] text-lg font-normal text-[#1e5300]">
              {kimLauResult}
            </div>
          </div>
          <div className="rounded-lg bg-[#cafbbf] p-4">
            <div className="mb-2 font-['Inter'] text-lg font-medium text-[#1e5300]">
              Hoang ốc
            </div>
            <div className="font-['Inter'] text-lg font-normal text-[#1e5300]">
              {hoangOcResult}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleNavigate}
              className="h-12 w-[200px] rounded-[10px] bg-[#6c95fc] text-xl font-normal text-white hover:bg-[#5a7de0] focus:outline-none focus:ring-2 focus:ring-[#5a7de0] focus:ring-opacity-50"
            >
              Xem lại
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FengShuiResult;
