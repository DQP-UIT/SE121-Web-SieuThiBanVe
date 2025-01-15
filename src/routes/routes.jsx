import React from "react";
import Home from "../pages/home/Home";
import Info from "../pages/info/Info";
import FengShui from "../pages/fengshui/FendShui";
import NotFound from "../pages/notfound/NotFound";
import FengShuiResult from "../pages/fengshui/FengShuiResult";
import Profile from "../pages/user/profile/Profile";
import FileUploader2d from "../pages/fileuploader/FileUploader2d";
import FileUploader2dct from "../pages/fileuploader/FileUploader2dct";
import FileUploader3d from "../pages/fileuploader/FileUploader3d";
import AboutUs from "../pages/aboutus/aboutus";
import EstimatePart1 from "../pages/estimate/estimatePart1";
import EstimatePart2 from "../pages/estimate/estimatePart2";
import { createBrowserRouter } from "react-router-dom";
import Default from "../components/default/Default";
import AdminDefault from "../components/default/AdminDefault";
import UserDefault from "../components/default/UserDefault";
import AccountMG from "../pages/admin/account/AcountMG";
import AddAccount from "../pages/admin/account/AddAccount";
import ReportPage from "../pages/admin/Report";
import AddDrawing from "../pages/user/AddDrawing";
import DrawingManagement from "../pages/user/DrawingManagement";
import OrderManageMent from "../pages/user/OrderManageMent";
import SearchResults from "../pages/searchResult/Result";
import SearchResultRcm from "../pages/searchResult/ResultRcm";
import ChangeProfile from "../pages/user/ChangeProfile";
import EstimateResultPage from "../pages/estimate/estimateResultPage";
import AdminProfile from "../pages/admin/AdminProfile";
import DesignInfo from "../pages/info/DesignInfo";

const defaultRoutes = [
  {
    path: "/",
    element: <Home />,
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
    path: "estimateResult",
    element: <EstimateResultPage />,
  },
  {
    path: "result",
    element: <SearchResults />,
  },
  {
    path: "resultrcm/:param",
    element: <SearchResultRcm />,
  },
];

const userRoutes = [
  {
    path: "adddrawing",
    element: <AddDrawing />,
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
    path: "drawingmanagement",
    element: <DrawingManagement />,
  },
  {
    path: "changeprofile",
    element: <ChangeProfile />,
  },
  {
    path: "designinfo/:id",
    element: <DesignInfo/>
  },
];

const adminRoutes = [
  {
    path: "account",
    element: <AccountMG />,
  },
  {
    path: "profile",
    element: <AdminProfile />,
  },
  {
    path: "addacc",
    element: <AddAccount />,
  },
  {
    path: "report",
    element: <ReportPage />,
  },
  {
    path: "designinfo/:id",
    element: <DesignInfo/>
  },
];

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    errorElement: <NotFound />,
    children: defaultRoutes,
  },
  {
    path: "/user",
    element: <UserDefault />,
    children: userRoutes,
  },
  {
    path: "/admin",
    element: <AdminDefault />,
    children: adminRoutes,
  },
]);
