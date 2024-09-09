import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ content, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route);
    };

    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
        >
            {content}
        </button>
    );
};

export default Button;