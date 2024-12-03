import React from "react";
import ProductList from "../../components/productlist/ProductList";

export default function DrawingManagement() {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: "20px",
    },
    header: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
  };
  const products = [
    {
      id: 1,
      name: "Product 1",
      img: "https://via.placeholder.com/150",
      tang: 2,
      phongngu: 3,
      dientich: 120,
      price: 1000000,
    },
    {
      id: 2,
      name: "Product 2",
      img: "https://via.placeholder.com/150",
      tang: 3,
      phongngu: 4,
      dientich: 150,
      price: 2000000,
    },
    {
      id: 3,
      name: "Product 3",
      img: "https://via.placeholder.com/150",
      tang: 1,
      phongngu: 2,
      dientich: 90,
      price: 1500000,
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>Quản lý bản vẽ</div>
      <div className="justify-left flex w-full min-w-fit items-center pt-10">
        <ProductList products={products} />
      </div>
    </div>
  );
}
