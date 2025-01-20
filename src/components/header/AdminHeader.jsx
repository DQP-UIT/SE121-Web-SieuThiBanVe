import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../store";

const AdminHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Bạn có chắc bạn muốn đăng xuất?",
      text: "Nếu bạn chưa lưu những thay đổi, chúng có thể sẽ không được áp dụng!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đăng xuất",
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        localStorage.removeItem("token");
        navigate("/");
      }
    });
  };

  return (
    <div className="flex w-full flex-auto justify-end">
      <div className="ml-4 mt-4 flex h-fit w-fit flex-row space-x-4">
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-purple-100 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/profile`)}
        >
          Home
        </div>
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-purple-100 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/account`)}
        >
          Account
        </div>
        <div
          className="h-fit w-fit select-none p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer hover:text-purple-100 hover:underline hover:decoration-solid"
          onClick={() => navigate(`/admin/report`)}
        >
          Report
        </div>
        <div
          className="h-fit w-fit select-none rounded-xl border-2 p-2 text-xl font-semibold text-white hover:scale-105 hover:cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </div>
        <div className="w-4" />
      </div>
    </div>
  );
};

export default AdminHeader;
