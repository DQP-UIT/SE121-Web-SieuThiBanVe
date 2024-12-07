import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import ProductList from "../../components/productlist/ProductList";
import React, { useEffect, useState } from "react";
import SuggestCardList from "../../components/card/SuggestCardList";
import axiosInstance from "../../axios";

const DrawingManagement = () => {
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
