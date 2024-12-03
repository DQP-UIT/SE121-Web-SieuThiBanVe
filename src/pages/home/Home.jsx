import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import ProductList from "../../components/productlist/ProductList";
import React, { useEffect, useState } from "react";
import HouseSearchBar from "../../components/searchbar/HouseSearchBar";
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

  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     img: "https://via.placeholder.com/150",
  //     tang: 2,
  //     phongngu: 3,
  //     dientich: 120,
  //     price: 1000000,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     img: "https://via.placeholder.com/150",
  //     tang: 3,
  //     phongngu: 4,
  //     dientich: 150,
  //     price: 2000000,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     img: "https://via.placeholder.com/150",
  //     tang: 1,
  //     phongngu: 2,
  //     dientich: 90,
  //     price: 1500000,
  //   },
  //   {
  //     id: 4,
  //     name: "Product 4",
  //     img: "https://via.placeholder.com/150",
  //     tang: 2,
  //     phongngu: 3,
  //     dientich: 110,
  //     price: 1800000,
  //   },
  //   {
  //     id: 5,
  //     name: "Product 5",
  //     img: "https://via.placeholder.com/150",
  //     tang: 3,
  //     phongngu: 5,
  //     dientich: 200,
  //     price: 2500000,
  //   },
  //   {
  //     id: 6,
  //     name: "Product 6",
  //     img: "https://via.placeholder.com/150",
  //     tang: 1,
  //     phongngu: 1,
  //     dientich: 70,
  //     price: 900000,
  //   },
  //   {
  //     id: 7,
  //     name: "Product 7",
  //     img: "https://via.placeholder.com/150",
  //     tang: 2,
  //     phongngu: 3,
  //     dientich: 1300,
  //     price: 1700000,
  //   },
  //   {
  //     id: 8,
  //     name: "Product 8",
  //     img: "https://via.placeholder.com/150",
  //     tang: 4,
  //     phongngu: 6,
  //     dientich: 250,
  //     price: 3000000,
  //   },
  // ];
  const user = {
    _id: "12345",
    name: "John Doe",
    birthday: "1990-01-01",
    numofdesign: 10,
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
  };
  const listofkind = ["Nhà phố", "Biệt thự", "Căn hộ", "Nhà cấp 4"];
  const listofflr = ["1 tầng", "2 tầng", "3 tầng", "4 tầng"];
  const listoflength = ["10m", "15m", "20m", "25m"];
  const listofwidth = ["5m", "7m", "10m", "12m"];
  return (
    <div className="w-full bg-transparent">
      <div>
        <div className="w-full flex flex-auto items-center justify-center">
          <img src="src/assets/HomePott.svg" className="max-w-[1400px] object-fill" />
        </div>
        <div className="flex w-full justify-center">
          <HouseSearchBar
            listofkind={listofkind}
            listofflr={listofflr}
            listoflength={listoflength}
            listofwidth={listofwidth}
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
