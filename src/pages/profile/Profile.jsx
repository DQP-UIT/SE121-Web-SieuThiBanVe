import React, { useState } from "react";
import { useAuth } from "../../store";
import moment from "moment";
import { useNavigate } from "react-router-dom"; // Thêm dòng này
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

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showCreateProductForm, setShowCreateProductForm] = useState(false);

  const handleAddAcc = () => {
    navigate("/addacc"); // Chuyển hướng đến trang /
  };
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    console.log("Uploaded file:", file);
  };

  const handleNewDesignUpload = () => {
    console.log("New design button clicked");
    setShowCreateProductForm(true);
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, width: "100%" }}>
      <Box className="mx-auto flex w-full max-w-6xl gap-8">
        <Paper className="relative mr-12 w-3/4 rounded-lg p-8 shadow-md">
          <Box className="flex items-center gap-6">
            <Box className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-300">
              <input
                type="file"
                onChange={handlePhotoUpload}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <PhotoCameraIcon className="text-2xl text-gray-600" />
            </Box>
            <Typography variant="h5" className="m-0">
              {user.fullName}
            </Typography>
            {/* <IconButton className="absolute right-4 top-4">
              <EditIcon />
            </IconButton> */}
          </Box>

          <Box className="mt-6 grid grid-cols-2 gap-4">
            <Box className="mb-4 flex items-center">
              <BadgeIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  ID
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {user.id}
                </Typography>
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <PersonIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Tên
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {user?.fullName}
                </Typography>
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <CalendarTodayIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Ngày sinh
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {moment(user.dob).format("DD/MM/YYYY")}
                </Typography>
              </Box>
            </Box>
            {user.role === "admin" ? (
              <Box className="mb-4 flex items-center">
                <DateRangeIcon className="mr-2 text-gray-600" />
                <Box>
                  <Typography variant="body2" className="text-gray-600">
                    Ngày kích hoạt
                  </Typography>
                  <Typography variant="body1" className="font-bold">
                    {moment(user.activatedDate).format("DD/MM/YYYY")}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box className="mb-4 flex items-center">
                <InsertDriveFileIcon className="mr-2 text-gray-600" />
                <Box>
                  <Typography variant="body2" className="text-gray-600">
                    Số bản vẽ
                  </Typography>
                  <Typography variant="body1" className="font-bold">
                    {user.designs}
                  </Typography>
                </Box>
              </Box>
            )}
            <Box className="mb-4 flex items-center">
              <EmailIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Email
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {user.email}
                </Typography>
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <PhoneIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Số điện thoại
                </Typography>
                <Typography variant="body1" className="font-bold">
                  0975207829
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>

        <Box className="flex w-1/4 flex-col gap-4">
          {user.role === "admin" ? (
            <>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<AccountCircleIcon />}
              >
                Quản lý tài khoản
              </Button>
              <Button
                onClick={handleAddAcc}
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<AddCircleIcon />}
              >
                Thêm người dùng
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<BarChartIcon />}
              >
                Thống kê doanh thu
              </Button>
            </>
          ) : (
            <>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<UploadFileIcon />}
              >
                Đăng bản vẽ mới
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<ManageAccountsIcon />}
              >
                Quản lý bản vẽ
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  height: 55,
                  backgroundColor: "primary.light",
                  color: "text.primary",
                  "&:hover": {
                    backgroundColor: "primary.main",
                  },
                  justifyContent: "flex-center",
                  pl: 3,
                  fontWeight: "bold",
                }}
                startIcon={<AssignmentIcon />}
              >
                Quản lý đơn đặt hàng
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
