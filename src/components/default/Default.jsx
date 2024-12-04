import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Default = () => {
  return (
    <div className="w-full h-full bg-gradient-to-tl from-deep-purple-300 to-light-blue-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Default;
