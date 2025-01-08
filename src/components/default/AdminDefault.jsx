import { Outlet } from "react-router-dom";
import AdminHeader from "../header/AdminHeader";


const AdminDefault = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-b from-blue-300 to-purple-100">
        <AdminHeader />
        <Outlet />
      </div>
    </>
  );
};

export default AdminDefault;
