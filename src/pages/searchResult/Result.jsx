import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "../../components/productlist/ProductList";
import HouseSearchBar from "../../components/searchbar/HouseSearchBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SearchResults = () => {
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const itemsPerPage = 8; // Số sản phẩm mỗi trang
  const location = useLocation(); // Lấy query từ URL

  // Các tùy chọn bộ lọc
  const listofkind = ["Nhà cấp 4", "Nhà phố", "Biệt thự", "Khách sạn"];
  const listofflr = ["1 tầng", "2 tầng", "3 tầng", "4 tầng"];
  const listoflength = ["10m", "15m", "20m", "25m"];
  const listofwidth = ["5m", "7m", "10m", "12m"];
  const listofbedrooms = ["3", "4", "5", "6"];

  // Lấy dữ liệu từ query và gọi API
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    if (query) {
      fetchProducts(query);
    }
  }, [location.search]);

  // Gọi API để lấy danh sách sản phẩm
  const fetchProducts = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/product?page=1&pageSize=100&keyword=${encodeURIComponent(query)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const res = await response.json();

      // Chuẩn hóa dữ liệu sản phẩm
      const normalizedProducts = res.data.map((v) => ({
        id: v.id,
        name: v.name || "Sản phẩm không có tên",
        img: v.images?.[0] || "https://via.placeholder.com/150", // Hình ảnh đầu tiên hoặc mặc định
        tang: v.floor || 0, // Số tầng (mặc định 0 nếu thiếu)
        phongngu: v.numberBedRoom || 0, // Số phòng ngủ (mặc định 0 nếu thiếu)
        dientich: v.square || "Không rõ", // Diện tích (mặc định "Không rõ" nếu thiếu)
        price: v.cost || 0, // Giá tiền (mặc định 0 nếu thiếu)
      }));

      setProducts(normalizedProducts); // Cập nhật danh sách sản phẩm
      setTotalPages(Math.ceil(normalizedProducts.length / itemsPerPage)); // Tính tổng số trang
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const handleSearch = (filters) => {
    fetchProducts(filters); // Fetch API khi nhấn Tìm kiếm
  };

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-center">
        <HouseSearchBar
          listofkind={listofkind}
          listofflr={listofflr}
          listoflength={listoflength}
          listofwidth={listofwidth}
          listofbedrooms={listofbedrooms}
          onSearch={handleSearch} // Truyền hàm handleSearch
        />
      </div>
      {products.length === 0 ? (
        <div className="h-s flex w-full flex-auto items-center justify-center">
          <h1 className="max-w-3xl transform p-8 text-3xl font-black uppercase text-deep-purple-50 mix-blend-overlay">
            No designs founded
          </h1>
        </div>
      ) : (
        <div>
          <ProductList products={paginatedProducts} />
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
      )}
    </div>
  );
};

export default SearchResults;
