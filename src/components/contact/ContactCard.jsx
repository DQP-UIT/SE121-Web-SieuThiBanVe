import React from "react";

const ContactCard = () => {
  return (
    <div>
      <div className="relative h-[746px] w-[442px]">
        <div className="absolute left-0 top-0 h-[746px] w-[442px] border border-black/50 bg-white shadow" />
        <div className="absolute left-[48px] top-[156px] h-[63px] w-[333px] border border-black bg-white" />
        <div className="absolute left-[48px] top-[281px] h-[63px] w-[333px] border border-black bg-white" />
        <div className="absolute left-[48px] top-[406px] h-[42px] w-[147px] border border-black bg-white" />
        <div className="absolute left-[241px] top-[406px] h-[42px] w-[147px] border border-black bg-white" />
        <div className="absolute left-[50px] top-[48px] h-16 w-[323px] font-['Inter'] text-[32px] font-medium text-black">
          Liên hệ đặt hàng
        </div>
        <div className="absolute left-[49px] top-[127px] h-[29px] w-[322px] font-['Inter'] text-base font-normal text-black">
          Tên của bạn (*)
        </div>
        <div className="absolute left-[48px] top-[252px] h-[29px] w-[322px] font-['Inter'] text-base font-normal text-black">
          Số điện thoại (*)
        </div>
        <div className="absolute left-[47px] top-[377px] h-[29px] w-[148px] font-['Inter'] text-base font-normal text-black">
          Tỉnh/ Thành phố (*)
        </div>
        <div className="absolute left-[240px] top-[377px] h-[29px] w-[148px] font-['Inter'] text-base font-normal text-black">
          Quận/ Huyện (*)
        </div>
        <div className="absolute left-[49px] top-[463px] h-5 w-5" />
        <div className="absolute left-[74px] top-[468px] h-[22px] w-[167px] font-['Inter'] text-base font-normal text-[#356fee]">
          Cửa hàng gần bạn
        </div>
        <div className="absolute left-[60px] top-[615px] h-[59px] w-[321px]">
          <div className="absolute left-0 top-0 h-[59px] w-[321px] bg-[#6c95fc]" />
          <div className="absolute left-[24px] top-0 h-[59px] w-[273px] text-center font-['Inter'] text-2xl font-medium text-black">
            Liên hệ đặt hàng
          </div>
        </div>
        <div className="absolute left-[47px] top-[510px] h-[52px] w-[341px] text-center font-['Inter'] text-2xl font-medium text-black">
          Tổng tiền: 5.000.000
        </div>
        <div className="absolute left-[49px] top-[562px] h-[17px] w-[295px] font-['Inter'] text-[13px] font-normal text-black/70">
          Bạn chưa phải thanh toán ở bước này
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
