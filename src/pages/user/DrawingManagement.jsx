import React, { useEffect, useState } from "react";
import { useAuth } from "../../store"; // Import useAuth từ zustand
import axiosInstance from "../../axios";
import ProductList from "../../components/productlist/ProductList";

const DrawingManagement = () => {
  const { user } = useAuth(); // Lấy thông tin người dùng từ useAuth
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Kiểm tra nếu user đã có thông tin (đã đăng nhập)
    if (user && user.id) {
      // Gọi API với user.id từ useAuth
      axiosInstance
        .get(`http://localhost:8000/api/v1/product/user/${user.id}`) // Sử dụng user.id thay vì hardcode
        .then((res) => {
          // Dữ liệu trả về từ API, cập nhật vào state
          setProducts(
            res.data.map((v) => ({
              id: v.id,
              name: v.name,
              img: v.images[0] || "https://via.placeholder.com/150", // Nếu không có ảnh, hiển thị placeholder
              tang: v.floor,
              phongngu: v.numberBedRoom,
              dientich: v.square,
              price: v.cost,
            })),
          );
        })
        .catch((err) => {
          // In lỗi nếu có sự cố
          console.error("Error fetching products:", err);
        });
    }
  }, [user]); // Mỗi khi user thay đổi (đăng nhập/đăng xuất), sẽ gọi lại API

  // Nếu người dùng chưa đăng nhập, có thể hiển thị một thông báo hoặc redirect
  if (!user) {
    return <div>Vui lòng đăng nhập để xem bản vẽ của bạn.</div>;
  }

  return (
    <div className="h-full min-h-full">
      <div className="pl-20">
        <span className="font-mono text-3xl font-semibold">Quản lý bản vẽ</span>
      </div>
      <div className="flex w-full min-w-fit items-center justify-center pt-10">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default DrawingManagement;
