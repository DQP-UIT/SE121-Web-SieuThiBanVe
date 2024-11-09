import React from "react";
import { useNavigate } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const PopoverBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row bg-blue-400 p-4">
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
          <PopoverButton className="block text-center font-sans text-xl text-black focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
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
                href="#"
              >
                <p className="font-semibold text-black">Insights</p>
                <p className="text-black/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                href="#"
              >
                <p className="font-semibold text-black">Automations</p>
                <p className="text-black/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                href="#"
              >
                <p className="font-semibold text-black">Reports</p>
                <p className="text-black/50">Keep track of your growth</p>
              </a>
            </div>
            <div className="p-3">
              <a
                className="block rounded-lg px-3 py-2 transition hover:bg-blue-400"
                href="#"
              >
                <p className="font-semibold text-black">Documentation</p>
                <p className="text-black/50">
                  Start integrating products and tools
                </p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <span className="cursor-pointer font-sans text-xl hover:text-white">
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
        <span className="cursor-pointer font-sans text-xl hover:text-white">
          {" "}
          Ứng dụng
        </span>
      </div>
      <div className="min-w-fit basis-1/12 ps-24 text-center">
        <span className="cursor-pointer font-sans text-xl hover:text-white">
          {" "}
          Về Chúng tôi
        </span>
      </div>
      <div className="grow"></div>
    </div>
  );
};

export default PopoverBar;
