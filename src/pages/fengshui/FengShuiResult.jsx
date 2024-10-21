import React from "react";
import { BrowserRouter } from "react-router-dom";
import { checkTamTai, checkKimLau, checkHoangOc } from "./FengShuiAlgorithm";
import Header from "../../components/header/Header";

const FengShuiResult = () => {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const birthYear = parseInt(params.get("birthYear"), 10);
  // const houseYear = parseInt(params.get("houseYear"), 10);

  const tamTaiResult = checkTamTai(2004, 2034);
  const kimLauResult = checkKimLau(2004, 2034);
  const hoangOcResult = checkHoangOc(2004, 2034);

  return (
    <BrowserRouter>
      <Header />
      <div className="relative h-[1140px] w-[858px]">
        <div className="absolute left-0 top-0 h-20 w-[417px] font-['Inter'] text-5xl font-semibold text-black">
          Xem tuổi làm nhà
        </div>
        <div className="absolute left-[2px] top-[80px] h-[67px] w-[715px] font-['Inter'] text-[32px] font-normal text-black">
          Kết quả xem tuổi làm nhà
        </div>
        <div className="absolute left-[2px] top-[1076px] h-16 w-[856px] rounded-[10px]">
          <div className="absolute left-0 top-0 h-16 w-[856px] rounded-[10px] bg-[#6c95fc]" />
          <div className="absolute left-[56.65px] top-0 h-16 w-[744.80px] text-center font-['Inter'] text-2xl font-normal text-black">
            Xem ngay
          </div>
        </div>
        <div className="absolute left-[2px] top-[147px] h-14 w-[316px] font-['Inter'] text-[32px] font-normal text-black/50">
          Năm sinh
        </div>
        <div className="absolute left-0 top-[253px] h-14 w-[316px] font-['Inter'] text-[32px] font-normal text-black/50">
          Năm xây nhà
        </div>
        <div className="absolute left-[2px] top-[365px] h-14 w-[316px] font-['Inter'] text-[32px] font-normal text-black/50">
          Tuổi khi làm nhà
        </div>
        <div className="absolute left-[512px] top-[144px] h-14 w-[276px] font-['Inter'] text-[32px] font-normal text-black/50">
          Tuổi âm lịch
        </div>
        <div className="absolute left-[512px] top-[256px] h-14 w-[276px] font-['Inter'] text-[32px] font-normal text-black/50">
          Năm âm lịch
        </div>
        <div className="absolute left-[512px] top-[362px] h-14 w-[276px] font-['Inter'] text-[32px] font-normal text-black/50">
          Cung mệnh
        </div>
        <div className="absolute left-0 top-[190px] h-[53px] w-[265px] font-['Inter'] text-[32px] font-medium text-black">
          {birthYear}
        </div>
        <div className="absolute left-[512px] top-[190px] h-[53px] w-[276px] font-['Inter'] text-[32px] font-medium text-black">
          {birthYear}
        </div>
        <div className="absolute left-[512px] top-[300px] h-[53px] w-[276px] font-['Inter'] text-[32px] font-medium text-black">
          {/* Thêm logic để tính năm âm lịch */}
        </div>
        <div className="absolute left-[512px] top-[393px] h-[53px] w-[346px] font-['Inter'] text-[32px] font-medium text-black">
          {/* Thêm logic để tính cung mệnh */}
        </div>
        <div className="absolute left-[2px] top-[300px] h-[53px] w-[265px] font-['Inter'] text-[32px] font-medium text-black">
          {houseYear}
        </div>
        <div className="absolute left-[2px] top-[396px] h-[53px] w-[265px] font-['Inter'] text-[32px] font-medium text-black">
          {houseYear - birthYear + 1}
        </div>
        <div className="absolute left-[2px] top-[516px] h-[105px] w-[856px]">
          <div className="absolute left-0 top-0 h-[105px] w-[856px] rounded-[5px] bg-[#cafbbf]" />
          <div className="absolute left-[14.93px] top-0 h-[35px] w-[162.99px] font-['Inter'] text-[28px] font-medium text-[#1e5300]">
            Tam tai
          </div>
          <div className="absolute left-[14.93px] top-[53px] h-[31px] w-[751.49px] font-['Inter'] text-[32px] font-normal text-[#1e5300]">
            {tamTaiResult}
          </div>
        </div>
        <div className="absolute left-[2px] top-[677px] h-[105px] w-[856px]">
          <div className="absolute left-0 top-0 h-[105px] w-[856px] rounded-[5px] bg-[#cafbbf]" />
          <div className="absolute left-[14.93px] top-0 h-[35px] w-[162.99px] font-['Inter'] text-[28px] font-medium text-[#1e5300]">
            Kim Lâu
          </div>
          <div className="absolute left-[14.93px] top-[53px] h-[31px] w-[751.49px] font-['Inter'] text-[32px] font-normal text-[#1e5300]">
            {kimLauResult}
          </div>
        </div>
        <div className="absolute left-[2px] top-[888px] h-[105px] w-[856px]">
          <div className="absolute left-0 top-0 h-[105px] w-[856px] rounded-[5px] bg-[#cafbbf]" />
          <div className="absolute left-[14.93px] top-0 h-[35px] w-[162.99px] font-['Inter'] text-[28px] font-medium text-[#1e5300]">
            Hoang ốc
          </div>
          <div className="absolute left-[14.93px] top-[53px] h-[31px] w-[751.49px] font-['Inter'] text-[32px] font-normal text-[#1e5300]">
            {hoangOcResult}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default FengShuiResult;
