import React, { useState } from "react";
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
      <div className="flex flex-wrap items-center justify-between p-4">
        <div className="flex items-center hover:cursor-pointer">
          <img src={Logo} alt="Logo" className="h-8 w-8 select-none" />
          <span className="ml-2 text-xl md:text-2xl lg:text-3xl font-serif select-none">
            Siêu thị bản vẽ
          </span>
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <SearchBar data={data} />
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <img src={PhoneIcon} alt="Contact" className="h-6 w-6 md:h-8 md:w-8 select-none" />
          <span className="ml-2 text-sm md:text-lg lg:text-xl font-medium select-none">
            0975207829
          </span>
          {user ? (
            <div className="flex items-center ml-4">
              <img
                src={User}
                alt="user"
                className="h-6 w-6 md:h-8 md:w-8 hover:cursor-pointer select-none"
                onClick={() => {
                  navigate("/profile");
                }}
              />
              <img
                src={Logout}
                alt="Logout"
                className="h-6 w-6 md:h-8 md:w-8 ml-4 hover:cursor-pointer select-none"
                onClick={handleOnLogout}
              />
            </div>
          ) : (
            <Button
              className="ml-4 rounded bg-light-blue-700 px-4 py-2 text-sm md:text-base lg:text-lg text-white data-[active]:bg-blue-700 data-[hover]:bg-blue-400 select-none"
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