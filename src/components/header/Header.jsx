import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import PopoverBar from "./PopoverBar";
import Swal from "sweetalert2";
import LoginForm from "../forms/LoginForm";
import { Button } from "@headlessui/react";
import { useAuth } from "../../store";
import { useNavigate } from "react-router-dom";

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
  //const navigate = useNavigate();
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
        setWasIn(false);
      }
    });
  };

  return (
    <div>
      <div className="flex h-1/6 min-h-fit items-center justify-between bg-gray-100 p-4">
        <div className="ml-12 flex w-1/5 min-w-fit items-center">
          <img
            src="src/assets/solar_home-bold.svg"
            alt="Logo"
            className="float-left h-8 w-8"
          />
          <span className="font-serif text-3xl">Siêu thị bản vẽ</span>
        </div>
        <div className="ml-36 w-1/3 min-w-fit">
          <SearchBar data={data} />
        </div>
        <div className="ml-20 w-1/5 min-w-fit flex-auto">
          <img
            src="src/assets/mingcute_phone-call-fill.svg"
            alt="Contact"
            className="float-left h-8 w-8"
          />
          <span className="text-xl font-medium">0975207829</span>
          {user ? (
            <div className="float-right flex gap-4">
              <img
                src="src/assets/user.svg"
                alt="user"
                className="h-8 w-8 hover:cursor-pointer"
                onClick={() => {
                  navigate("/profile");
                }}
              />
              <img
                src="src/assets/entypo_log-out.svg"
                alt="Logout"
                className="h-8 w-8 hover:cursor-pointer"
                onClick={handleOnLogout}
              />
            </div>
          ) : (
            <Button
              className="float-right rounded bg-sky-600 px-4 py-2 text-sm text-white data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
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
