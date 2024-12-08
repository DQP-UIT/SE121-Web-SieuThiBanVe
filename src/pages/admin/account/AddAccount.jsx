import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Thêm dòng này
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    dob: "",
    email: "",
    password: "",
    phonenumber: "",
    designs: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Track API call state
  const [error, setError] = useState(null); // Store any errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/v1/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      if (response.ok) {
        // Nếu tạo tài khoản thành công
        navigate("/profile"); // Chuyển hướng đến trang /
        toast.success("Thêm user thành công!"); // Hiển thị thông báo
      }

      const data = await response.json();
      console.log("API response:", data);

      // Handle success (e.g., clear form, show success message)
      setFormData({
        // ...
      });
    } catch (err) {
      setError(err.message);
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
          Add Account
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
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Phone Number"
          name="phonenumber"
          type="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <TextField
          label="Designs"
          name="designs"
          type="designs"
          value={formData.designs}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddAccount;
