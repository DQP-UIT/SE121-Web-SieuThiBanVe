import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Default = () => {
  return (
    <div className="w-full bg-gradient-to-tl from-purple-100 to-light-blue-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;
