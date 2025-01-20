import React, { useState, useEffect } from "react";
import { Box, Pagination, Grid, Button } from "@mui/material";
import OrderTag from "./OrderTag";
import { useAuth } from "../../../store";
import axios from "axios";

const OrderList = () => {
  const [page, setPage] = useState(1);
  const ordersPerPage = 4;
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  // Xử lý chuyển trang
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Gọi API để lấy dữ liệu
  useEffect(() => {
    if (user?.id) {
      axios
        .get(`http://localhost:8000/api/v1/order/user?userId=${user.id}`)
        .then((response) => {
          setOrders(response.data); // Lưu dữ liệu từ API
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    }
  }, [user?.id]); // Chạy lại khi user.id thay đổi

  // Đánh dấu đơn hàng là đã hoàn thành
  const markDone = (id) => {
    axios
      .put(`http://localhost:8000/api/v1/order/${id}/solve`)
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, solved: 1 } : order,
          ),
        );
      })
      .catch((error) => {
        console.error("Error marking order as done:", error);
      });
  };

  // Tính toán phân trang
  const paginatedOrders = orders.slice(
    (page - 1) * ordersPerPage,
    page * ordersPerPage,
  );

  if (orders.length === 0) {
    return (
      <div className="flex max-h-screen w-full flex-auto items-center justify-center">
        <h1 className="max-w-3xl transform p-8 text-3xl font-black uppercase text-deep-purple-300 mix-blend-darken">
          You have no order
        </h1>
      </div>
    );
  }

  return (
    <Box>
      <Grid container spacing={2} padding={2}>
        {paginatedOrders.map((order) => (
          <Grid item key={order.id} xs={3}>
            <OrderTag
              order={{
                id: order.id,
                customerName: order.orderUserName,
                customerPhone: order.orderPhoneNumber,
                date: order.createAt
                  ? new Date(order.createAt).toLocaleDateString()
                  : "Invalid date",
                status: order.solved === 1 ? "done" : "solved",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrderList;
