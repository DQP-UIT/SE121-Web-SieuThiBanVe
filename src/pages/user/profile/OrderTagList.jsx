import React, { useState } from "react";
import { Box, Pagination, Grid } from "@mui/material";
import OrderTag from "./OrderTag";

const fakeOrders = [
  {
    id: 1,
    customerName: "John Doe",
    customerPhone: "1234567890",
    date: "2023-10-01",
    status: "new",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    customerPhone: "0987654321",
    date: "2023-10-02",
    status: "new",
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    customerPhone: "1122334455",
    date: "2023-10-03",
    status: "new",
  },
  {
    id: 4,
    customerName: "Bob Brown",
    customerPhone: "6677889900",
    date: "2023-10-04",
    status: "new",
  },
  {
    id: 5,
    customerName: "Charlie Davis",
    customerPhone: "2233445566",
    date: "2023-10-05",
    status: "new",
  },
  {
    id: 6,
    customerName: "Diana Evans",
    customerPhone: "3344556677",
    date: "2023-10-06",
    status: "new",
  },
  {
    id: 7,
    customerName: "Eve Foster",
    customerPhone: "4455667788",
    date: "2023-10-07",
    status: "new",
  },
  {
    id: 8,
    customerName: "Frank Green",
    customerPhone: "5566778899",
    date: "2023-10-08",
    status: "new",
  },
];

const OrderList = () => {
  const [page, setPage] = useState(1);
  const ordersPerPage = 4;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedOrders = fakeOrders.slice(
    (page - 1) * ordersPerPage,
    page * ordersPerPage,
  );

  return (
    <Box>
      <Grid container spacing={2}>
        {paginatedOrders.map((order) => (
          <Grid item key={order.id} xs={3}>
            <OrderTag order={order} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={Math.ceil(fakeOrders.length / ordersPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default OrderList;
