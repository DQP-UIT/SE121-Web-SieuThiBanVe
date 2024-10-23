import React from "react";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import ProductTable from "../../components/table/ProductTable";
import ContactCard from "../../components/contact/ContactCard";
import { BrowserRouter } from "react-router-dom";

const product = {
  _id: "123456",
  name: "Nhà Cấp 4",
  price: "500,000,000 VND",
  imglist: [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ],
  floors: 2,
  bedrooms: 3,
  area: "120m²",
  frontage: "10m",
  length: "12m",
  type: "Nhà phố",
  style: "Hiện đại",
  companyName: "Công ty Thiết kế ABC",
};
const Info = () => {
  const inout_url = "src/assets/entypo_login.svg";
  return (
    <div>
      <Header inout_url={inout_url} />
      <div>
        <span className="ml-8 font-sans text-3xl font-semibold">
          {product.name}
        </span>
      </div>
      <div className="mt-12 flex">
        <div className="ml-28 basis-2/3">
          <Carousel imglist={product.imglist} />
        </div>
        <div>
          <ContactCard />
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
