import React, { useState, useEffect } from "react";
import { useAuth } from "../../store";
import axiosInstance from "../../axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import UserTag from "../user/profile/UserTag";
import DesignList from "./designList/DesignList";
import axios from "axios";

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
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [searchQuery, setSearchQuery] = useState(""); // Trạng thái tìm kiếm
  const itemsPerPage = 8; // Số sản phẩm mỗi trang

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/api/v1/product", {
        params: { page: 1, pageSize: 100 },
      })
      .then((res) => {
        setProducts(
          res.data.data.map((v) => ({
            id: v.id,
            name: v.name,
            img: v.images[0] || "https://via.placeholder.com/150",
            tang: v.floor,
            phongngu: v.numberBedRoom,
            dientich: v.square,
            price: v.cost,
          })),
        );
        setTotalPages(Math.ceil(res.data.data.length / itemsPerPage));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, [user]);

  const handleDelete = () => {
    // Handle delete logic here
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Nếu người dùng chưa đăng nhập, có thể hiển thị một thông báo hoặc redirect
  if (!user) {
    return <div>Vui lòng đăng nhập để xem bản vẽ của bạn.</div>;
  }

  return (
    <div className="h-full w-full">
      <div className="ml-6 h-fit w-fit">
        <UserTag user={user} />
      </div>
      <div className="ml-6 mt-6 h-fit w-full text-2xl font-semibold text-white">
        Bản thiết kế trên hệ thống
      </div>
      <div className="mt-4 flex h-fit w-full flex-auto justify-center">
        <div className="h-full min-h-[80vh] w-full">
          <Box className="mt-4 flex w-full justify-center">
            <TextField
              label="Tìm kiếm sản phẩm"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  fieldset: { borderColor: "white", color: "black" }, // Viền mặc định
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Focus
                },
              }}
              InputProps={{
                style: {
                  backgroundColor: "rgb(255,255,255,0.5)",
                  color: "white",
                },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          {/* <div
            className="float-right mr-8 h-12 w-fit select-none rounded-xl border-2 border-white p-2 text-xl text-white hover:scale-105 hover:cursor-pointer"
            onClick={handleDelete}
          >
            Loại bỏ bản thiết kế
          </div> */}
          <div className="flex h-full min-h-[80vh] w-full min-w-fit items-center justify-center pt-10">
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className="flex h-full w-full flex-auto justify-center">
                <DesignList products={paginatedProducts} />
              </div>
            )}
          </div>
          <Stack
            spacing={2}
            className="pagination mt-4 flex flex-auto items-center justify-center p-4"
          >
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Profile;
