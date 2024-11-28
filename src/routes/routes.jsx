import React from "react";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import FengShui from "../pages/fengshui/FendShui";
import NotFound from "../pages/notfound/NotFound";
import FengShuiResult from "../pages/fengshui/FengShuiResult";
import Profile from "../pages/profile/Profile";
import FileUploader2d from "../pages/fileuploader/FileUploader2d";
import FileUploader2dct from "../pages/fileuploader/FileUploader2dct";
import FileUploader3d from "../pages/fileuploader/FileUploader3d";
import AboutUs from "../pages/aboutus/aboutus";
import EstimatePart1 from "../pages/estimate/estimatePart1";
import EstimatePart2 from "../pages/estimate/estimatePart2";
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
        path: "fileuploader2d",
        element: <FileUploader2d />,
      },
      {
        path: "fileuploader2dct",
        element: <FileUploader2dct />,
      },
      {
        path: "fileuploader3d",
        element: <FileUploader3d />,
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
      {
        path: "estimatePart2",
        element: <EstimatePart2 />,
      },
    ],
  },
]);
