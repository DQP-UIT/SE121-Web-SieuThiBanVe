import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Default = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Default;
