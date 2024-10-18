import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import FendShui from "../pages/fengshui/FendShui";
import FengShuiResult from "../pages/fengshui/FengShuiResult";
import NotFound from "../pages/notfound/NotFound";
const AppRoutes = () => {
 
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/fendshui" element={<FendShui />} />
          <Route path="/fendshuiresult" element={<FengShuiResult />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
