import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddAccount = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic submit form ở đây
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="w-full flex flex-auto justify-center items-center">
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
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Add Account
        </Typography>
        <TextField
          label="Fullname"
          name="fullname"
          value={formData.fullname}
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
