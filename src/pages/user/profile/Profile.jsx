import React, { useState } from "react";
import { useAuth } from "../../../store";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import DateRangeIcon from "@mui/icons-material/DateRange";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import UserTag from "./UserTag";
import OrderList from "./OrderTagList";

const orders = {
  id: "12345",
  customerName: "John Doe",
  customerAvatar: "https://via.placeholder.com/150",
  customerEmail: "john.doe@example.com",
  date: "2023-10-01",
  status: "Completed",
  totalAmount: 150.0,
  items: [
    { name: "Item 1", price: 50.0 },
    { name: "Item 2", price: 100.0 },
  ],
};

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showCreateProductForm, setShowCreateProductForm] = useState(false);

  return (
    <div className="h-full">
      <div className="ml-6 h-fit w-fit min-h-[35vh]">
        <UserTag user={user} />
      </div>
      <div className="ml-6 mt-6 h-fit w-full text-2xl font-semibold text-white">
        Đơn đặt hàng
      </div>
      <div className="mt-4 flex h-fit min-h-[50vh] w-full flex-auto justify-center">
        <div>
          <OrderList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
