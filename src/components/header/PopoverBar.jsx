import React from "react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const PopoverBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row bg-gradient-to-b from-light-blue-200 to-purple-100 p-4">
      <div className="grow"></div>
      <div className="min-w-fit basis-1/12 text-center">
        <span
          className="cursor-pointer font-sans text-xl hover:text-white"
          onClick={() => {
            navigate(`/`);
          }}
        >
          {" "}
          Trang chủ{" "}
        </span>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <Popover>
          <PopoverButton className="block text-center font-sans text-xl text-black hover:bg-transparent focus:outline-none data-[active]:text-white data-[hover]:text-white">
            Mẫu nhà đẹp
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                onClick={() => navigate("/resultrcm/1")} // Chuyển hướng khi nhấn vào
              >
                <p className="font-semibold text-black hover:cursor-pointer">Nhà phố</p>
                <p className="text-black/50 hover:cursor-pointer">
                  Những mẫu nhà phố hiện đại theo xu hướng
                </p>
              </a>
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                onClick={() => navigate("/resultrcm/2")} // Chuyển hướng khi nhấn vào
              >
                <p className="font-semibold text-black hover:cursor-pointer">Nhà cấp 4</p>
                <p className="text-black/50 hover:cursor-pointer">
                  Thiết kế thông minh, tận dụng tối đa không gian
                </p>
              </a>
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                onClick={() => navigate("/resultrcm/3")} // Chuyển hướng khi nhấn vào
              >
                <p className="font-semibold text-black hover:cursor-pointer">Biệt thự</p>
                <p className="text-black/50 hover:cursor-pointer">
                  Thiết kế sang trọng và không thiếu tiện nghi
                </p>
              </a>
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                onClick={() => navigate("/resultrcm/4")} // Chuyển hướng khi nhấn vào
              >
                <p className="font-semibold text-black hover:cursor-pointer">Khách sạn</p>
                <p className="text-black/50 hover:cursor-pointer">
                  Ý tưởng độc đáo, thu hút thị hiếu
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <span
          className="cursor-pointer font-sans text-xl hover:text-white"
          onClick={() => {
            navigate(`/estimatePart1`);
          }}
        >
          {" "}
          Báo giá
        </span>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <span
          className="cursor-pointer font-sans text-xl hover:text-white"
          onClick={() => {
            navigate(`/fengshui`);
          }}
        >
          {" "}
          Phong thủy
        </span>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <span
          className="cursor-pointer font-sans text-xl hover:text-white"
          onClick={() => {
            navigate(`/aboutus`);
          }}
        >
          {" "}
          Về Chúng tôi
        </span>
      </div>
      <div className="grow"></div>
    </div>
  );
};

export default PopoverBar;
