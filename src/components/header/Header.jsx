import React from "react";
import { Navigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const data = [
  {
    key: "john",
    value: "John Doe",
  },
  {
    key: "jane",
    value: "Jane Doe",
  },
  {
    key: "mary",
    value: "Mary Phillips",
  },
  {
    key: "robert",
    value: "Robert",
  },
  {
    key: "karius",
    value: "Karius",
  },
];

const Header = ({ inout_url }) => {
  return (
    <div>
      <div className="flex h-1/6 min-h-fit items-center justify-between bg-gray-100 p-4">
        <div className="ml-12 flex w-1/5 min-w-fit items-center">
          <img
            src="src/assets/solar_home-bold.svg"
            alt="Logo"
            className="float-left h-8 w-8"
          />
          <span className="font-serif text-3xl">Siêu thị bản vẽ</span>
        </div>
        <div className="ml-36 w-1/3 min-w-fit">
          <SearchBar data={data} />
        </div>
        <div className="ml-20 w-1/5 min-w-fit flex-auto">
          <img
            src="src/assets/mingcute_phone-call-fill.svg"
            alt="Contact"
            className="float-left h-8 w-8"
          />
          <span className="text-xl font-medium">0975207829</span>
          {inout_url && (
            <img src={inout_url} alt="Login" className="float-right h-8 w-8" />
          )}
        </div>
      </div>
      <div className="flex flex-row bg-blue-400 p-4">
        <div className="grow"></div>
        <div className="min-w-fit basis-1/12 text-center">
          <span className="cursor-pointer font-sans text-xl hover:text-white">
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
                  <p className="text-black/50">
                    Measure actions your users take
                  </p>
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
          <span className="cursor-pointer font-sans text-xl hover:text-white">
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
    </div>
  );
};

export default Header;
