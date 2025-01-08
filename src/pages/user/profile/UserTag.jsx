import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import moment from "moment";
import { blue } from "@mui/material/colors";
import axios from "axios"; // Import axios

const UserTag = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    setIsEditing(false); // Tắt chế độ chỉnh sửa

    // Tạo dữ liệu gửi đi (FormData)
    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("address", formData.address);
    formDataToSend.append("dob", formData.dob);

    // Chỉ gửi avatar nếu có thay đổi
    if (formData.avatar instanceof File) {
      formDataToSend.append("avatar", formData.avatar);
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/user/${formData.id}`, // API URL
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log("Response:", response.data); // Log kết quả trả về
      alert("Cập nhật thành công!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Cập nhật thất bại!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="relative w-fit min-w-96 p-4 shadow-md">
      <Paper
        className="relative w-fit min-w-96 p-4 shadow-md"
        sx={{
          color: "white",
          backgroundBlendMode: "overlay",
          backgroundColor: blue[300],
        }}
      >
        <Box className="absolute -right-10 -top-8 z-50">
          <Avatar
            alt={formData.fullName}
            src={formData.avatar} // Hiển thị avatar từ formData
            className="mr-2"
            sx={{ width: 62, height: 62 }}
          />
        </Box>
        <Box className="grid grid-cols-2 gap-4">
          {user.role === "admin" ? (
            <Typography
              className="mb-2"
              color="black"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Thông tin Quản trị viên
            </Typography>
          ) : (
            <Typography
              className="mb-2"
              color="black"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textAlign: "center",
                color: "white",
              }}
            >
              Thông tin kiến trúc sư
            </Typography>
          )}
          <IconButton
            sx={{ color: "white", width: "fit-content", marginBottom: 2 }}
            aria-label="edit profile"
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? <SaveIcon /> : <EditIcon />}
          </IconButton>
        </Box>

        <Box className="grid grid-cols-2 gap-4">
          {isEditing ? (
            <TextField
              label="ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              fullWidth
              disabled
              sx={{ backgroundColor: blue[200], color: "white" }}
            />
          ) : (
            <Box className="flex items-center">
              <BadgeIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  ID
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {formData.id}
                </Typography>
              </Box>
            </Box>
          )}

          {isEditing ? (
            <TextField
              label="Tên"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: blue[200], color: "white" }}
            />
          ) : (
            <Box className="flex items-center">
              <PersonIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Tên
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {formData.fullName}
                </Typography>
              </Box>
            </Box>
          )}

          {isEditing ? (
            <TextField
              label="Ngày sinh"
              name="dob"
              type="date"
              value={moment(formData.dob).format("YYYY-MM-DD")}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: blue[200], color: "white" }}
            />
          ) : (
            <Box className="flex items-center">
              <CalendarTodayIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Ngày sinh
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {moment(formData.dob).format("DD/MM/YYYY")}
                </Typography>
              </Box>
            </Box>
          )}

          {user.role === "admin" ? (
            <>
              {isEditing ? (
                <TextField
                  label="Ngày kích hoạt"
                  name="designs"
                  type="number"
                  value={moment(user.activedDay).format("DD/MM/YYYY")}
                  fullWidth
                  disabled // Không cho phép chỉnh sửa
                  sx={{ backgroundColor: blue[200], color: "white" }}
                />
              ) : (
                <Box className="flex items-center">
                  <InsertDriveFileIcon className="mr-2 text-white" />
                  <Box>
                    <Typography variant="body2" className="text-white">
                      Ngày kích hoạt
                    </Typography>
                    <Typography variant="body1" className="font-bold">
                      {moment(user.activedDay).format("DD/MM/YYYY")}
                    </Typography>
                  </Box>
                </Box>
              )}
            </>
          ) : (
            <>
              {isEditing ? (
                <TextField
                  label="Số bản vẽ"
                  name="designs"
                  type="number"
                  value={formData.designs}
                  fullWidth
                  disabled // Không cho phép chỉnh sửa
                  sx={{ backgroundColor: blue[200], color: "white" }}
                />
              ) : (
                <Box className="flex items-center">
                  <InsertDriveFileIcon className="mr-2 text-white" />
                  <Box>
                    <Typography variant="body2" className="text-white">
                      Số bản vẽ
                    </Typography>
                    <Typography variant="body1" className="font-bold">
                      {formData.designs}
                    </Typography>
                  </Box>
                </Box>
              )}
            </>
          )}

          {isEditing ? (
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              fullWidth
              disabled // Không cho phép chỉnh sửa
              sx={{ backgroundColor: blue[200], color: "white" }}
            />
          ) : (
            <Box className="flex items-center">
              <EmailIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Email
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {formData.email}
                </Typography>
              </Box>
            </Box>
          )}

          {isEditing ? (
            <TextField
              label="Địa chỉ"
              name="address"
              type="string"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              sx={{ backgroundColor: blue[200], color: "white" }}
            />
          ) : (
            <Box className="flex items-center">
              <InsertDriveFileIcon className="mr-2 text-white" />
              <Box>
                <Typography variant="body2" className="text-white">
                  Địa chỉ
                </Typography>
                <Typography variant="body1" className="font-bold">
                  {formData.address}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
        {isEditing && (
          <Box className="mt-4 flex justify-center">
            <Button
              variant="contained"
              component="label"
              sx={{ backgroundColor: blue[500], color: "white" }}
            >
              Chọn Avatar
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFormData({ ...formData, avatar: file }); // Lưu trực tiếp file vào state
                }}
              />
            </Button>
          </Box>
        )}
      </Paper>
    </div>
  );
};

export default UserTag;
