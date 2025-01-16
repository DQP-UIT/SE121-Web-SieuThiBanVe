import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  checkTamTai,
  checkKimLau,
  checkHoangOc,
  chuyenDoiNamAmLich,
  getCungMenh,
  findSuitableAges,
  getHuongNha,
} from "./FengShuiAlgorithm";

const FengShuiResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const birthYear = parseInt(params.get("birthYear"), 10);
  const houseYear = parseInt(params.get("houseYear"), 10);

  const lunarbirthYear = chuyenDoiNamAmLich(houseYear);
  const lunarAge = chuyenDoiNamAmLich(birthYear);
  const destiny = getCungMenh(birthYear);
  const tamTaiResult = checkTamTai(birthYear, houseYear);
  const kimLauResult = checkKimLau(birthYear, houseYear);
  const hoangOcResult = checkHoangOc(birthYear, houseYear);
  const huongNhaNam = getHuongNha(birthYear, "Nam");
  const huongNhaNu = getHuongNha(birthYear, "Nu");

  const suitableAges = findSuitableAges(birthYear);

  const getResultText = (result) => {
    if (result.includes("Phạm") || result.includes("Xấu")) {
      return "text-[#AA0104]";
    }
    return "text-[#1e5300]";
  };

  const getResultBG = (result) => {
    if (result.includes("Phạm") || result.includes("Xấu")) {
      return "bg-[#FFC6C7]";
    }
    return "bg-[#cafbbf]";
  };

  const handleNavigate = () => {
    navigate("/fengshui");
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="relative mb-8 mt-8 h-auto w-[600px] rounded-lg bg-white p-4 shadow-lg">
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
              Tuổi khi làm nhà
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {houseYear - birthYear + 1}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Tuổi âm lịch
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {lunarAge}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Cung mệnh
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {destiny}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Năm xây nhà
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {houseYear}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-black/50">
              Năm âm lịch
            </div>
            <div className="font-['Inter'] text-lg font-medium text-black">
              {lunarbirthYear}
            </div>
          </div>
          <div className={`mb-8 rounded-lg ${getResultBG(tamTaiResult)} p-4`}>
            <div
              className={`mb-2 font-['Inter'] text-lg font-medium ${getResultText(tamTaiResult)}`}
            >
              Tam tai
            </div>
            <div
              className={`font-['Inter'] text-lg font-normal ${getResultText(tamTaiResult)}`}
            >
              {tamTaiResult}
            </div>
          </div>
          <div className={`mb-8 rounded-lg ${getResultBG(kimLauResult)} p-4`}>
            <div
              className={`mb-2 font-['Inter'] text-lg font-medium ${getResultText(kimLauResult)}`}
            >
              Kim Lâu
            </div>
            <div
              className={`font-['Inter'] text-lg font-normal ${getResultText(kimLauResult)}`}
            >
              {kimLauResult}
            </div>
          </div>
          <div className={`mb-8 rounded-lg ${getResultBG(hoangOcResult)} p-4`}>
            <div
              className={`mb-2 font-['Inter'] text-lg font-medium ${getResultText(hoangOcResult)}`}
            >
              Hoang ốc
            </div>
            <div
              className={`font-['Inter'] text-lg font-normal ${getResultText(hoangOcResult)}`}
            >
              {hoangOcResult}
            </div>
          </div>
          <div className="mb-8 rounded-lg bg-blue-100 p-4">
            <div className="mb-2 font-['Inter'] text-lg font-medium text-blue-900">
              Hướng mặt tiền hợp mạng của gia chủ
            </div>
            <div className="mb-2 font-['Inter'] text-lg font-normal text-blue-900">
              Nam: {huongNhaNam}
            </div>
            <div className="font-['Inter'] text-lg font-normal text-blue-900">
              Nữ: {huongNhaNu}
            </div>
          </div>
          <div className="mb-8 rounded-lg bg-blue-100 p-4">
            <div className="mb-2 font-['Inter'] text-lg font-medium text-blue-900">
              Các tuổi hợp mạng để mượn tuổi xây nhà
            </div>
            <div className="font-['Inter'] text-lg font-normal text-blue-900">
              {suitableAges.join(", ")}
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
