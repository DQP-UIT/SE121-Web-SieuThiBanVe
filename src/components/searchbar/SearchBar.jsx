import React from "react";
import ReactSearchBox from "react-search-box";
import './SearchBar.css'; // Import file CSS

const SearchBar = ({ data }) => {
    return (
        <div className="react-search-box">
            <ReactSearchBox
                placeholder="Search for products..."
                value=""
                data={data}
                onSelect={(record) => console.log(record)}
                onFocus={() => {
                    console.log("This function is called when is focussed");
                }}
                onChange={(value) => console.log(value)}
                autoFocus
            />
        </div>
    );
};

export default SearchBar;