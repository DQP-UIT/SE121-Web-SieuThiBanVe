import React from "react";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import FengShui from "../pages/fengshui/FendShui";
import NotFound from "../pages/notfound/NotFound";
import FengShuiResult from "../pages/fengshui/FengShuiResult";
import Profile from "../pages/profile/Profile";
import FileUploader from "../pages/fileuploader/FileUploader";
import AboutUs from "../pages/aboutus/aboutus";
import EstimatePart1 from "../pages/estimate/estimatePart1";
import { createBrowserRouter } from "react-router-dom";
import Default from "../components/default/Default";
export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "fileuploader",
        element: <FileUploader />,
      },
      {
        path: "product/:id",
        element: <Info />,
      },
      {
        path: "fengshui",
        element: <FengShui />,
      },
      {
        path: "fengshuiresult",
        element: <FengShuiResult />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "estimatePart1",
        element: <EstimatePart1 />,
      },
    ],
  },
]);
