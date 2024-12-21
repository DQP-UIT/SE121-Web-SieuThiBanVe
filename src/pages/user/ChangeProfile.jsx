import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Thêm dòng này
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useAuth } from "../../store";

const ChangeProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    fullName: user?.fullName || "", // Lấy fullName từ user nếu có
    address: user?.address || "", // Lấy address từ user nếu có
    dob: user?.dob || "", // Lấy dob từ user nếu có
    phonenumber: user?.phonenumber || "", // Lấy phonenumber từ user nếu có
    avatar: user?.avatar || null, // Avatar có thể là null hoặc URL ảnh
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý khi người dùng upload ảnh avatar
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      avatar: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    // Kiểm tra dữ liệu hợp lệ
    if (/[a-zA-Z]/.test(formData.phonenumber)) {
      Swal.fire("Error", "Nhập đúng số điện thoại", "error");
      setIsLoading(false);
      return;
    }

    const selectedDate = new Date(formData.dob);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      Swal.fire("Error", "Kiểm tra lại ngày sinh", "error");
      setIsLoading(false);
      return;
    }

    try {
      // Tạo FormData để gửi dữ liệu
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("dob", formData.dob);
      formDataToSend.append("phonenumber", formData.phonenumber);

      // Nếu có avatar, thêm vào FormData
      if (formData.avatar instanceof File) {
        formDataToSend.append("avatar", formData.avatar); // Gửi file mới
      }

      // Gửi yêu cầu PUT đến API
      const response = await fetch(
        `http://localhost:8000/api/v1/user/${user.id}`,
        {
          method: "PUT",
          body: formDataToSend, // Sử dụng multipart/form-data
        },
      );

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      if (response.ok) {
        const updatedUser = await response.json();

        // Cập nhật dữ liệu mới vào trạng thái (useAuth)
        setUser(updatedUser);

        // Hiển thị thông báo thành công bằng SweetAlert2
        Swal.fire({
          title: "Thành công!",
          text: "Bạn đã thay đổi thông tin thành công.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/profile"); // Chuyển hướng về trang profile sau khi ấn OK
        });
      }
    } catch (err) {
      setError(err.message);
      Swal.fire("Error", "Cập nhật không thành công!", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-auto items-center justify-center">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Thông tin các nhân
        </Typography>
        <TextField
          label="Fullname"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Day of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          margin="normal"
          fullWidth
          slotProps={{
            inputLabel: { shrink: true },
          }}
          required
        />
        <TextField
          label="Phone Number"
          name="phonenumber"
          type="tel"
          value={formData.phonenumber}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        {/* Trường tải ảnh lên */}
        <Button
          variant="outlined"
          component="label"
          sx={{ marginTop: "10px", marginBottom: "10px" }}
        >
          Tải ảnh đại diện
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
        </Button>

        {/* Xem trước ảnh đã tải lên */}
        {formData.avatar && (
          <Box
            component="img"
            src={
              formData.avatar instanceof File
                ? URL.createObjectURL(formData.avatar) // Nếu là file mới tải lên
                : formData.avatar // Nếu là URL ảnh cũ
            }
            alt="Avatar preview"
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              margin: "10px 0",
            }}
          />
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Thay đổi
        </Button>
      </Box>
    </div>
  );
};

export default ChangeProfile;
