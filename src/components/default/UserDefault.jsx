import { Outlet } from "react-router-dom";
import UserHeader from "../header/UserHeader";


const UserDefault = () => {
  return (
    <>
      <div className="w-full h-full bg-blue-800">
        <UserHeader />
        <Outlet />
      </div>
    </>
  );
};

export default UserDefault;
