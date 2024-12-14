import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../store"; // Import useAuth hook
import { Box, Typography, Paper, Grid, CircularProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Import icon tick màu xanh

export default function OrderManagement() {
  const { user } = useAuth(); // Lấy user từ useAuth hook
  const [solvedOrders, setSolvedOrders] = useState([]); // Đơn hàng đã giải quyết
  const [unsolvedOrders, setUnsolvedOrders] = useState([]); // Đơn hàng chưa giải quyết
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Trạng thái lỗi

  useEffect(() => {
    if (!user || !user.id) {
      setError("Bạn cần đăng nhập để xem đơn hàng.");
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        // Gọi API lấy đơn hàng solved=1
        const solvedResponse = await axios.get(
          "http://localhost:8000/api/v1/order/user/status",
          {
            params: { userId: user.id, solved: 1 },
          },
        );

        // Gọi API lấy đơn hàng solved=0
        const unsolvedResponse = await axios.get(
          "http://localhost:8000/api/v1/order/user/status",
          {
            params: { userId: user.id, solved: 0 },
          },
        );

        setSolvedOrders(solvedResponse.data); // Lưu danh sách đã giải quyết
        setUnsolvedOrders(unsolvedResponse.data); // Lưu danh sách chưa giải quyết
      } catch (error) {
        setError("Có lỗi xảy ra khi tải dữ liệu đơn hàng.");
      } finally {
        setLoading(false); // Kết thúc trạng thái tải dữ liệu
      }
    };

    fetchOrders();
  }, [user]);

  const handleSolveOrder = async (id) => {
    // Hiển thị thông báo xác nhận
    const confirm = window.confirm(
      "Bạn có chắc chắn muốn hoàn thành đơn hàng này?",
    );
    if (!confirm) {
      return; // Nếu người dùng chọn "Cancel", dừng xử lý
    }
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/order/${id}/solve`,
      );
      if (response.status === 200 && response.data.affected === 1) {
        // Cập nhật danh sách: chuyển đơn hàng từ "chưa giải quyết" sang "đã giải quyết"
        const updatedOrder = unsolvedOrders.find((order) => order.id === id);
        setUnsolvedOrders((prev) => prev.filter((order) => order.id !== id));
        setSolvedOrders((prev) => [...prev, updatedOrder]);
      }
    } catch (error) {
      console.error("Có lỗi xảy ra khi cập nhật đơn hàng:", error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px" }}>
        <CircularProgress />
        <Typography variant="h6" mt={2}>
          Đang tải danh sách đơn hàng...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <Typography variant="h6">{error}</Typography>
      </Box>
    );
  }

  const OrderCard = ({ order, showTick }) => (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        marginBottom: "15px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Hàng chứa ID và icon tick */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          ID: {order.id}
        </Typography>
        {showTick && (
          <CheckCircleIcon
            sx={{ color: "green", fontSize: 30, cursor: "pointer" }}
            onClick={() => handleSolveOrder(order.id)} // Gọi API khi nhấn vào icon tick
          />
        )}
      </Box>

      <Typography variant="body1">
        <strong>Khách hàng:</strong> {order.orderUserName}
      </Typography>
      <Typography variant="body1">
        <strong>Số điện thoại:</strong> {order.orderPhoneNumber}
      </Typography>
      <Typography variant="body1">
        <strong>Thành phố:</strong> {order.orderCity}
      </Typography>
      <Typography variant="body1">
        <strong>Địa chỉ:</strong> {order.orderAdress}
      </Typography>
      <Typography variant="body1">
        <strong>Ngày tạo:</strong>{" "}
        {new Date(order.createAt).toLocaleString("vi-VN")}
      </Typography>
      <Typography variant="body1">
        <strong>Trạng thái:</strong>{" "}
        {order.solved === 1 ? "Đã giải quyết" : "Chưa giải quyết"}
      </Typography>
      <Typography variant="body1">
        <strong>Product ID:</strong> {order.productId}
      </Typography>
    </Paper>
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Quản lý đơn đặt hàng
      </Typography>

      {/* Đơn hàng đã giải quyết */}
      <Box mb={5}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Đơn hàng đã giải quyết
        </Typography>
        {solvedOrders.length > 0 ? (
          <Grid container spacing={2}>
            {solvedOrders.map((order) => (
              <Grid item xs={12} sm={6} md={4} key={order.id}>
                <OrderCard order={order} showTick={false} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>Không có đơn hàng đã giải quyết.</Typography>
        )}
      </Box>

      {/* Đơn hàng chưa giải quyết */}
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          Đơn hàng chưa giải quyết
        </Typography>
        {unsolvedOrders.length > 0 ? (
          <Grid container spacing={2}>
            {unsolvedOrders.map((order) => (
              <Grid item xs={12} sm={6} md={4} key={order.id}>
                <OrderCard
                  order={order}
                  showTick={true} // Hiển thị tick cho đơn hàng chưa giải quyết
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>Không có đơn hàng chưa giải quyết.</Typography>
        )}
      </Box>
    </Box>
  );
}
