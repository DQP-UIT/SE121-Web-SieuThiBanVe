import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  Container,
  Paper,
  Typography,
  Box,
  IconButton,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const UserTag = ({ user, isEdit, onEditToggle, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(isEdit);
  const [userData, setUserData] = useState({
    ...user,
    password: "", // Mặc định không có giá trị
  });

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    onEditToggle();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      // Chuẩn bị dữ liệu gửi lên API
      const updateData = {
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password || undefined, // Không gửi password nếu không có giá trị
        phonenumber: userData.phonenumber,
      };

      // Gọi API cập nhật
      const response = await fetch(
        `http://localhost:8000/api/v1/user/${userData.id}/admin`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
          body: JSON.stringify(updateData),
        },
      );

      if (!response.ok) {
        throw new Error(`Cập nhật thất bại: ${response.status}`);
      }

      const result = await response.json();
      console.log("Cập nhật thành công:", result);

      // Gọi hàm cập nhật dữ liệu trong danh sách
      onUpdateUser(userData);

      // Thông báo cập nhật thành công
      alert("Cập nhật thông tin thành công!");

      // Thoát khỏi chế độ chỉnh sửa
      setIsEditing(false);
      onEditToggle();
    } catch (error) {
      console.error("Lỗi cập nhật:", error);
      alert("Cập nhật thất bại. Vui lòng thử lại!");
    }
  };

  return (
    <Container maxWidth={false} sx={{ py: 4, width: "100%", marginBottom: 4 }}>
      <Box className="mx-auto mb-4 flex w-full max-w-6xl gap-8 rounded-lg">
        <Paper className="relative mr-12 w-full rounded-lg p-8 shadow-md">
          <Box className="flex items-center gap-6">
            <Typography variant="h5" className="m-0">
              {userData.fullName}
            </Typography>
            <IconButton
              className="absolute right-4 top-4"
              onClick={isEditing ? handleSaveClick : handleEditClick}
            >
              {isEditing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
          </Box>

          <Box className="mt-6 grid grid-cols-2 gap-4">
            <Box className="mb-4 flex items-center">
              <BadgeIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  ID
                </Typography>
                {isEditing ? (
                  <TextField
                    name="id"
                    value={userData.id}
                    onChange={handleInputChange}
                    fullWidth
                    disabled
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    {userData.id}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <PersonIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Tên
                </Typography>
                {isEditing ? (
                  <TextField
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleInputChange}
                    fullWidth
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    {userData.fullName}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box className="mb-4 flex items-center">
              <InsertDriveFileIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Số bản vẽ
                </Typography>
                {isEditing ? (
                  <TextField
                    name="designs"
                    value={userData.designs}
                    onChange={handleInputChange}
                    fullWidth
                    disabled
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    {userData.designs}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <EmailIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Email
                </Typography>
                {isEditing ? (
                  <TextField
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    fullWidth
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    {userData.email}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <EmailIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Mật khẩu mới
                </Typography>
                {isEditing ? (
                  <TextField
                    name="password"
                    type="password" // Không hiển thị giá trị
                    placeholder="Nhập mật khẩu mới"
                    value={userData.password} // Luôn hiển thị là rỗng
                    onChange={handleInputChange}
                    fullWidth
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    ********
                  </Typography> // Hiển thị ẩn khi không chỉnh sửa
                )}
              </Box>
            </Box>
            <Box className="mb-4 flex items-center">
              <PhoneIcon className="mr-2 text-gray-600" />
              <Box>
                <Typography variant="body2" className="text-gray-600">
                  Số điện thoại
                </Typography>
                {isEditing ? (
                  <TextField
                    name="phonenumber"
                    type="phonenumber"
                    value={userData.phonenumber}
                    onChange={handleInputChange}
                    fullWidth
                  />
                ) : (
                  <Typography variant="body1" className="font-bold">
                    {userData.phonenumber}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserTag;
