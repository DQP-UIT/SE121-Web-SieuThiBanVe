import React from "react";
import { Navigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

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
            <div className="flex items-center justify-between p-4 bg-gray-100 min-h-fit h-1/6">
                <div className="flex items-center min-w-fit w-1/5 ml-12 ">
                    <img src="src/assets/solar_home-bold.svg" alt="Logo" className="h-8 w-8 float-left" />
                    <span className="text-3xl font-serif">Siêu thị bản vẽ</span>
                </div>
                <div className="min-w-fit w-1/3 ml-36 ">
                    <SearchBar data={data} />
                </div>
                <div className="flex-auto min-w-fit w-1/5 ml-20">
                    <img src="src/assets/mingcute_phone-call-fill.svg" alt="Contact" className="h-8 w-8 float-left" />
                    <span className="text-xl font-medium">0975207829</span>
                    <img src={inout_url} alt="Login" className="h-8 w-8 float-right" />
                </div>
            </div>
            <div className="flex flex-row p-4 bg-blue-400">
                <div className="grow"></div>
                <div className="basis-1/12 min-w-fit text-center">
                    <span className="text-xl font-sans hover:text-white cursor-pointer"> Trang chủ </span>
                </div>
                <div className="basis-1/12 min-w-fit text-center ps-24">
                    <Popover>
                        <PopoverButton className="block text-xl font-sans text-center text-black focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Mẫu nhà đẹp
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            anchor="bottom"
                            className="divide-y divide-white rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                        >
                            <div className="p-3">
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-blue-400" href="#">
                                    <p className="font-semibold text-black">Insights</p>
                                    <p className="text-black/50">Measure actions your users take</p>
                                </a>
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-blue-400" href="#">
                                    <p className="font-semibold text-black">Automations</p>
                                    <p className="text-black/50">Create your own targeted content</p>
                                </a>
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-blue-400" href="#">
                                    <p className="font-semibold text-black">Reports</p>
                                    <p className="text-black/50">Keep track of your growth</p>
                                </a>
                            </div>
                            <div className="p-3">
                                <a className="block rounded-lg py-2 px-3 transition hover:bg-blue-400" href="#">
                                    <p className="font-semibold text-black">Documentation</p>
                                    <p className="text-black/50">Start integrating products and tools</p>
                                </a>
                            </div>
                        </PopoverPanel>
                    </Popover>
                </div>
                <div className="basis-1/12 min-w-fit text-center ps-24">
                    <span className="text-xl font-sans hover:text-white cursor-pointer"> Báo giá</span>
                </div>
                <div className="basis-1/12 min-w-fit text-center ps-24">
                    <span className="text-xl font-sans hover:text-white cursor-pointer"> Phong thủy</span>
                </div>
                <div className="basis-1/12 min-w-fit text-center ps-24">
                    <span className="text-xl font-sans hover:text-white cursor-pointer"> Ứng dụng</span>
                </div>
                <div className="basis-1/12 min-w-fit text-center ps-24">
                    <span className="text-xl font-sans hover:text-white cursor-pointer"> Về Chúng tôi</span>
                </div>
                <div className="grow"></div>
            </div>
        </div>
    );
};

export default Header;