import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import ProductList from "../../components/productlist/ProductList";
import React, { useEffect, useState } from "react";
import SuggestCardList from "../../components/card/SuggestCardList";
import axiosInstance from "../../axios";
import "./Home.css";

const Home = () => {
  const images = [
    "/formkit_dollar.svg",
    "/formkit_dollar.svg",
    "/formkit_dollar.svg",
    "/formkit_dollar.svg",
    // Thêm các URL ảnh khác vào đây
  ];
  const inURL = "entypo_login.svg";
  const imglist = [
    "react.svg",
    "react.svg",
    "react.svg",
    "solar_home-bold.svg",
    "react.svg",
    "solar_home-bold.svg",
    "react.svg",
    "solar_home-bold.svg",
  ];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("product", { params: { page: 1, pageSize: 8 } })
      .then((res) => {
        setProducts(
          res.data.data.map((v) => ({
            id: v.id,
            name: v.name,
            img: v.images[0] || "https://via.placeholder.com/150",
            tang: v.floor,
            phongngu: v.numberBedRoom,
            dientich: v.square,
            price: v.cost,
          })),
        );
      });
  }, []);

  const user = {
    _id: "12345",
    name: "John Doe",
    birthday: "1990-01-01",
    numofdesign: 10,
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  };
  return (
    <div className="w-full h-full bg-transparent">
      <div className="min-h-full h-full">
        <div className="flex w-full flex-auto items-center justify-center">
          <img
            src="src/assets/HomePott.svg"
            className="w-full object-fill"
          />
        </div>
        <SuggestCardList />
        <div className="pl-20">
          <span className="font-mono text-3xl font-semibold">
            Những mẫu nhà thiết kế đẹp tại Việt Nam
          </span>
        </div>
        <div className="flex w-full min-w-fit items-center justify-center pt-10">
          <ProductList products={products} />
        </div>
      </div>
      <span className="customer-reviews">
        Khách hàng nói gì về siêu thị bản vẽ
      </span>
      <div className="flex-row-50">
        <div className="rectangle-51">
          <span className="customer-testimonial">
            “Siêu Thị Bản Vẽ là một giải pháp tuyệt với cho các cá nhân chưa có
            kinh nghiệm về bản vẽ thiết kế. Cung cấp cho họ lựa chọn đơn giản,
            hỗ trỡ tốt nhất trong khoảng giá.Hãy đến STBV nếu bạn cần xây nhà”
          </span>
          <span className="customer-name">Ninh Diêu</span>
          <div className="flex-row-52">
            <div className="ellipse" />
            <span className="ceo-company">CEO công ty xây dựng</span>
          </div>
        </div>
        <div className="rectangle-53">
          <span className="customer-testimonial-54">
            “Siêu Thị Bản Vẽ là một giải pháp tuyệt với cho các cá nhân chưa có
            kinh nghiệm về bản vẽ thiết kế. Cung cấp cho họ lựa chọn đơn giản,
            hỗ trỡ tốt nhất trong khoảng giá.Hãy đến STBV nếu bạn cần xây nhà”
          </span>
          <span className="customer-name-55">Ninh Diêu</span>
          <div className="flex-row-df">
            <div className="ellipse-56" />
            <span className="ceo-company-57">CEO công ty xây dựng</span>
          </div>
        </div>
        <div className="rectangle-58">
          <span className="customer-testimonial-59">
            “Siêu Thị Bản Vẽ là một giải pháp tuyệt với cho các cá nhân chưa có
            kinh nghiệm về bản vẽ thiết kế. Cung cấp cho họ lựa chọn đơn giản,
            hỗ trỡ tốt nhất trong khoảng giá.Hãy đến STBV nếu bạn cần xây nhà”
          </span>
          <span className="customer-name-5a">Ninh Diêu</span>
          <div className="flex-row-ab">
            <div className="ellipse-5b" />
            <span className="ceo-company-5c">CEO công ty xây dựng</span>
          </div>
        </div>
      </div>
      <span className="store-locations">Hệ thống siêu thị khắp cả nước</span>
      <div className="rectangle-5d">
        <div className="flex-row-deca">
          <div className="line-5e" />
          <div className="line-5f" />
          <div className="line-60" />
          <div className="ph-building-fill">
            <div className="vector-61" />
          </div>
          <div className="paint-palette-solid">
            <div className="vector-62" />
          </div>
          <div className="house-heart-fill">
            <div className="group-63" />
          </div>
          <div className="location-solid" />
          <span className="du-an">Dự án</span>
          <span className="tinh-thanh">Tỉnh thành</span>
          <span className="chi-nhanh">Chi nhánh</span>
          <span className="ban-ve">Bản vẽ</span>
        </div>
        <div className="flex-row-b">
          <span className="text-4f">
            100
            <br />
          </span>
          <span className="text-50">50</span>
          <span className="text-51">
            1000+
            <br />
          </span>
          <span className="text-52">
            1000+
            <br />
          </span>
        </div>
      </div>
      <div className="flex-row-f">
        <div className="rectangle-64" />
        <div className="rectangle-65">
          <div className="thiet-ke-phu-hop">
            <span className="thiet-ke-phu-hop-66">
              Bạn chưa chọn được thiết kế phù hợp?
            </span>
            <span className="tu-van-mien-phi">
              Chúng tôi tư vấn hoàn toàn miễn phí
            </span>
          </div>
          <div className="rectangle-67" />
          <input
            id="phone-number"
            type="tel"
            className="so-dien-thoai-lien-lac"
            placeholder="Số điện thoại liên lạc"
          />
          <div class="button-container">
            <button class="custom-button">Liên hệ ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
