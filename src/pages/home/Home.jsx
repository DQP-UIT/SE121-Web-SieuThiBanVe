import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import ProductList from "../../components/productlist/ProductList";
import SuggestCardList from "../../components/card/SuggestCardList";
import axiosInstance from "../../axios";
import CustomerReviews from "./CustomerReviews";
import StoreLocations from "./StoreLocations";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContactSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Contact saved:", data);
        alert("Liên hệ thành công, chúng tôi sẽ gọi lại bạn sớm!");
      } else {
        console.error("Error:", response.status);
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };

  return (
    <div className="h-full w-full bg-transparent">
      <div className="h-full min-h-full">
        <div className="flex w-full items-center justify-center">
          <img src="src/assets/HomePott.svg" className="w-full object-fill" />
        </div>
        <SuggestCardList />
        <div className="pl-20">
          <span className="font-mono text-3xl font-semibold">
            Những mẫu nhà thiết kế đẹp tại Việt Nam
          </span>
        </div>
        <div className="flex w-full items-center justify-center pt-10">
          <ProductList products={products} />
        </div>
      </div>
      <div className="pl-20">
        <span className="font-mono text-3xl font-semibold">
          Khách hàng nói gì về siêu thị bản vẽ
        </span>
      </div>
      <CustomerReviews />
      <div className="pl-20">
        <span className="font-mono text-3xl font-semibold">
          Hệ thống siêu thị khắp cả nước
        </span>
      </div>
      <StoreLocations />
      <div className="relative z-10 mx-auto mt-5 h-auto w-full max-w-6xl">
        <div className="relative z-10 h-[504px] w-full rounded-lg bg-[url('/src/assets/Contact_bg_1.svg')] bg-cover backdrop-blur-sm filter" />
        <div className="absolute left-0 top-0 z-20 h-full w-full bg-black/30">
          <div className="relative flex h-full w-full flex-col items-start justify-center p-8">
            <span className="font-inter text-left text-4xl font-medium leading-[48px] text-white">
              Bạn chưa chọn được thiết kế phù hợp?
            </span>
            <span className="font-inter mt-4 text-left text-2xl font-normal leading-[48px] text-white">
              Chúng tôi tư vấn hoàn toàn miễn phí
            </span>
            <input
              id="phone-number"
              type="tel"
              className="font-inter mt-8 h-12 w-full max-w-md rounded border border-white bg-transparent p-4 text-left text-xl font-medium leading-6 text-white/60"
              placeholder="Số điện thoại liên lạc"
              value={phoneNumber}
              onChange={handleInputChange}
            />
            <button
              className="mt-8 transform cursor-pointer rounded-full bg-blue-500 px-8 py-3 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700 focus:outline-none select-none"
              onClick={handleContactSubmit}
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
