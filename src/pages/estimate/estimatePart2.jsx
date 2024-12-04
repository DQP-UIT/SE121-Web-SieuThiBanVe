import React, { useState } from "react";
import {
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Button,
  Box,
  Container,
  Alert,
  Stack,
} from "@mui/material";

const EstimatePart2 = () => {
  const [formData, setFormData] = useState({
    dienTichDat: "2",
    dienTichXayDungTang1: "",
    soTang: "",
    ketCauTumMai: "mái BTCT phẳng, cán nền lát gạch",
    dienTichTumMai: "",
    thangMay: "Không dùng thang máy",
    soDiemDungThangMay: "",
    tangHam: "không",
    dienTichTangHam: "",
    hoBoi: "Không có hồ bơi",
    dienTichHoBoi: "",
    khuDat: "đường dưới 3m",
    nhaLanCan: "hai bên có nhà",
    matTien: "một mặt tiền",
    ketCauMong: "móng đơn",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
  };

  return (
    <div className="w-full h-full">
      <Container maxWidth="lg" sx={{ py: 4, minHeight: "120vh" }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Typography
              variant="h4"
              sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
            >
              Nhập thông số công trình
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Basic Information */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <TextField
                  fullWidth
                  label="Diện tích đất (m²)"
                  name="dienTichDat"
                  type="number"
                  value={formData.dienTichDat}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Diện tích xây dựng tầng 1 (m²)"
                  name="dienTichXayDungTang1"
                  type="number"
                  value={formData.dienTichXayDungTang1}
                  onChange={handleChange}
                />
              </Stack>

              {/* Floor Information */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <TextField
                  fullWidth
                  label="Số tầng"
                  name="soTang"
                  type="number"
                  value={formData.soTang}
                  onChange={handleChange}
                />
                <FormControl fullWidth>
                  <InputLabel>Kết cấu tum mái</InputLabel>
                  <Select
                    name="ketCauTumMai"
                    value={formData.ketCauTumMai}
                    onChange={handleChange}
                    label="Kết cấu tum mái"
                  >
                    <MenuItem value="mái BTCT phẳng, cán nền lát gạch">
                      Mái BTCT phẳng, cán nền lát gạch
                    </MenuItem>
                    <MenuItem value="mái ngói">Mái ngói</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Additional Features */}
              {/* Elevator Section */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ mb: 3 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Thang máy</InputLabel>
                  <Select
                    name="thangMay"
                    value={formData.thangMay}
                    onChange={handleChange}
                    label="Thang máy"
                  >
                    <MenuItem value="Không dùng thang máy">
                      Không dùng thang máy
                    </MenuItem>
                    <MenuItem value="Dùng thang máy">Dùng thang máy</MenuItem>
                  </Select>
                </FormControl>
                {formData.thangMay === "Dùng thang máy" && (
                  <TextField
                    fullWidth
                    label="Số điểm dừng thang máy"
                    name="soDiemDungThangMay"
                    type="number"
                    value={formData.soDiemDungThangMay}
                    onChange={handleChange}
                  />
                )}
              </Stack>

              {/* Basement Section */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ mb: 3 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Tầng hầm</InputLabel>
                  <Select
                    name="tangHam"
                    value={formData.tangHam}
                    onChange={handleChange}
                    label="Tầng hầm"
                  >
                    <MenuItem value="không">Không</MenuItem>
                    <MenuItem value="có">Có</MenuItem>
                  </Select>
                </FormControl>
                {formData.tangHam === "có" && (
                  <TextField
                    fullWidth
                    label="Diện tích tầng hầm (m²)"
                    name="dienTichTangHam"
                    type="number"
                    value={formData.dienTichTangHam}
                    onChange={handleChange}
                  />
                )}
              </Stack>

              {/* Swimming Pool Section */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ mb: 3 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Hồ bơi</InputLabel>
                  <Select
                    name="hoBoi"
                    value={formData.hoBoi}
                    onChange={handleChange}
                    label="Hồ bơi"
                  >
                    <MenuItem value="Không có hồ bơi">Không có hồ bơi</MenuItem>
                    <MenuItem value="Có hồ bơi">Có hồ bơi</MenuItem>
                  </Select>
                </FormControl>
                {formData.hoBoi === "Có hồ bơi" && (
                  <TextField
                    fullWidth
                    label="Diện tích hồ bơi (m²)"
                    name="dienTichHoBoi"
                    type="number"
                    value={formData.dienTichHoBoi}
                    onChange={handleChange}
                  />
                )}
              </Stack>

              {/* Facade and Foundation */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ mb: 3 }}
              >
                <FormControl fullWidth>
                  <InputLabel>Mặt tiền</InputLabel>
                  <Select
                    name="matTien"
                    value={formData.matTien}
                    onChange={handleChange}
                    label="Mặt tiền"
                  >
                    <MenuItem value="một mặt tiền">Một mặt tiền</MenuItem>
                    <MenuItem value="hai mặt tiền">Hai mặt tiền</MenuItem>
                    <MenuItem value="ba mặt tiền">Ba mặt tiền</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Kết cấu móng</InputLabel>
                  <Select
                    name="ketCauMong"
                    value={formData.ketCauMong}
                    onChange={handleChange}
                    label="Kết cấu móng"
                  >
                    <MenuItem value="móng đơn">Móng đơn</MenuItem>
                    <MenuItem value="móng băng">Móng băng</MenuItem>
                    <MenuItem value="móng bè">Móng bè</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              {/* Construction Details */}
              <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                <FormControl fullWidth>
                  <InputLabel>Khu đất</InputLabel>
                  <Select
                    name="khuDat"
                    value={formData.khuDat}
                    onChange={handleChange}
                    label="Khu đất"
                  >
                    <MenuItem value="đường dưới 3m">Đường dưới 3m</MenuItem>
                    <MenuItem value="đường trên 3m">Đường trên 3m</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Nhà lân cận</InputLabel>
                  <Select
                    name="nhaLanCan"
                    value={formData.nhaLanCan}
                    onChange={handleChange}
                    label="Nhà lân cận"
                  >
                    <MenuItem value="hai bên có nhà">Hai bên có nhà</MenuItem>
                    <MenuItem value="bên trái có nhà">Bên trái có nhà</MenuItem>
                    <MenuItem value="bên phải có nhà">Bên phải có nhà</MenuItem>
                    <MenuItem value="hai bên không có nhà">
                      Hai bên không có nhà
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Alert severity="info">
                Hướng dẫn: Số tầng là chưa bao gồm tum mái. Trường hợp nhà 3
                tầng, không tum mái, nhưng tầng 3 muốn lợp tôn toàn bộ thì nhập
                "số tầng là 02 tầng, diện tích tum mái bằng diện tích tầng 2"
              </Alert>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  width: "100%",
                  py: 1.5,
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Tính toán chi phí
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default EstimatePart2;
