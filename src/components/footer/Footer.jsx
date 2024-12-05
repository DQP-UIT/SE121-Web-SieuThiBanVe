import React from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FengShuiIcon from "@mui/icons-material/AcUnit";
import InfoIcon from "@mui/icons-material/Info";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-56 w-full flex-col items-center bg-footback mix-blend-color-dodge">
      <h1 className="p-8 max-w-3xl text-3xl font-black uppercase text-blue-500 transform -rotate-2  mix-blend-plus-darker">
          We are Designs Mall 
      </h1>
      <div className="flex h-28 w-2/3 items-end justify-around bg-transparent p-4">
        <HomeIcon
          className="cursor-pointer text-white hover:text-gray-300"
          fontSize="large"
          onClick={() => navigate(`/`)}
        />
        <AttachMoneyIcon
          className="cursor-pointer text-white hover:text-gray-300"
          fontSize="large"
          onClick={() => navigate(`/estimatePart1`)}
        />
        <FengShuiIcon
          className="cursor-pointer text-white hover:text-gray-300"
          fontSize="large"
          onClick={() => navigate(`/fengshui`)}
        />
        <InfoIcon
          className="cursor-pointer text-white hover:text-gray-300"
          fontSize="large"
          onClick={() => navigate(`/aboutus`)}
        />
      </div>
    </div>
  );
};

export default Footer;
