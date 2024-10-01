import { BrowserRouter } from 'react-router-dom';
import ProductList from './components/productlist/ProductList';
import Header from './components/header/Header';
import HouseSearchBar from './components/searchbar/HouseSearchBar';
import LoginForm from './components/forms/LoginForm';
import Carousel from './components/carousel/Carousel';
import UserTable from './components/table/UserTable';
import ProductDesign from './components/productdesign/ProductDesign';
import Avatar from './components/avatar/Avatar';

function App() {
  const images = [
    "/src/assets/formkit_dollar.svg",
    "/src/assets/formkit_dollar.svg",
    "/src/assets/formkit_dollar.svg",
    "/src/assets/formkit_dollar.svg",
    // Thêm các URL ảnh khác vào đây
  ];
  const inURL = "src/assets/entypo_login.svg"
  const imglist = [
    'src/assets/react.svg',
    'src/assets/react.svg',
    'src/assets/react.svg',
    'src/assets/solar_home-bold.svg',
    'src/assets/react.svg',
    'src/assets/solar_home-bold.svg',
    'src/assets/react.svg',
    'src/assets/solar_home-bold.svg'
  ];
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
  const user = {
    _id: "12345",
    name: "John Doe",
    birthday: "1990-01-01",
    numofdesign: 10,
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890"
  };
  const listofkind = ["Nhà phố", "Biệt thự", "Căn hộ", "Nhà cấp 4"];
  const listofflr = ["1 tầng", "2 tầng", "3 tầng", "4 tầng"];
  const listoflength = ["10m", "15m", "20m", "25m"];
  const listofwidth = ["5m", "7m", "10m", "12m"];
  return (
    <>
      <BrowserRouter>
        <Header inout_url={inURL} />
        <Avatar url={"/src/assets/formkit_dollar.svg"}/>
        <LoginForm />
        <ProductDesign images={images}/>
        <HouseSearchBar listofkind={listofkind} listofflr={listofflr} listoflength={listoflength} listofwidth={listofwidth} />
        <Carousel imglist={imglist} />
        <UserTable user={user} />
        <div>
          <ProductList products={products} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;