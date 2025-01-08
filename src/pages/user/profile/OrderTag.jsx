import React, { useState } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import moment from "moment";
import axios from "axios";

const OrderTag = ({ order }) => {
  const [status, setStatus] = useState(order.status);

  const handleEditClick = async () => {
    try {
      // Gọi API để đánh dấu đơn hàng là đã hoàn thành
      await axios.put(`http://localhost:8000/api/v1/order/${order.id}/solve`);
      setStatus("done"); // Cập nhật trạng thái
    } catch (error) {
      console.error("Error marking order as done:", error);
    }
  };

  return (
    <Paper
      style={{ width: "300px", height: "auto", borderRadius: "10px" }}
      className="mb-4 p-4 shadow-md"
    >
      <Typography variant="h5" className="mb-4 font-bold">
        Notes
      </Typography>
      <Box className="mb-4">
        <Typography variant="body2" className="text-gray-600">
          Order ID
        </Typography>
        <Typography variant="body1" className="font-bold">
          {order.id}
        </Typography>
      </Box>
      <Box className="mb-4">
        <Typography variant="body2" className="text-gray-600">
          Name
        </Typography>
        <Typography variant="body1" className="font-bold">
          {order.customerName}
        </Typography>
      </Box>
      <Box className="mb-4">
        <Typography variant="body2" className="text-gray-600">
          Phone Number
        </Typography>
        <Typography variant="body1" className="font-bold">
          {order.customerPhone}
        </Typography>
      </Box>
      <Box className="mb-4">
        <Typography variant="body2" className="text-gray-600">
          Date
        </Typography>
        <Typography variant="body1" className="font-bold">
          {moment(order.date).format("DD/MM/YYYY")}
        </Typography>
      </Box>
      <Box className="flex items-center justify-between">
        <Typography variant="body2" className="text-gray-600">
          Status: {status}
        </Typography>
        <Button
          variant="contained"
          onClick={handleEditClick}
          disabled={status === "done"}
          sx={{
            backgroundColor: status === "done" ? "#EDEEF0" : "primary.main",
            color: status === "done" ? "black" : "white",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            borderRadius: "10px",
          }}
        >
          Mark Done
        </Button>
      </Box>
    </Paper>
  );
};

export default OrderTag;
