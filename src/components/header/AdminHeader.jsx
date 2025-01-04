import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full flex-auto justify-end">
      <div className="ml-4 mt-4 flex h-fit w-fit flex-row space-x-4">
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-light-blue-300 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/profile`)}
        >
          Home
        </div>
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-light-blue-300 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/account`)}
        >
          Account
        </div>
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-light-blue-300 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/report`)}
        >
          Report
        </div>
        <div className="h-fit w-fit select-none rounded-xl border-2 p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer">
          Logout
        </div>
        <div className="w-4" />
      </div>
    </div>
  );
};

export default AdminHeader;
