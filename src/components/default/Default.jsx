import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Default = () => {
  return (
    <>
      <div className="w-full h-full bg-gradient-to-br from-deep-purple-50 to-cyan-50 mix-blend-plus-lighter">
        <Header />
        <Outlet />
      </div>
      <div className="w-full bg-gradient-to-tr from-deep-purple-700 to-cyan-300">
      <Footer />
      </div>
    </>
  );
};

export default Default;
