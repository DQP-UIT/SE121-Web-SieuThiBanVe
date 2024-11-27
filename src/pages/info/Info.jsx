import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Để lấy id từ URL
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Để lấy id từ URL
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import ProductTable from "../../components/table/ProductTable";
import ContactCard from "../../components/contact/ContactCard";
import axios from "axios";
import testpic3d from "../../assets/testpic3d.jpg";
import test3d_1 from "../../assets/test3d_1.jpg"

const fakeProduct = {
  id: "1",
  name: "Sản phẩm giả",
  images: [
    { src: testpic3d, type: "2d" },
    { src: testpic3d, type: "2d" },
    { src: testpic3d, type: "panorama" },
    { src: testpic3d, type: "2d" },
    { src: test3d_1, type: "panorama" },
  ],
  description: "Mô tả sản phẩm giả",
  price: "1000000",
  contact: {
    phone: "0975207829",
    email: "contact@example.com",
  },
  details: {
    size: "10x10",
    material: "Gỗ",
    color: "Nâu",
  },
};
const Info = () => {
  // State lưu trữ thông tin sản phẩm
  const [product, setProduct] = useState(fakeProduct);
  const [loading, setLoading] = useState(true); // Để hiển thị trạng thái loading
  const [error, setError] = useState(null); // Để xử lý lỗi

  // Lấy id từ URL
  const { id } = useParams();

  // Hàm gọi API để lấy thông tin sản phẩm
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     try {
  //       // Gọi API với id sản phẩm
  //       const response = await axios.get(
  //         `http://localhost:8000/api/v1/product/${id}`,
  //       );
  //       setProduct(response.data.data); // Lưu dữ liệu vào state
  //     } catch (err) {
  //       setError("Có lỗi xảy ra khi tải sản phẩm.");
  //     } finally {
  //       setLoading(false); // Sau khi hoàn thành gọi API, set loading = false
  //     }
  //   };

  //   fetchProduct(); // Gọi hàm fetch khi component mount
  // }, [id]); // Chạy lại khi id thay đổi

  // Hiển thị loading hoặc lỗi
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // // Nếu không có dữ liệu sản phẩm
  // if (!product) {
  //   return <div>Sản phẩm không tồn tại.</div>;
  // }

  // State lưu trữ thông tin sản phẩm
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Để hiển thị trạng thái loading
  const [error, setError] = useState(null); // Để xử lý lỗi

  // Lấy id từ URL
  const { id } = useParams();

  // Hàm gọi API để lấy thông tin sản phẩm
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Gọi API với id sản phẩm
        const response = await axios.get(
          `http://localhost:8000/api/v1/product/${id}`,
        );
        setProduct(response.data.data); // Lưu dữ liệu vào state
      } catch (err) {
        setError("Có lỗi xảy ra khi tải sản phẩm.");
      } finally {
        setLoading(false); // Sau khi hoàn thành gọi API, set loading = false
      }
    };

    fetchProduct(); // Gọi hàm fetch khi component mount
  }, [id]); // Chạy lại khi id thay đổi

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
          <Carousel imglist={product.images} />
        </div>
        <div>
          <ContactCard product={product} />
        </div>
      </div>
      <div className="ml-8">
        <ProductTable product={product} />
      </div>
      <div className="mt-6">
        <span className="ml-8 font-sans text-2xl font-semibold">
          Chi tiết bản vẽ
        </span>
        <div>{/* Images*/}</div>
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
