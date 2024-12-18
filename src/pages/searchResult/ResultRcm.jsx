import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "../../components/productlist/ProductList";
import HouseSearchBar from "../../components/searchbar/HouseSearchBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import axiosInstance from "../../axios";

const SearchResultRcm = () => {
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [filteredProducts, setFilteredProducts] = useState([]); // Sản phẩm đã lọc
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const itemsPerPage = 8; // Số sản phẩm mỗi trang
  const location = useLocation(); // Lấy query từ URL

  // Lấy productTypeId từ URL
  const productTypeId = location.pathname.split("/").pop();

  // Các tùy chọn bộ lọc
  const listofkind = ["Nhà cấp 4", "Nhà phố", "Biệt thự", "Khách sạn"];
  const listofflr = ["1 tầng", "2 tầng", "3 tầng", "4 tầng"];
  const listoflength = ["10m", "15m", "20m", "25m"];
  const listofwidth = ["5m", "7m", "10m", "12m"];
  const listofbedrooms = ["3", "4", "5", "6"];

  // Hàm fetchProducts: Lấy dữ liệu từ API
  const fetchProducts = async (filters) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/product/similar/user-based?limit=100&productTypeId=${productTypeId}`,
      );
      const data = await response.json();

      // Chuẩn hóa dữ liệu
      let normalizedProducts = data.similarProducts.map((product) => ({
        id: product.id,
        name: product.name || "Sản phẩm không có tên",
        img: product.images?.[0] || "https://via.placeholder.com/150",
        tang: product.floor || 0,
        phongngu: product.numberBedRoom || 0,
        dientich: product.square || "Không rõ",
        size: product.size || "Không rõ",
        productTypeId: product.productTypeId || 0,
        price: product.cost || 0,
      }));

      // Áp dụng lọc nếu có filters
      if (filters) {
        const { floor, numberBedRoom, length, width } = filters;
        if (floor) {
          normalizedProducts = normalizedProducts.filter(
            (p) => p.tang === parseInt(floor),
          );
        }
        if (numberBedRoom) {
          normalizedProducts = normalizedProducts.filter(
            (p) => p.phongngu === parseInt(numberBedRoom),
          );
        }
        if (length || width) {
          normalizedProducts = normalizedProducts.filter((p) => {
            const [productWidth, productLength] = p.size
              .replace("m", "")
              .split("x")
              .map(Number);
            if (width && !length) return productWidth === parseInt(width);
            if (length && !width) return productLength === parseInt(length);
            if (width && length)
              return (
                productWidth === parseInt(width) &&
                productLength === parseInt(length)
              );
            return true;
          });
        }
      }

      setProducts(normalizedProducts);
      setFilteredProducts(normalizedProducts);
      setTotalPages(Math.ceil(normalizedProducts.length / itemsPerPage));
    } catch (error) {
      console.error("Lỗi khi fetch dữ liệu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch dữ liệu khi component mount hoặc productTypeId thay đổi
  }, [productTypeId]);

  const handleSearch = (filters) => {
    fetchProducts(filters); // Gọi fetchProducts với bộ lọc
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

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

export default SearchResultRcm;
