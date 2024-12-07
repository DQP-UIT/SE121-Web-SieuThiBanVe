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
import AccountMG from "../pages/admin/account/AcountMG";
import AddAccount from "../pages/admin/account/AddAccount";
import RevenueReportPage from "../pages/admin/Revenue";
import AddDrawing from "../pages/user/AddDrawing";
import DrawingManagement from "../pages/user/DrawingManagement";
import OrderManageMent from "../pages/user/OrderManageMent";
import SearchResults from "../pages/searchResult/Result";

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
        path: "drawingmanagement/product/:id",
        element: <Info />,
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
      {
        path: "account",
        element: <AccountMG />,
      },
      {
        path: "addacc",
        element: <AddAccount />,
      },
      {
        path: "revenue",
        element: <RevenueReportPage />,
      },
      {
        path: "adddrawing",
        element: <AddDrawing />,
      },
      {
        path: "drawingmanagement",
        element: <DrawingManagement />,
      },
      {
        path: "ordermanagement",
        element: <OrderManageMent />,
      },
      {
        path: "result",
        element: <SearchResults />,
      },
    ],
  },
]);
