import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import { useAuth } from "../../store";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Paper,
  Link,
} from "@mui/material";
import Swal from "sweetalert2";
import HomeIcon from "/src/assets/solar_home-bold.svg";

const LoginForm = ({ onClose }) => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const { setUser, setToken } = useAuth();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOnChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      component="main"
      maxWidth="100%"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "fixed",
        inset: 0,
        zIndex: 50,
      }}
    >
      <Paper
        ref={formRef}
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: 450,
        }}
      >
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Sign in to your account
        </Typography>
        <Box
          component="img"
          src={HomeIcon}
          alt="Your Company"
          sx={{
            display: "block",
            margin: "0 auto",
            height: 40,
            width: "auto",
            mb: 2,
          }}
        />
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={account.email}
            onChange={handleOnChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={account.password}
            onChange={handleOnChange}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
            onClick={async (e) => {
              try {
                const res = await axiosInstance.post("/auth/login", {
                  ...account,
                });
                setUser(res.data.user);
                setToken(res.data.accessToken); // Lưu token vào Zustand
                localStorage.setItem("token", res.data.accessToken);
                Swal.fire("Success", "Đăng nhập thành công", "success");
                onClose();
                if (res.data.user.role === "admin") {
                  navigate(`/admin/profile`);
                } else {
                  navigate(`/user/profile`);
                }
              } catch (error) {
                console.log(error);
                Swal.fire("Error", "Email hoặc mật khẩu không đúng", "error");
              }
            }}
          >
            Sign in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
