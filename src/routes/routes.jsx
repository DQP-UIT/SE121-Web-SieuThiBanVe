import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import FengShui from "../pages/fengshui/FendShui";
import NotFound from "../pages/notfound/NotFound";
import FengShuiResult from "../pages/fengshui/FengShuiResult";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/fengshui" element={<FengShui />} />
        <Route path="/fengshuiresult" element={<FengShuiResult />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
