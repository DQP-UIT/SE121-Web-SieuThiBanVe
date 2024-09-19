import { useState } from 'react';
import ProductCard from './components/card/Card';
import { BrowserRouter } from 'react-router-dom';
import ProductList from './components/productlist/ProductList';
import SearchBar from './components/searchbar/SearchBar';
import Header from './components/header/Header';

function App() {
  const banve = {
    name: "Nhà phố hiện đại",
    price: 5000000,
    img: "https://react.dev/images/home/conf2019/cover.svg",
    tang: 3,
    phongngu: 4,
    dientich: 120
  };
  const products = [
    {
      id: 1,
      name: "Product 1",
      img: "https://via.placeholder.com/150",
      tang: 2,
      phongngu: 3,
      dientich: 120,
      price: 1000000
    },
    {
      id: 2,
      name: "Product 2",
      img: "https://via.placeholder.com/150",
      tang: 3,
      phongngu: 4,
      dientich: 150,
      price: 2000000
    },
    {
      id: 3,
      name: "Product 3",
      img: "https://via.placeholder.com/150",
      tang: 1,
      phongngu: 2,
      dientich: 90,
      price: 1500000
    },
    {
      id: 4,
      name: "Product 4",
      img: "https://via.placeholder.com/150",
      tang: 2,
      phongngu: 3,
      dientich: 110,
      price: 1800000
    },
    {
      id: 5,
      name: "Product 5",
      img: "https://via.placeholder.com/150",
      tang: 3,
      phongngu: 5,
      dientich: 200,
      price: 2500000
    },
    {
      id: 6,
      name: "Product 6",
      img: "https://via.placeholder.com/150",
      tang: 1,
      phongngu: 1,
      dientich: 70,
      price: 900000
    },
    {
      id: 7,
      name: "Product 7",
      img: "https://via.placeholder.com/150",
      tang: 2,
      phongngu: 3,
      dientich: 1300,
      price: 1700000
    },
    {
      id: 8,
      name: "Product 8",
      img: "https://via.placeholder.com/150",
      tang: 4,
      phongngu: 6,
      dientich: 250,
      price: 3000000
    },
    {
      id: 9,
      name: "Product 9",
      img: "https://via.placeholder.com/150",
      tang: 2,
      phongngu: 3,
      dientich: 140,
      price: 1900000
    }
  ];
  return (
    <>
      <BrowserRouter>
      <Header/>
        <div>
          <ProductList products={products} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;