import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SearchBar = ({ data }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = data.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase()),
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn việc reload trang
    const queryParam = inputValue ? encodeURIComponent(inputValue) : " "; // Truyền query rỗng nếu không nhập
    navigate(`/result?query=${queryParam}`); // Chuyển route và truyền params
  };

  return (
    <div className="relative mx-auto max-w-md">
      <form
        className="relative rounded-full border-2"
        onSubmit={handleSubmit} // Xử lý submit
      >
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900"
        >
          Search
        </label>
        <div className="relative rounded-full">
          <input
            type="search"
            id="default-search"
            className="block w-full rounded-full border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Tìm theo mã bản vẽ hoặc thông tin khác"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {filteredData.length > 0 && (
        <ul className="absolute z-10 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-300 bg-white">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200"
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
