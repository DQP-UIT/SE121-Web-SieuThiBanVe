import React from "react";
import Header from "../../components/header/Header";
import Carousel from "../../components/carousel/Carousel";
import ProductTable from "../../components/table/ProductTable";
import ContactCard from "../../components/contact/ContactCard";

const Info = ({ product }) => {
  return (
    <div>
      <Header />
      <div>
        <span>{product.name}</span>
      </div>
      <div className="flex">
        <div>
          <Carousel imglist={product.imglist} />
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
      <div>
        <ProductTable product={product} />
      </div>
    </div>
  );
};

export default Info;
