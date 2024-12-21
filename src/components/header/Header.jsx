import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import PopoverBar from "./PopoverBar";
import Swal from "sweetalert2";
import LoginForm from "../forms/LoginForm";
import { Button } from "@headlessui/react";
import { useAuth } from "../../store";
import PhoneIcon from "/src/assets/mingcute_phone-call-fill.svg";
import Logo from "/src/assets/solar_home-bold.svg";
import User from "/src/assets/user.svg";
import Logout from "/src/assets/entypo_log-out.svg";

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
  const [wasIn, setWasIn] = useState(false);
  const { user, logout } = useAuth();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const handleOnLogin = () => {
    setShowLoginForm(true);
  };

  const handleOnLogout = () => {
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
        // logout API
        logout();
        localStorage.removeItem("token");
        navigate("/");
        setWasIn(false);
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex h-1/6 min-h-fit items-center justify-between p-4">
        <div className="ml-12 flex w-1/5 min-w-fit items-center">
          <img src={Logo} alt="Logo" className="float-left h-8 w-8" />
          <span className="font-serif text-3xl">Siêu thị bản vẽ</span>
        </div>
        <div className="ml-36 w-1/3 min-w-fit">
          <SearchBar data={data} />
        </div>
        <div className="ml-20 w-1/5 min-w-fit flex-auto">
          <img src={PhoneIcon} alt="Contact" className="float-left h-8 w-8" />
          <span className="text-xl font-medium">0975207829</span>
          {user ? (
            <div className="float-right flex gap-4">
              <img
                src={User}
                alt="user"
                className="h-8 w-8 hover:cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                }}
              />
              <img
                src={Logout}
                alt="Logout"
                className="h-8 w-8 hover:cursor-pointer"
                onClick={handleOnLogout}
              />
            </div>
          ) : (
            <Button
              className="float-right rounded bg-light-blue-600 px-4 py-2 text-sm text-white data-[active]:bg-blue-700 data-[hover]:bg-blue-500"
              onClick={handleOnLogin}
            >
              Login
            </Button>
          )}
        </div>
      </div>
      <PopoverBar />
      {showLoginForm && (
        <LoginForm
          onClose={() => {
            setShowLoginForm(false);
          }}
        />
      )}
    </div>
  );
};

export default Header;
