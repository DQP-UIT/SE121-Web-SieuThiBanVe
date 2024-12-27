import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { basicPackageEs } from "./estimateBasicAlgorithm";
import { standardPackageEs } from "./estimateStandardAlgorithm";
import { premiumPackageEs } from "./estimatePremiumAlgorithm";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FoundationIcon from "@mui/icons-material/Foundation";
import RoofingIcon from "@mui/icons-material/Roofing";
import HomeIcon from "@mui/icons-material/Home";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import YardIcon from "@mui/icons-material/Yard";
import PoolIcon from "@mui/icons-material/Pool";
import ElevatorIcon from "@mui/icons-material/Elevator";
import HomeWorkIcon from "@mui/icons-material/HomeWork"; // Alternative icon

const EstimateResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const diaDiem = params.get("diaDiem");
  const loaiCongTrinh = params.get("loaiCongTrinh");
  const formdata = JSON.parse(params.get("formdata"));

  const basicCosts = {
    foundationCost: basicPackageEs.foundationCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    roofCost: basicPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata),
    structureCost: basicPackageEs.structureCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    rawConstructionCost: basicPackageEs.rawConstructionCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    finishingCost: basicPackageEs.finishingCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    demolitionCost: basicPackageEs.demolitionCost(diaDiem, loaiCongTrinh),
    gardenCost: basicPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata),
    basementCost: basicPackageEs.basementCost(diaDiem, loaiCongTrinh, formdata),
    poolCost: basicPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata),
    elevatorCost: basicPackageEs.elevatorCost(diaDiem, loaiCongTrinh, formdata),
    totalCost: basicPackageEs.totalCost(diaDiem, loaiCongTrinh, formdata),
  };

  const standardCosts = {
    foundationCost: standardPackageEs.foundationCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    roofCost: standardPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata),
    structureCost: standardPackageEs.structureCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    rawConstructionCost: standardPackageEs.rawConstructionCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    finishingCost: standardPackageEs.finishingCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    gardenCost: standardPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata),
    demolitionCost: standardPackageEs.demolitionCost(diaDiem, loaiCongTrinh),
    basementCost: standardPackageEs.basementCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    poolCost: standardPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata),
    elevatorCost: standardPackageEs.elevatorCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    totalCost: standardPackageEs.totalCost(diaDiem, loaiCongTrinh, formdata),
  };

  const premiumCosts = {
    foundationCost: premiumPackageEs.foundationCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    roofCost: premiumPackageEs.roofCost(diaDiem, loaiCongTrinh, formdata),
    structureCost: premiumPackageEs.structureCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    rawConstructionCost: premiumPackageEs.rawConstructionCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    finishingCost: premiumPackageEs.finishingCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    gardenCost: premiumPackageEs.gardenCost(diaDiem, loaiCongTrinh, formdata),
    demolitionCost: premiumPackageEs.demolitionCost(diaDiem, loaiCongTrinh),
    basementCost: premiumPackageEs.basementCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    poolCost: premiumPackageEs.poolCost(diaDiem, loaiCongTrinh, formdata),
    elevatorCost: premiumPackageEs.elevatorCost(
      diaDiem,
      loaiCongTrinh,
      formdata,
    ),
    totalCost: premiumPackageEs.totalCost(diaDiem, loaiCongTrinh, formdata),
  };

  const renderCosts = (costs, packageName) => {
    const rows = [
      { stt: 1, component: "Chi phí móng nhà", cost: costs.foundationCost },
      { stt: 2, component: "Chi phí ngói", cost: costs.roofCost },
      { stt: 3, component: "Chi phí thân nhà", cost: costs.structureCost },
      {
        stt: 4,
        component: "Chi phí phần thô",
        cost: costs.rawConstructionCost,
      },
      { stt: 5, component: "Chi phí hoàn thiện", cost: costs.finishingCost },
    ];

    if (loaiCongTrinh === "Nhà cấp 4") {
      rows.push({
        stt: 6,
        component: "Chi phí sân vườn",
        cost: costs.gardenCost,
      });
    } else if (loaiCongTrinh === "Nhà phố") {
      rows.push(
        { stt: 6, component: "Chi phí tầng hầm", cost: costs.basementCost },
        { stt: 7, component: "Chi phí chống đỡ nhà hàng xóm", cost: costs.demolitionCost },
        { stt: 8, component: "Chi phí thang máy", cost: costs.elevatorCost },
        { stt: 9, component: "Chi phí hồ bơi", cost: costs.poolCost },
      );
    } else if (loaiCongTrinh === "Biệt thự") {
      rows.push(
        { stt: 6, component: "Chi phí tầng hầm", cost: costs.basementCost },
        { stt: 7, component: "Chi phí thang máy", cost: costs.elevatorCost },
        { stt: 8, component: "Chi phí hồ bơi", cost: costs.poolCost },
        { stt: 9, component: "Chi phí sân vườn", cost: costs.gardenCost },
      );
    }

    return (
      <Card
        variant="outlined"
        sx={{ mb: 4, borderRadius: 2, borderColor: "primary.main" }}
      >
        <CardHeader
          title={`Gói ${packageName}`}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            borderRadius: "4px 4px 0 0",
          }}
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Thành phần</TableCell>
                  <TableCell align="right">Thành tiền</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.stt}>
                    <TableCell>{row.stt}</TableCell>
                    <TableCell>{row.component}</TableCell>
                    <TableCell align="right">
                      {row.cost.toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" fontWeight="bold" color="primary">
            Tổng chi phí: {costs.totalCost.toLocaleString()} VND
          </Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Kết quả tính toán kinh phí công trình
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          {renderCosts(basicCosts, "Basic")}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderCosts(standardCosts, "Standard")}
        </Grid>
        <Grid item xs={12} md={4}>
          {renderCosts(premiumCosts, "Premium")}
        </Grid>
      </Grid>
      <Typography color="blue">
        Đơn vị tính: Việt Nam đồng (VND)
      </Typography>
      <Box mt={1} textAlign="center" height={65}>
        <Button
          variant="contained"
          color="primary"
          sx={{width: "120px"}}
          onClick={() => navigate("/estimatePart2")}
        >
          Nhập lại
        </Button>
      </Box>
    </Container>
  );
};

export default EstimateResultPage;
