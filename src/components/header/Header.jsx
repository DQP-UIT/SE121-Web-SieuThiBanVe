import React from "react";
import { Navigate } from "react-router-dom";
import './Header.css';
import SearchBar from "../searchbar/SearchBar";

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

const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100">
            <div className="flex items-center w-3/4 ">
                <img src="src/assets/solar_home-bold.svg" alt="Logo" className="h-8 w-8 float-left" />
                <span className="text-xl font-bold align-content: center ">Siêu thị bản vẽ</span>
            </div>
            <SearchBar data={data} />
            <div className="flex-auto">
                <img src="src/assets/mingcute_phone-call-fill.svg" alt="Contact" className="h-8 w-8 float-left" />
                <span className="text-xl">0975207829</span>
                <img src="src/assets/entypo_log-out.svg" alt="Login" className="h-8 w-8 float-right" />
            </div>
        </div>
    );
};

export default Header;