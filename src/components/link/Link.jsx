import React from "react";
import { useNavigate } from "react-router-dom";

const Link = ({ text, url }) => {
    const navigator = useNavigate();
    return (
        <>
            <a href={url} className="text-xs text-gray-500 hover:text-blue-600 transition duration-300 p-2 rounded mt-4">{text}</a>
        </>
    )
}

export default Link;