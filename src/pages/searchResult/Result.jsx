import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductList from "../../components/productlist/ProductList";
import HouseSearchBar from "../../components/searchbar/HouseSearchBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const location = useLocation();
  const navigate = useNavigate();
  const listofkind = ["Nhà phố", "Biệt thự", "Căn hộ", "Nhà cấp 4"];
  const listofflr = ["1 tầng", "2 tầng", "3 tầng", "4 tầng"];
  const listoflength = ["10m", "15m", "20m", "25m"];
  const listofwidth = ["5m", "7m", "10m", "12m"];
  const listofbedrooms = ["3", "4", "5", "6"];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

    // Call API to fetch search results based on query
    // This is a placeholder for the actual API call
    fetchProducts(query);
  }, [location.search]);

  const fetchProducts = (query) => {
    // Placeholder for API call
    // Replace this with actual API call to fetch products based on query
    // prettier-ignore
    const fetchedProducts = [
        // Mock data
        { id: 1, name: "Product 1", img: "image1.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 2, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 3, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 4, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 5, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 6, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 7, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 8, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 9, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        { id: 10, name: "Product 2", img: "image2.jpg", tang: 2, phongngu: 3, dientich: 100, price: 1000000 },
        // Add more mock products as needed
      ];

    setProducts(fetchedProducts);
    setTotalPages(Math.ceil(fetchedProducts.length / itemsPerPage));
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
        />
      </div>
      {products.length === 0 ? (
        <div className="w-full h-s flex flex-auto justify-center items-center">
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
