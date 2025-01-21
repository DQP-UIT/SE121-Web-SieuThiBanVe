import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const ProductCard = ({ banve }) => {
  const navigate = useNavigate();
  // Kiểm tra nếu đường dẫn hiện tại là `/` hoặc `/product`
  const isRootPath =
    location.pathname === "/" || location.pathname.startsWith("/product");

  useEffect(() => {
    console.log("here");
  }, []);

  const handleOnClick = () => {
    // Navigate or handle click action
  };

  const handleDeleteDesign = (id) => {
    Swal.fire({
      title: "Bạn có chắc muốn xóa bản thiết kế này?",
      text: "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/v1/product/${id}`)
          .then(() => {
            Swal.fire("Đã xóa!", "Bản thiết kế đã được xóa.", "success");
            window.location.reload(); // Reload lại trang để cập nhật giao diện
          })
          .catch((error) => {
            Swal.fire("Lỗi!", "Không thể xóa bản thiết kế.", "error");
            console.error("Error deleting design:", error);
          });
      }
    });
  };

  return (
    <div
      className="m-4 h-24 max-h-28 min-h-fit min-w-72 max-w-80 cursor-pointer overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-transform duration-200 hover:scale-105"
      onClick={handleOnClick}
    >
      <img
        className="h-[200px] w-full select-none object-cover"
        src={banve.img}
        alt={banve.name}
      />

      <div className="p-4">
        <p className="mb-2 select-none text-xs text-green-500">
          Được thiết kế bởi designer
        </p>

        <div className="mb-1 select-none text-lg font-bold">
          {banve.name}
        </div>

        <div className="mb-1 select-none text-xs text-gray-600">
          Số tầng {banve.tang} | Số phòng ngủ {banve.phongngu} | Diện tích{" "}
          {banve.dientich} m²
        </div>

        <div className="flex items-center justify-between">
          <p className="select-none text-2xl text-blue-500">
            {banve.price.toLocaleString()} VND
          </p>
          {!isRootPath && (
            <button
              className="ml-4 select-none rounded bg-red-500 px-4 py-2 text-white hover:bg-red-700"
              onClick={(e) => {
                e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
                handleDeleteDesign(banve.id);
              }}
            >
              Xóa
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
