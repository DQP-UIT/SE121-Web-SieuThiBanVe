import { BrowserRouter } from 'react-router-dom';
import Info from './pages/info/Info';
import Home from './pages/home/Home';

function App() {
  const product = {
    _id: "123456",
    name: "Nhà Cấp 4",
    price: "500,000,000 VND",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ],
    floors: 2,
    bedrooms: 3,
    area: "120m²",
    frontage: "10m",
    length: "12m",
    type: "Nhà phố",
    style: "Hiện đại",
    companyName: "Công ty Thiết kế ABC"
  };
  return(
    <Home />
  )
}

export default App;