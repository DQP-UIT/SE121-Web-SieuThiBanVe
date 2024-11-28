import React, { useEffect, useState } from "react";
import SuggestCard from "./SuggestCard";

const SuggestCardList = () => {
  const [cards, setCards] = useState([
    {
      imgUrl: "src/assets/house4.svg",
      content: "Nhà cấp 4 đẹp",
      desc: "Những căn nhà cấp 4 tiện nghi"
    },
    {
      imgUrl: "src/assets/housect.svg",
      content: "Nhà phố đẹp",
      desc: "Nhà phố hiện đại theo xu hướng hiện nay"
    },
    {
      imgUrl: "src/assets/villa.svg",
      content: "Biệt thự đẹp",
      desc: "Biệt thự sang trọng với thiết kế thông minh"
    },
    {
      imgUrl: "src/assets/hotel.svg",
      content: "Khách sạn đẹp",
      desc: "Khách sạn tiện nghi, mới mẻ và có sức hút"
    }
  ]);

  return (
    <div className="relative mb-8 mt-8 flex h-fit items-center justify-center">
      <div className="flex space-x-20">
        {cards.map((card, index) => (
          <SuggestCard
            key={index}
            imgUrl={card.imgUrl}
            content={card.content}
            desc={card.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestCardList;
