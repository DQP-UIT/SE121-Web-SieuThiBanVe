import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SuggestCard from "./SuggestCard";

const SuggestCardList = () => {
  const navigate = useNavigate(); // Khai báo navigate để điều hướng

  const [cards, setCards] = useState([
    {
      imgUrl: "src/assets/house4.svg",
      content: "Nhà cấp 4 đẹp",
      desc: "Những căn nhà cấp 4 tiện nghi",
      param: 1, // Thêm param tương ứng
    },
    {
      imgUrl: "src/assets/housect.svg",
      content: "Nhà phố đẹp",
      desc: "Nhà phố hiện đại theo xu hướng hiện nay",
      param: 2, // Thêm param tương ứng
    },
    {
      imgUrl: "src/assets/villa.svg",
      content: "Biệt thự đẹp",
      desc: "Biệt thự sang trọng với thiết kế thông minh",
      param: 3, // Thêm param tương ứng
    },
    {
      imgUrl: "src/assets/hotel.svg",
      content: "Khách sạn đẹp",
      desc: "Khách sạn tiện nghi, mới mẻ và có sức hút",
      param: 4, // Thêm param tương ứng
    },
  ]);

  // Hàm xử lý khi nhấn vào thẻ
  const handleCardClick = (param) => {
    navigate(`/resultrcm/${param}`); // Điều hướng đến đường dẫn
  };

  return (
    <div className="relative mb-8 mt-8 flex h-fit items-center justify-center">
      <div className="flex space-x-20">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.param)} // Gọi hàm điều hướng
            style={{ cursor: "pointer" }} // Biến con trỏ thành bàn tay khi hover
          >
            <SuggestCard
              imgUrl={card.imgUrl}
              content={card.content}
              desc={card.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestCardList;
