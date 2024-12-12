import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import ProductTable from "../../components/table/ProductTable";
import ContactCard from "../../components/contact/ContactCard";
import axios from "axios";
import ImageLoader from "./ImageLoader";
import test3d1 from "../../assets/test3d_1.jpg";
import test3d2 from "../../assets/testpic3d.jpg";
import { useAuth } from "../../store";

const Info = () => {
  const { user } = useAuth();
  // State lưu trữ thông tin sản phẩm
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Để hiển thị trạng thái loading
  const [error, setError] = useState(null); // Để xử lý lỗi

  // Lấy id từ URL
  const { id } = useParams();
  const [userId, setUserId] = useState(null); //fake của chủ bản vẽ
  const location = useLocation(); // Lấy thông tin URL hiện tại

  useEffect(() => {
    setUserId(8); // Cập nhật userId thành 8
  }, []); // Dùng useEffect để chỉ chạy một lần khi component mount

  // Hàm gọi API để lấy thông tin sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        //Gọi API với id sản phẩm
        const response = await axios.get(
          `http://localhost:8000/api/v1/product/${id}`,
        );
        setProduct(response.data.data); // Lưu dữ liệu vào state
        console.log("respone", response.data.data);
        console.log("product", product);
      } catch (err) {
        setError("Có lỗi xảy ra khi tải sản phẩm.");
      } finally {
        setLoading(false); // Sau khi hoàn thành gọi API, set loading = false
      }
    };

    fetchProduct(); // Gọi hàm fetch khi component mount
  }, [id]); // Chạy lại khi id thay đổi

  // Kiểm tra URL có phải là đường dẫn yêu cầu hay không
  // Kiểm tra xem đường dẫn có bắt đầu bằng "/drawingmanagement/product"
  const shouldHideContactCard = location.pathname.startsWith(
    "/drawingmanagement/product",
  );

  // Hiển thị loading hoặc lỗi
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Nếu không có dữ liệu sản phẩm
  if (!product) {
    return <div>Sản phẩm không tồn tại.</div>;
  }

  return (
    <div>
      <div>
        <span className="ml-8 font-sans text-3xl font-semibold">
          {product.name}
        </span>
      </div>
      <div className="mt-12 flex">
        <div className="ml-28 basis-2/3">
          <Carousel imglist={product.images} />
        </div>
        <div>
          {/* Truyền id vào ContactCard */}
          {/* Chỉ hiển thị ContactCard nếu đường dẫn không phải là "/drawingmanagement/product/11" */}
          {!shouldHideContactCard && (
            <ContactCard product={product} productId={id} userId={userId} />
          )}
        </div>
      </div>
      <div className="ml-8 mt-6 w-2/3">
        <ProductTable product={product} />
      </div>
      <div className="ml-8 mt-6">
        <span className="font-sans text-2xl font-semibold">
          Chi tiết bản vẽ
        </span>
        <div className="mt-6 flex w-full flex-auto items-start justify-center">
          <ImageLoader
            images2dct={product.images1}
            images2d={product.images}
            images3d={product.images2}
          />
        </div>
      </div>
      <div>
        <span className="ml-8 font-sans text-2xl font-semibold">
          Phù hợp với bạn
        </span>
        <div>{/* Product Tags as recommendation*/}</div>
      </div>
    </div>
  );
};

export default Info;
