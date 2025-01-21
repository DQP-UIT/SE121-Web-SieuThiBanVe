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
import axiosInstance from "../../axios";
import ProductList from "../../components/productlist/ProductList";

const Info = () => {
  const { user } = useAuth();
  // State lưu trữ thông tin sản phẩm
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true); // Để hiển thị trạng thái loading
  const [error, setError] = useState(null); // Để xử lý lỗi
  const [products, setProducts] = useState([]);

  // Lấy id từ URL
  const { id } = useParams();
  const [userId, setUserId] = useState(null); //fake của chủ bản vẽ
  const location = useLocation(); // Lấy thông tin URL hiện tại

  useEffect(() => {
    setUserId(8); // Cập nhật userId thành 8
  }, []); // Dùng useEffect để chỉ chạy một lần khi component mount

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

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

  useEffect(() => {
    if (!id) return; // Đảm bảo id tồn tại trước khi gọi API

    axiosInstance
      .get(`product/similar/user-based/${id}`, { params: { limit: 8 } }) // Gọi API với id từ useParams
      .then((res) => {
        setProducts(
          res.data.map((v) => ({
            id: v.id,
            name: v.name,
            img: v.images[0] || "https://via.placeholder.com/150", // Lấy ảnh đầu tiên
            tang: v.floor,
            phongngu: v.numberBedRoom,
            dientich: v.square,
            price: v.cost,
          })),
        );
      })
      .catch((err) => {
        console.error("Error fetching similar products:", err);
      });
  }, [id]); // Thêm id vào dependencies để gọi lại khi id thay đổi

  // Kiểm tra URL có phải là đường dẫn yêu cầu hay không
  // Kiểm tra xem đường dẫn có bắt đầu bằng "/designinfo"
  const shouldHideContactCard = location.pathname.startsWith("/designinfo");

  // Hiển thị loading hoặc lỗi
  if (loading) {
    return (
      <div className="mt-12 flex h-[80vh] w-full flex-auto justify-center text-3xl uppercase text-blue-300">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-12 flex h-[80vh] w-full flex-auto justify-center text-3xl uppercase text-blue-300">
        {error}
      </div>
    );
  }

  // Nếu không có dữ liệu sản phẩm
  if (!product) {
    return (
      <div className="mt-12 flex h-[80vh] w-full flex-auto justify-center text-3xl uppercase text-blue-300">
        Sản phẩm không tồn tại.
      </div>
    );
  }

  const files = product.files;

  return (
    <div className="p-4">
      <div className="mt-4 w-full">
        <span className="ml-8 font-sans text-2xl md:text-3xl font-semibold">
          {product.name}
        </span>
      </div>
      <div className="mt-12 flex flex-col md:flex-row">
        <div className="md:ml-28 md:basis-2/3">
          <Carousel imglist={product.images} />
        </div>
        <div className="mt-8 p-8 md:mt-0">
          {/* Truyền id vào ContactCard */}
          {/* Chỉ hiển thị ContactCard nếu đường dẫn không phải là "/drawingmanagement/product/11" */}
          {!shouldHideContactCard && (
            <ContactCard product={product} productId={id} userId={userId} />
          )}
        </div>
      </div>
      <div className="ml-8 mt-6">
        <span className="font-sans text-xl md:text-2xl font-semibold">
          Thông số bản vẽ
        </span>
        <div className="ml-8 mt-6 w-full md:w-2/3">
          <ProductTable product={product} />
        </div>
      </div>
      <div className="ml-8 mt-6">
        <span className="font-sans text-xl md:text-2xl font-semibold">
          Mô tả sản phẩm
        </span>
        <div
          className="mt-4 pr-4 md:pr-40 font-sans text-base md:text-xl"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
      <div className="ml-8 mt-6">
        <span className="font-sans text-xl md:text-2xl font-semibold">
          File xem trước
        </span>
        <div className="mt-4">
          {files && files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className="mb-2">
                <a
                  href={file}
                  download
                  className="text-blue-500 hover:underline"
                >
                  {file.split("/").pop()}
                </a>
              </div>
            ))
          ) : (
            <div className="font-sans text-base md:text-xl">
              Không có file nào để xem trước.
            </div>
          )}
        </div>
      </div>
      <div className="ml-8 mt-6">
        <span className="font-sans text-xl md:text-2xl font-semibold">
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
        <span className="ml-8 font-sans text-xl md:text-2xl font-semibold">
          Phù hợp với bạn
        </span>
        <div className="flex w-full">
          <div className="flex w-full min-w-fit items-center justify-center pt-10">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;