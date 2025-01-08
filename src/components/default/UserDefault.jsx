import { Outlet } from "react-router-dom";
import UserHeader from "../header/UserHeader";


const UserDefault = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-blue-300 to-purple-100">
        <UserHeader />
        <Outlet />
      </div>
    </>
  );
};

export default UserDefault;
