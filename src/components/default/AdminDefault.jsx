import { Outlet } from "react-router-dom";
import AdminHeader from "../header/AdminHeader";


const AdminDefault = () => {
  return (
    <>
      <div className="w-full h-full bg-blue-800">
        <AdminHeader />
        <Outlet />
      </div>
    </>
  );
};

export default AdminDefault;
