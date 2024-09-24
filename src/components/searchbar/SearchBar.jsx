import React, { useState } from "react";

const SearchBar = ({ data }) => {
    const [inputValue, setInputValue] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filtered = data.filter(item =>
                item.value.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData([]);
        }
    };

    const handleSelect = (value) => {
        setInputValue(value);
        setFilteredData([]);
    };

    return (
        <div className="max-w-md mx-auto relative">
            <form className="relative border-2 rounded-full">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative rounded-full">
                    <div className="absolute inset-y-0 end-5 flex items-center ps-3 cursor-pointer">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Tìm theo mã bản vẽ hoặc thông tin khác"
                        value={inputValue}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </form>
            {filteredData.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg max-h-60 overflow-y-auto">
                    {filteredData.map((item, index) => (
                        <li
                            key={index}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                            onClick={() => handleSelect(item.value)}
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;