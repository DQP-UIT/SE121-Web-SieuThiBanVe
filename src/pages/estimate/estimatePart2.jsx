import React, { useEffect, useState } from "react";
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
import { useLocation } from "react-router-dom";

const EstimatePart2 = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const diaDiem = params.get("diaDiem");
  const loaiCongTrinh = params.get("loaiCongTrinh");

  useEffect(() => {
    console.log("Dia Diem: ", diaDiem);
    console.log("Cong Trinh: ", loaiCongTrinh);
  });
  const [formData, setFormData] = useState({
    dienTichDat: null, // number
    dienTichXayDungTang1: null, // number
    soTang: null, // number
    ketCauTumMai: "mái BTCT phẳng, cán nền lát gạch", // string
    dienTichTumMai: null, // number
    thangMay: false, // boolean
    soDiemDungThangMay: null, // number
    tangHam: false, // boolean
    dienTichTangHam: null, // number
    hoBoi: false, // boolean
    dienTichHoBoi: null, // number
    khuDat: "đường dưới 3m", // string
    nhaLanCan: "hai bên có nhà", // string
    matTien: 1, // number (1, 2, or 3)
    ketCauMong: "móng đơn", // string
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
    <div className="h-full w-full">
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
                  aria-valuemin={5}
                  value={formData.dienTichDat}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Diện tích xây dựng tầng 1 (m²)"
                  name="dienTichXayDungTang1"
                  type="number"
                  aria-valuemin={5}
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
                  aria-valuemin={1}
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
              {loaiCongTrinh !== "Nhà cấp 4" && (
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
                      <MenuItem value={false}>Không dùng thang máy</MenuItem>
                      <MenuItem value={true}>Dùng thang máy</MenuItem>
                    </Select>
                  </FormControl>
                  {formData.thangMay === true && (
                    <TextField
                      fullWidth
                      label="Số điểm dừng thang máy"
                      name="soDiemDungThangMay"
                      type="number"
                      aria-valuemin={2}
                      value={formData.soDiemDungThangMay}
                      onChange={handleChange}
                    />
                  )}
                </Stack>
              )}

              {/* Basement Section */}
              {loaiCongTrinh !== "Nhà cấp 4" && (
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
                      <MenuItem value={false}>Không</MenuItem>
                      <MenuItem value={true}>Có</MenuItem>
                    </Select>
                  </FormControl>
                  {formData.tangHam === true && (
                    <TextField
                      fullWidth
                      label="Diện tích tầng hầm (m²)"
                      name="dienTichTangHam"
                      type="number"
                      aria-valuemin={5}
                      value={formData.dienTichTangHam}
                      onChange={handleChange}
                    />
                  )}
                </Stack>
              )}

              {/* Swimming Pool Section */}
              {loaiCongTrinh !== "Nhà cấp 4" && (
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
                      <MenuItem value={false}>Không có hồ bơi</MenuItem>
                      <MenuItem value={true}>Có hồ bơi</MenuItem>
                    </Select>
                  </FormControl>
                  {formData.hoBoi === true && (
                    <TextField
                      fullWidth
                      label="Diện tích hồ bơi (m²)"
                      name="dienTichHoBoi"
                      type="number"
                      aria-valuemin={3}
                      value={formData.dienTichHoBoi}
                      onChange={handleChange}
                    />
                  )}
                </Stack>
              )}

              {/* Facade and Foundation */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                sx={{ mb: 3 }}
              >
                {loaiCongTrinh !== "Biệt thự" ? (
                  <FormControl fullWidth>
                    <InputLabel>Mặt tiền</InputLabel>
                    <Select
                      name="matTien"
                      value={formData.matTien}
                      onChange={handleChange}
                      label="Mặt tiền"
                    >
                      <MenuItem value={1}>Một mặt tiền</MenuItem>
                      <MenuItem value={2}>Hai mặt tiền</MenuItem>
                      <MenuItem value={3}>Ba mặt tiền</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl fullWidth>
                    <InputLabel>Vị trí nhà</InputLabel>
                    <Select
                      name="viTriNha"
                      value={formData.ketCauMong}
                      onChange={handleChange}
                      label="Vị trí nhà"
                    >
                      <MenuItem value="nhà giữa khu đất">
                        Nhà giữa khi đất
                      </MenuItem>
                      <MenuItem value="1 cạnh giáp với hàng xóm">
                        1 cạnh giáp với hàng xóm
                      </MenuItem>
                      <MenuItem value="2 cạnh giáp với hàng xóm">
                        2 cạnh giáp với hàng xóm
                      </MenuItem>
                      <MenuItem value="3 cạnh giáp với hàng xóm">
                        3 cạnh giáp với hàng xóm
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
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
                {/* Nhà phố & Nhà cấp 4 */}
                {loaiCongTrinh !== "Biệt thự" ? (
                  <FormControl fullWidth>
                    <InputLabel>Nhà lân cận</InputLabel>
                    <Select
                      name="nhaLanCan"
                      value={formData.nhaLanCan}
                      onChange={handleChange}
                      label="Nhà lân cận"
                    >
                      <MenuItem value="hai bên có nhà">Hai bên có nhà</MenuItem>
                      <MenuItem value="bên trái có nhà">
                        Bên trái có nhà
                      </MenuItem>
                      <MenuItem value="bên phải có nhà">
                        Bên phải có nhà
                      </MenuItem>
                      <MenuItem value="hai bên không có nhà">
                        Hai bên không có nhà
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <FormControl fullWidth>
                    <InputLabel>Sân vườn</InputLabel>
                    <Select
                      name="sanVuon"
                      value={formData.nhaLanCan}
                      onChange={handleChange}
                      label="Sân vườn"
                    >
                      <MenuItem value="hơn 60% diện tích là cây xanh">
                        hơn 60% diện tích là cây xanh
                      </MenuItem>
                      <MenuItem value="hơn 80% diện tích là cây xanh">
                        hơn 80% diện tích là cây xanh
                      </MenuItem>
                      <MenuItem value="hơn 60% diện tích lát nền hoặc thảm bê tông">
                        hơn 80% diện tích lát nền hoặc thảm bê tông
                      </MenuItem>
                      <MenuItem value="hơn 80% diện tích lát nền hoặc thảm bê tông">
                        hơn 80% diện tích lát nền hoặc thảm bê tông
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
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
                  width: "fit-content",
                  py: 1.5,
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                Tính ngay
              </Button>
              <Button
                type="button"
                variant="contained"
                size="large"
                sx={{
                  width: "fit-content",
                  py: 1.5,
                  bgcolor: "white",
                  "&:hover": { border: "solid black 2px", bgcolor: "white" },
                  border: "solid black 1px",
                  color: "black",
                }}
              >
                Nhập lại
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default EstimatePart2;
