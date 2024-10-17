import React from "react";
import SuggestCard from "./SuggestCard";

const SuggestCardList = () => {
  const cards = [
    {
      imgUrl: "src/assets/ph_house-line.svg",
      content: "Nhà Cấp 4",
      desc: "Mô tả ngắn gọn về nhà cấp 4.",
    },
    {
      imgUrl: "src/assets/ph_house-line.svg",
      content: "Nhà Cấp 4",
      desc: "Mô tả ngắn gọn về nhà cấp 4.",
    },
    {
      imgUrl: "src/assets/ph_house-line.svg",
      content: "Nhà Cấp 4",
      desc: "Mô tả ngắn gọn về nhà cấp 4.",
    },
    {
      imgUrl: "src/assets/ph_house-line.svg",
      content: "Nhà Cấp 4",
      desc: "Mô tả ngắn gọn về nhà cấp 4.",
    },
  ];

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
