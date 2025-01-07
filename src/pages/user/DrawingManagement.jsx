import React, { useEffect, useState } from "react";
import { useAuth } from "../../store"; // Import useAuth từ zustand
import axios from "axios";
import DesignList from "./designList/DesignList";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { TextField, Box } from "@mui/material";

const DrawingManagement = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng từ useAuth
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [searchQuery, setSearchQuery] = useState(""); // Trạng thái tìm kiếm
  const itemsPerPage = 8; // Số sản phẩm mỗi trang

  useEffect(() => {
    if (user?.id) {
      setIsLoading(true);
      axios
        .get(`http://localhost:8000/api/v1/product/user/${user.id}`)
        .then((res) => {
          setProducts(
            res.data.map((v) => ({
              id: v.id,
              name: v.name,
              img: v.images[0] || "https://via.placeholder.com/150",
              tang: v.floor,
              phongngu: v.numberBedRoom,
              dientich: v.square,
              price: v.cost,
            })),
          );
          setTotalPages(Math.ceil(res.data.length / itemsPerPage));
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setIsLoading(false);
        });
    }
  }, [user]); // Chỉ gọi API khi user thay đổi

  const handleDelete = () => {
    // Handle delete logic here
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // Nếu người dùng chưa đăng nhập, có thể hiển thị một thông báo hoặc redirect
  if (!user) {
    return <div>Vui lòng đăng nhập để xem bản vẽ của bạn.</div>;
  }

  return (
    <div className="h-full min-h-full">
      <div className="pl-20">
        <span className="font-mono select-none text-3xl font-semibold text-white">
          Quản lý bản vẽ
        </span>
      </div>
      <Box className="mt-4 flex w-full justify-center">
        <TextField
          label="Tìm kiếm sản phẩm"
          variant="outlined"
          value={searchQuery}
          color="white"
          onChange={handleSearchChange}
          sx={{
            width: "50%",
            "& .MuiOutlinedInput-root": {
              fieldset: { borderColor: "gray" }, // Viền mặc định
              "&.Mui-focused fieldset": { borderColor: "white" }, // Focus
            },
          }}
          InputProps={{
            style: {
              backgroundColor: "rgb(255,255,255,0.5)",
              color: "white",
            },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
        />
      </Box>
      <div
        className="float-right mr-8 h-12 w-fit select-none rounded-xl border-2 border-white p-2 text-xl text-white hover:scale-105 hover:cursor-pointer"
        onClick={handleDelete}
      >
        Loại bỏ bản thiết kế
      </div>
      <div className="flex h-full min-h-[80vh] w-full min-w-fit items-center justify-center pt-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <DesignList products={paginatedProducts} />
        )}
      </div>
      <Stack
        spacing={2}
        className="pagination mt-4 flex flex-auto items-center justify-center"
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </div>
  );
};

export default DrawingManagement;
