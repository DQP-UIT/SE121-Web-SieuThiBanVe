import { useState } from 'react';
import ProductCard from './components/card/Card';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const banve = {
    name: "Nhà phố hiện đại",
    price: 5000000,
    img: "https://react.dev/images/home/conf2019/cover.svg",
    tang: 3,
    phongngu: 4,
    dientich: 120
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <ProductCard banve={banve} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;